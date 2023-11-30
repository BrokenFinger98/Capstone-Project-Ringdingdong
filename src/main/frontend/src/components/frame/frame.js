//상단바 (Frame) 와 Footer 함수가 정의되어 있음

import './frame.css';
import {Logo, LogoAdd} from '../../logo.js';
import { useState } from 'react';

import { Link } from 'react-router-dom';

function Bars({i}){ //이걸 그냥 nav에 붙는 bars로 사용하면 TopNav에도 적용할 수 있음.
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(!isActive);
    };

    const menu=[{
      name: "서비스 소개",
      menu1 : "인사말",
      link : "/intro",
    },{
      name: "게시판",
      menu1 : "공지사항",
      menu2 : "커뮤니티",
      link : "/notice",
      link2 : "/board",
    },{
      name: "데이터 업로드",
      menu1 : "데이터 업로드",
      link : "/upload",
    }
    ]

  return(
    <div>
      <li onClick={handleClick}>{menu[i].name} <img src="iconDown.png" width="10px" alt="img err"/></li>
      <div className={`${isActive ? 'visible-element ' : 'hidden-element'}`}>
          <ul className='bars'>
            <li><Link to={menu[i].link}>{menu[i].menu1}</Link></li>
            {menu[i].link2?<li><Link to={menu[i].link2}>{menu[i].menu2}</Link></li>:""}           
          </ul>
      </div>
    </div>
  );
}

export function Frame(){
    return(
        <div>
          <div id="user">
              <Link to ="/Login" className = "topNav">로그인</Link>
              <Link to ="/newAccount" className ="topNav">회원가입</Link>
          </div>
          <div id="menu">
            <LogoAdd/>
            <nav id ="mainNav">
              <ul className = "horizontal-list">
                <Bars i={0}/>
                <Bars i={1}/>
                <Bars i={2}/>
              </ul>
            </nav>
          </div>
          </div>
    );
  }

export function Banner({name}){

return (
    <div class="banner">
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

