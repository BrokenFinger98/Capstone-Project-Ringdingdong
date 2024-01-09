import './frame.css';
import {Logo, LogoAdd} from '../../logo.js';

import { Link } from 'react-router-dom';

export function Frame(){
    return(
        <div>
          <div id="user">
              {localStorage.getItem('jwtToken') ? 
              <a href="/" className = "topNav" onClick={()=>{
                localStorage.removeItem('jwtToken');
                alert('로그아웃 되었습니다.');
                }}>로그아웃</a> :
              <Link to ="/login" className = "topNav">로그인</Link> 
              }
              <Link to ="/newAccount" className ="topNav">회원가입</Link>
          </div>
          <div id="menu">
            <LogoAdd/>
            <nav id ="mainNav">
              <ul className = "horizontal-list">
              <Link to='/intro'><li>서비스 소개 <img src="iconDown.png" width="10px" alt="img err"/></li></Link>
              <Link to='/board'><li>게시판 <img src="iconDown.png" width="10px" alt="img err"/></li></Link>
              <Link to='/upload'><li>데이터 업로드 <img src="iconDown.png" width="10px" alt="img err"/></li></Link>
              </ul>
            </nav>
          </div>
          </div>
    );
  }

export function Banner({name}){

return (
    <div className="banner">
      <h1>{name}</h1>
      <img src="banner.jpg" alt="img err"/>
    </div>
);
}

export function ContentNav({name}){
  return (
    <nav className="contentNav">
        <ul>
            <li id="iconHome">
                <Link to = '/'>
                    <img src="iconHome.png" width="20px" alt="img err"/>
                </Link>
            </li>
            <li className="contentNav한칸">
                <Link to = '/'>
                    <p>{name}</p>
                    <img src="iconDown.png" width="10px" alt="img err"/>
                </Link>
            </li>
            <li className="contentNav한칸">
                <Link to = '/intro'>
                    <p>인사말</p>
                    <img src="iconDown.png" width="10px" alt="img err"/>
                </Link>
            </li>
        </ul>
    </nav>
    );
}


export function Footer(){
  return(
      <div className='footer'>
          <div className="footerBox">
              <Logo/>
              <div>
                  <div className="footerInfo">
                      <div>서울시 광진구 능동로 209 세종대학교</div>
                      <div>TEL : 02-3408-3114</div>
                      <div>Email : DTCA@sju.ac.kr</div>
                  </div>
                  <div>Copyright@ 2023 Sejong RDD | All Rights Reserved</div>
              </div>
          </div>
      </div>
  );
}

