import './style/App.css';

import Introduce from './components/introduce/introduce.js';
import Login from './components/login/login.js';
import NewAccount from './components/newAccountInfo/newAccountInfo.js';
import NewAccout from './components/newAccount/newAccount.js';
import Board from './components/community/board.js';
import Post from './components/community/post.js';
import Upload from './components/upload/upload.js';
import Writing from './components/community/writing.js';
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
                <Route path="/board" element={<Board/>}/>
                <Route path="/writing" element={<Writing/>}/>
                <Route path="/post" element={<Post/>}/>
                
                <Route path="/newAccountGeneral" element={<NewAccout code={'member'}/>}/>
                <Route path="/newAccountGov" element={<NewAccout code ={'institution'}/>}/>
                <Route path="/upload" element={<Upload/>}/>

                <Route path="/unwanted-path"  element={<Navigate to="/"/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
