import React, { useEffect } from 'react';
import { Frame, Footer } from './components/frame/frame.js';
import ReactDOM from 'react-dom';
import './maps.css';
import { Link } from 'react-router-dom';
import RenderChart from './components/chart/chart.js';

function NaverMaps() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=di9lw1dnxq';
    
    script.onload = () => {
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.563573, 127.173146),
        zoom: 10,
        minZoom: 13, // 읍면동 레벨
    });

    const markers = [
      {
        position: new window.naver.maps.LatLng(37.5509654, 127.1470982),
        title: 1,
        name : '구리',
      },
      {
        position: new window.naver.maps.LatLng(37.598997, 127.131314),
        title: 2,
        name : '강동',
      },
      {
        position: new window.naver.maps.LatLng(37.522287, 127.205922),
        title: 3,
        name : '하남',
      },
      {
        position: new window.naver.maps.LatLng(37.1, 127.1),
        title: 4,
      },
      {
        position: new window.naver.maps.LatLng(37.11, 127.11),
        title: 5,
      },
    ];

      markers.forEach((markerInfo) => {
      const marker = new window.naver.maps.Marker({
        position: markerInfo.position,
        map: map,
        title: markerInfo.title,
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content : document.createElement('div'),
        
      });

      const openInfoWindow = () => {
        const contentElement = document.createElement('div');
        ReactDOM.render(<RenderChart marker={marker.title}/>,contentElement);
        infoWindow.setContent(contentElement);
        infoWindow.open(map,marker.position);
      };

      window.naver.maps.Event.addListener(marker,'click',openInfoWindow);
      //alert(`마커 클릭: ${marker.position},${marker.title}`);
  });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div id="map" style={{ width: '1200px', height: '768px' }}></div>
  );
} 

export function Maps(){
  return(
    <div id="지도박스">
      <Frame/>
      <div className = "displayRow">
        <div className ="지도검색창">
            <div className='mapBox'>
              <div>서울 강동구</div>
                <h6>서울 강동구 성내구 강동구청</h6>
            </div>
            <div className='mapBox'>
              <div>경기도 구리</div>
              <h6>경기도 구리시 아차산로487번길 70</h6>
            </div>
            <div className='mapBox'>
              <div>경기도 하남</div>
              <h6>경기도 하남시 대청로 10</h6>
            </div>
        </div>
        <div className="NaverMaps">
          <NaverMaps/>
          <br/><br/><br/>
        </div>
      </div>
      <BottomNav/>
      <Footer/>
    </div>
  );
}


function BottomNav(){
  return (
    <div className="bottomNav displayRow">
      <div className="다른페이지안내">
        <Link to="/notice">
          <img src="iconBoard.png" alt="img err"/>
          <div>공지사항</div>
        </Link>
      </div>
      <div className="다른페이지안내">
        <Link to="/board">
        <img src="iconCommunity.png" alt="img err"/>
        <div>커뮤니티</div>
        </Link>
      </div>
      <div className="다른페이지안내">
      <Link to="/intro">
        <img src="iconHand.png" alt="img err"/>
        <div>인사말</div>
        </Link>
      </div>
      <div className="다른페이지안내">
        <img src="iconInfo.png" alt="img err"/>
        <div>홈페이지 안내</div>
      </div>
    </div>
  );
}