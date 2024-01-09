import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../../logo.js';
import axios from 'axios';
import './login.css';

class LoginForm extends Component {
    state = {
        currentModule : 'login',
        showData : null,
        inputValue : '',
    }

    clearInput = () => {
        this.setState({inputValue: ''})
    }
    
    handleIdChange = (event) => {
        this.setState({inputValue : event.target.value})
    }

    renderCurrentModule = () => {
        const { currentModule } = this.state;
        switch (currentModule) {
          case 'login':
            return this.loginFormSet();
          case 'findInfo':
            return this.findInfo();
          default:
            return null;
        }
      };

    handleSubmit = async (event) => {
        event.preventDefault();
        const dataSet = {
            loginId : event.target.loginId.value,
            password : event.target.password.value
        };

        const menu = this.props.menu;
        const url = menu.req;

        if (menu.subject === '로그인'){
            const res = await axios.post(url,dataSet);
            const token = res.data;
            localStorage.setItem('jwtToken', token);
            
            alert('로그인 성공');
            window.location.href = "/";
        }
        else if(menu.subject === "아이디 찾기"){
            dataSet.name = dataSet.loginId;
            dataSet.email = dataSet.password;
            delete dataSet.loginId;
            delete dataSet.password;
            
            const res = await axios.post(url,dataSet);
            this.setState({currentModule:'findInfo', showData:res.data})
        
        }else if(menu.subject ==="비밀번호 찾기"){

            
            dataSet.email = dataSet.password;
            delete dataSet.password;

            console.log(dataSet);
            
            const res = await axios.post(url,dataSet);
            this.setState({currentModule:'findInfo', showData:res.data})
        }
    }


    loginFormSet = () =>{
        const menu = this.props.menu;
        return (<form onSubmit={this.handleSubmit}>
            <label htmlFor="loginId">{menu.id}</label><br/>
            <input
                type="text"
                id="username"
                name="loginId"
                placeholder={menu.id+'를 입력하세요'}
                onChange={this.handleIdChange}
                value = {this.state.inputValue}
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
        </form>);
    }

    findInfo = () =>{
        window.addEventListener('popstate', ()=>{
            this.setState({currentModule:'login'});
            this.renderCurrentModule();
        }
            );
        return(
                <div id="loginForm">
                    <h4>{this.props.menu.subject} 결과</h4>
                    <div>{this.state.showData}</div>
                </div>
        );
    }

    
    render() {
        const {menu} = this.props;

        return (
            <div className="containerBox">
                <Link to = '/'><Logo/></Link>
                <h2>{menu.subject}</h2>
                <div id="loginForm">
                    {this.renderCurrentModule()}
                </div>
            </div>
        );
    }
}

export default LoginForm;

