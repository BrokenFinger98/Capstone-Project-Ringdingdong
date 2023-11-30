import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import './upload.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SmallMaps(){
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=di9lw1dnxq';

    script.onload = () => {
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.563573, 127.173146),
        zoom: 10,
        minZoom: 12, // 읍면동 레벨
        //임의의 점 클릭시 마커
    });  

    const markers = [
      {
        position: new window.naver.maps.LatLng(37.5509654, 127.1470982),
        title: 1,
      },
      {
        position: new window.naver.maps.LatLng(37.598997, 127.131314),
        title: 2,
      },
      {
        position: new window.naver.maps.LatLng(37.522287, 127.205922),
        title: 3,
      }];

      markers.forEach((markerInfo) => {
        const marker =
        new window.naver.maps.Marker({
          position: markerInfo.position,
          map: map,
          title: markerInfo.title,
        }); 

        const makeMarker = (coord) => {
          //클릭한 위치에 새 마커 생성하는 함수
          const title = markers.length;
          const marker = 
          new window.naver.maps.Marker({
            position: coord,
            map: map,
          });
          //console.log('title',title);
          markers[title] = marker;
        };

      const sender = () => {
        const senderInput = document.getElementById('hiddenSender');
        senderInput.value = marker.title;
      }
      window.naver.maps.Event.addListener(marker,'click',sender);
      window.naver.maps.Event.addListener(map,'click',(e)=>{
        makeMarker(e.coord);
      });
    });
  };
    document.head.appendChild(script);
  }, []);

  return(
    <div id="map" style={{ width: '600px', height: '410px' }}></div>
  );
}


export default function Upload(){

  const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (event) => {
      // 여러 파일이 선택될 때 호출되는 함수
      const files = event.target.files;
      setSelectedFiles(files);
    };


  const handleUpload = (event) => {
    event.preventDefault();

    const dateContent = event.target.dateTime.value;
    const marker = event.target.marker.value;
    
    console.log(dateContent+':00');
    
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      formData.append('date',dateContent);//key-value YYYY/MM/DD

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('image', selectedFiles[i]);
      }
      const url = '/upload/' + marker;

      axios.post(url,formData)
        .then(res => {
            console.log(res.json());
        })
        .catch(err => {
            console.log(err);
        })
  }
  };

  return(
      <div>
      <Frame/>
      <Banner name={'데이터 업로드'}/>
      <ContentNav name={'홈페이지'}/>
      <form onSubmit = {handleUpload}>
          <div className='uploadContentBox'>
              <div className="uploadBox">
                  <p id="업로드설명">파일 업로드 관련 설명</p>
                  <div className="fileBox">
                    <div>
                      <img src="feather_upload-cloud.png" width="60px" alt="img err"/>
                      <div className="업로드부가설명">파일을 선택하거나 드래그하여 올려주세요</div>
                      <div className="업로드부가설명 회색">10MB이하의 JPG파일만 업로드 가능</div>
                    </div>
                    <div className='imgUpload'>
                      <input type="file" onChange={handleFileChange} multiple />
                    </div><br/>
                        <label>데이터 측정 시간</label><br/>
                        <input type="datetime-local" name = "dateTime"></input>
                  </div>
              </div>
              
              <div className="uploadBox">
                <input type="hidden" name="marker" id="hiddenSender"/>
                <SmallMaps/>
              </div>
              
          </div>
          <button className="btnUpload">업로드</button>
          </form>
          <br/><br/>
      <Footer/>
      </div>
  );
}
