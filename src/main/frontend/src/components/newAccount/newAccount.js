import React, { useState, Component } from 'react';
import {Logo} from '../../logo.js';
import axios from 'axios';

import './newAccount.css';

const 요구사항 = [{
    id:'아이디',
    name : 'id',
    inputType:'text',
    btn: true,
    addOn : true,
    addClass:'',
    err:'영문, 숫자만 조합 (영문 필수 포함)하여 2자 이상 16자 이하로 입력해주세요.'
},{
    id:'비밀번호',
    name : 'pw',
    inputType:'password',
    inputBox2:true,
    addOn : true,
    addClass:'display-column ',
    err:'영문 소문자, 숫자를 조합하여 8자 이상 20자 이하로 입력해주세요.'
},{
    id:'이름',
    name : 'name',
    inputType:'text',
    addClass:''
},{
    id:'전화번호',
    name : 'callNum',
    inputType:'text',
    addClass:''
},{
    id:'이메일',
    name : 'email',
    inputType:'text',
    inputBox2:true,
    at:true,
    addClass:''
}];

const 요구사항기관 = [{
    id:'아이디',
    name : 'id',
    inputType : 'text',
    btn : true,
    addOn : true,
    addClass: '',
    err:'영문 소문자, 숫자를 조합하여 8자 이상 20자 이하로 입력해주세요.',
},{
    id:'비밀번호',
    name : 'pw',
    inputType : 'password',
    inputBox2 : true,
    addOn : true,
    addClass:'display-column ',
    err:'영문 소문자, 숫자를 조합하여 8자 이상 20자 이하로 입력해주세요.'
},{
    id:'기관명',
    name : 'name',
    inputType : 'text',
    addClass: '',
},{
    id:'대표자명',
    name : 'institutionCEO',
    inputType : 'text',
    addClass: '',
},{
    id:'사업자 등록번호',
    name : 'registrationNumber',
    inputType : 'number',
    addClass: '',
    pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}"
},{
    id:'이메일',
    name : 'email',
    inputType : 'text',
    inputBox2 : true,
    at: true,
    addClass: '',
},{
    id:'전화번호',
    name : 'callNum',
    inputType : 'number',
    addClass: '',
}]

class NewAccout extends Component {
    
    state = {
        subject : this.props.code,
        data : this.props.code === 'member' ? 요구사항 : 요구사항기관,
        menu : this.props.code === 'member' ? '일반회원가입' : '기관회원가입'
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.pw.value !== target.pw2.value){
            alert('비밀번호가 일치하지 않습니다.'); //비밀번호 유효성 체크
            return 0;
        }

        const dataSet = {
            loginId : target.id.value,
            password : target.pw.value,
            name : target.name.value,
            phoneNumber : target.callNum.value,
            email : target.email.value+'@'+target.email2.value,
        };

        if (this.props.code !== 'member'){ //기관 사용자 
            dataSet.institutionCEO = target.institutionCEO.value;
            dataSet.registrationNumber = target.registrationNumber.value;
        }

        const url = '/join/' + this.state.subject;
        axios.post(url,dataSet)
        .then(res => {
            alert('회원가입성공, 메인 화면으로 돌아갑니다.');
            window.location.href='/';
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
    return (
        <div className="containAccount">
            <Logo/>
            <h2>{this.state.menu}</h2>
            <div className="회원가입정보">
                <form onSubmit={this.handleSubmit}>
                    <Input한칸 data={this.state.data[0]}/>
                    <Input한칸 data={this.state.data[1]}/> 
                    <Input한칸 data={this.state.data[2]}/> 
                    <Input한칸 data={this.state.data[3]}/>
                    <Input한칸 data={this.state.data[4]}/>
                    {this.state.data === 요구사항 ? '' : <Input한칸 data={this.state.data[5]}/>}
                    {this.state.data === 요구사항 ? '' : <Input한칸 data={this.state.data[6]}/>}
                <br/><br/>
                <button className='회원가입버튼'
                    style={{'background-color':'#0C09AB'}}
                    type="submit">
                    회원가입
                </button>
                </form>
            </div>
        </div>
    );
}
}

function Input한칸({data}){
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleInputChange = (event) => {
        const valueWithoutSpaces = event.target.value.replace(/\s/g, '');
        setInputValue(valueWithoutSpaces);
      };

    const handleInputChange2 = (event) => {
        const valueWithoutSpaces2 = event.target.value.replace(/\s/g, '');
        setInputValue2(valueWithoutSpaces2);
      };

    const checkDuplicate = ()=>{
        const dataSet = {
            loginId:document.getElementById('아이디').value,
            email:document.getElementById('이메일').value,
        }
        axios.post('/join/checkDuplicateLoginId',dataSet)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className ="회원가입정보한칸">
            <p className = "요구사항항목">{data.id}</p>
            <div className="요구사항인풋과버튼박스">
                <div className={data.addClass+"요구사항인풋과버튼"}>
                    <input
                    type={data.inputType}
                    name={data.name}
                    id ={data.id}
                    placeholder={data.id+"를 입력하세요"}
                    value={inputValue}
                    onChange={handleInputChange}
                    pattern={data.pattern}
                    required/>
                    {data.at ? <p>@</p>:'' }
                    { data.inputBox2 === true ? 
                     <input
                     type={data.inputType}
                     name={data.name+'2'}
                     placeholder={data.id+"를 입력하세요"}
                     value={inputValue2}
                     onChange={handleInputChange2}
                     required/>:''}
                    { data.btn ? <button type="button" className="btnCheck" onClick={checkDuplicate}>중복체크</button> : ''}
                </div>
                { data.addOn ? <p className="경고메시지">{data.err}</p>:''}
            </div>
    </div>
    );
}

export default NewAccout;