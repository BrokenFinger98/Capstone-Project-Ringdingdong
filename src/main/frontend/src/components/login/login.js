import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../../logo.js';
import axios from 'axios';
import './login.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: '',
            password: '',
        };
    }

    handleIdChange = (event) => {
        this.state.loginId = event.target.value;        
    }
    
    handlePwChange = (event) => {
        this.state.password = event.target.value;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(this.props.menu.req,this.state)
        .then(res => {
            const data = res.json();
            //1. login, 2. findId, 3. findPW -> useState.
            const token = data.token;
            console.log(res.data);
            localStorage.setItem('jwtToken', token);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const {menu} = this.props;
        return (
            <div className="containerBox">
                <a href='./'><Logo/></a>
                <h2>{menu.subject}</h2>
                <div id="loginForm">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="loginId">{menu.id}</label><br/>
                        <input
                            type="text"
                            id="username"
                            name="loginId"
                            placeholder={menu.id+'를 입력하세요'}
                            onChange={this.handleIdChange}
                            required
                        /><p/>
                        <br/>
                        <label htmlFor="password">{menu.pw}</label><br/>
                        <input
                            type={menu.inputType}
                            id="password"
                            name="password"
                            placeholder={menu.pw+'를 입력하세요'}
                            onChange={this.handlePwChange}
                            required
                        /><br/><br/><br/><br/>
                        <button type="submit">{menu.subject}</button>
                        <br/><br/><br/>
                        <nav id="bottomNav">
                            <li><Link to="/newAccount" id="newAccount">회원가입</Link></li>
                            <li>
                                <Link to="/findID" className="findMy">아이디 찾기</Link>
                                <span>  </span>
                                <Link to="/findPW" className="findMy">비밀번호 찾기</Link>
                            </li>
                        </nav>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;