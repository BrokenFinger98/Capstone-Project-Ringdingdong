import React, { Component } from 'react';

import {Logo} from '../../logo.js';

import './newAccountInfo.css';

import { Link } from 'react-router-dom';

class NewAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerBox2">
                <Logo/>
                <h2>회원가입</h2>
                <div className = "btnBox">
                    <Link to="/newAccountGeneral">
                    <button>
                        <img src="icon개인.png" />
                        <p className="버튼기능설명">일반회원</p>
                        <p className ="버튼세부설명">개인 회원가입</p>
                    </button>
                    </Link>
                    <Link to="/newAccountGov">
                    <button>
                        <img src="icon기업.png" width="100px"/>
                        <p className="버튼기능설명">기업/기관</p>
                        <p className ="버튼세부설명">기업 및 기관 회원가입</p>
                    </button>
                    </Link>
                </div>
                <br/>
                <p className="버튼아래설명">회원구분에 따라 가입절차에 차이가 있으니 반드시 본인에 해당하는 경우를 선택해 주시기 바랍니다.</p>
                <br/><br/>
            </div>
        );
    }
}

export default NewAccount;