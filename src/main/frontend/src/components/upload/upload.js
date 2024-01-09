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
        });  

    const markers = [];

    const markersCoord = [
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

      const setInput = (index) => {
        const senderInput = document.getElementById('hiddenSender');
        senderInput.value = index;
      }

      markersCoord.forEach((markerInfo) => {
        const setMarker =
        new window.naver.maps.Marker({
          position: markerInfo.position,
          map: map,
          offset : {title : markerInfo.title},
          title: markerInfo.title,
        });

        markers.push(setMarker);
      });

      const makeMarker = (coord) => {
        const lastMarker = markers[markers.length-1];
        if (lastMarker.push === true){
          markers.pop();
          lastMarker.setMap(null);
        }

        const newMarker = 
        new window.naver.maps.Marker({
          position: coord,
          map: map,
        });
        newMarker.push = true;
        newMarker.title = markers.length+1;
        markers.push(newMarker);        
        window.naver.maps.Event.addListener(newMarker,'click',setInput(newMarker.title));
      };

      //마커 보내고 받기. DB에 저장되어있다고 가정.
      
      
      window.naver.maps.Event.addListener(markers[0],'click',(e)=>{
        setInput(markers[0].title);
      });
      window.naver.maps.Event.addListener(markers[1],'click',(e)=>{
        setInput(markers[1].title);
      });
      window.naver.maps.Event.addListener(markers[2],'click',(e)=>{
        setInput(markers[2].title);
      });
      window.naver.maps.Event.addListener(map,'click',(e)=>{
        makeMarker(e.coord);
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
    const marker = event.target.newMarker.value;


    if (selectedFiles.length > 0) {
      const formData = new FormData();
      formData.append('date',dateContent);

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('image', selectedFiles[i]);
      }

      const url = '/upload/' + marker;

      const axiosConfig = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      };
      
      axios.post(url,formData,axiosConfig)
        .then(res => {
            alert('업로드 성공');
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
                <input type="hidden" name="newMarker" id="hiddenSender"/>
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
