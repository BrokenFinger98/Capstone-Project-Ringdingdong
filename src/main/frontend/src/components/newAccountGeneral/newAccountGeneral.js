import React, { useState, Component } from 'react';
import {Logo} from '../../logo.js';
import axios from 'axios';

import './newAccountGeneral.css';

class NewAccoutGeneral extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.pw.value !== target.pw2.value){
            alert('비밀번호가 일치하지 않습니다.'); //비밀번호 유효성 체크
            return 0;
        }

        const dataSet = [{ //백으로 갈 데이터셋
            id : target.id.value,
            pw : target.pw.value,
            name : target.name.value,
            callNum : target.callNum.value,
            email : target.email.value+'@'+target.email2.value,
        }];

        axios.post('/join/member'.dataSet)
        .then(res => {
            const data = res.json();
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
    
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

    
    return (
        <div className="containAccount">
            <Logo/>
            <h2>일반회원가입</h2>
            <div className="회원가입정보">
                <form onSubmit={this.handleSubmit}>
                    <Input한칸 data={요구사항[0]}/>
                    <Input한칸 data={요구사항[1]}/> 
                    <Input한칸 data={요구사항[2]}/> 
                    <Input한칸 data={요구사항[3]}/>
                    <Input한칸 data={요구사항[4]}/> 
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
        const id = document.getElementById('아이디').value;

        axios.post('/join/checkDuplicateEmail',id)
        .then(res => {
            console.log(res.json());
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

export default NewAccoutGeneral;