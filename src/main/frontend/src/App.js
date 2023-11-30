import './style/App.css';

import Introduce from './components/introduce/introduce.js';
import Login from './components/login/login.js';
import NewAccount from './components/newAccount/newAccount.js';
import NewAccoutGeneral from './components/newAccountGeneral/newAccountGeneral.js';
import NewAccoutGov from './components/newAccountGeneral/newAccountGov.js';
import CommunityMain from './components/community/communityMain.js';
import Upload from './components/upload/upload.js';
import Writing from './components/community/writing.js';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Maps} from './maps.js';

const 로그인 = {
  subject : '로그인',
  id : '아이디',
  pw : '비밀번호',
  inputType : 'password',
  req : '/login/data',
};

const 아이디찾기 = {
  subject : '아이디 찾기',
  id : '이름(기관명)',
  pw : '이메일',
  inputType : 'text',
  req : '/join/findLoginId'
};

const 비밀번호찾기 = {
  subject : '비밀번호 찾기',
  id : '아이디',
  pw : '이메일',
  inputType : 'text',
  req : '/join/findPassword'
};

//<Community/> 그거
//<CommunityMain/> 공지사항 */

function App() {

  return (
    <div className="App">
      <div id ="container">
        <Router>
          <Routes>
                <Route path="/" element={<Maps/>}/>
                <Route path="/intro" element={<Introduce/>}/>
                
                <Route path="/login" element={<Login menu = {로그인}/>}/>
                <Route path="/findID" element={<Login menu = {아이디찾기}/>}/>
                <Route path="/findPW" element={<Login menu = {비밀번호찾기}/>}/>
                
                <Route path="/newAccount" element={<NewAccount/>}/>

                <Route path="/notice" element={<CommunityMain subject={"공지사항"}/>}/>
                <Route path="/board" element={<CommunityMain subject={"커뮤니티"}/>}/>
                <Route path="/writing" element={<Writing/>}/>
                <Route path="/newAccountGeneral" element={<NewAccoutGeneral/>}/>
                <Route path="/newAccountGov" element={<NewAccoutGov/>}/>
                <Route path="/upload" element={<Upload/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
