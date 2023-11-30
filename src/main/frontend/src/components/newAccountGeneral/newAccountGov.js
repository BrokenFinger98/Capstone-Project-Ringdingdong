import React, { useState, Component } from 'react';
import {Logo} from '../../logo.js';

import './newAccountGeneral.css';


class NewAccoutGov extends Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = (event) => {
        /*
        const { name, value } = event.target;
        this.setState({ [name]: value }); */
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        //서버로 데이터 보냄
        alert('hi');

        //console.log('아이디:', this.state.username); 실제 웹 콘솔
        //console.log('비밀번호:', this.state.password);
    }

    render(){
    
     
const 요구사항 = [{
    id:'아이디',
    inputType:'text',
    inputBox1:'visible-element',
    inputBox2:'hidden-element',
    addOn:'visible-element 경고메시지',
    btn:'visible-element',
    at:'hidden-element',
    addClass:'',
    err:'영문, 숫자만 조합 (영문 필수 포함)하여 2자 이상 16자 이하로 입력해주세요.'
},{
    id:'비밀번호',
    inputType:'password',
    inputBox1:'visible-element width-300',
    inputBox2:'visible-element width-300',
    addOn:'visible-element 경고메시지',
    btn:'hidden-element',
    at:'hidden-element',
    addClass:'display-column ',
    err:'영문 소문자, 숫자를 조합하여 8자 이상 20자 이하로 입력해주세요.'
},{
    id:'기관명',
    inputType:'text',
    inputBox1:'visible-element',
    inputBox2:'hidden-element',
    addOn:'hidden-element 경고메시지',
    btn:'hidden-element',
    at:'hidden-element',
    addClass:''
},{
    id:'대표자명',
    inputType:'text',
    inputBox1:'visible-element',
    inputBox2:'hidden-element',
    addOn:'hidden-element 경고메시지',
    btn:'hidden-element',
    at:'hidden-element',
    addClass:''
},{
    id:'사업자 등록번호',
    inputType:'text',
    inputBox1:'visible-element',
    inputBox2:'hidden-element',
    addOn:'hidden-element 경고메시지',
    btn:'hidden-element',
    at:'hidden-element',
    addClass:''
},
{
    id:'이메일',
    inputType:'text',
    inputBox1:'visible-element width-300',
    inputBox2:'visible-element width-300',
    addOn:'hidden-element 경시지',
    btn:'hidden-element',
    at:'visible-element setAt',
    addClass:''
},{
    id:'전화번호',
    inputType:'text',
    inputBox1:'visible-element',
    inputBox2:'hidden-element',
    addOn:'hidden-element 경고메시지',
    btn:'hidden-element',
    at:'hidden-element',
    addClass:''
}
]
        return (
        <div className = "containAccount">
            <Logo/>
            <h2>기관회원가입</h2>
            <div className="회원가입정보">
                <form>
                    <Input한칸 data={요구사항[0]}/>
                    <Input한칸 data={요구사항[1]}/> 
                    <Input한칸 data={요구사항[2]}/> 
                    <Input한칸 data={요구사항[3]}/>
                    <Input한칸 data={요구사항[4]}/> 
                    <Input한칸 data={요구사항[5]}/> 
                    <Input한칸 data={요구사항[6]}/> 
                </form>
                <br/><br/>
                <button className='회원가입버튼'
                    style={{'background-color':'#0C09AB'}}>
                    회원가입
                </button>
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

      
    return (
        <div className ="회원가입정보한칸">
            <p className = "요구사항항목">{data.id}</p>
            <div className="요구사항인풋과버튼박스">
                <div className={data.addClass+"요구사항인풋과버튼"}>
                    <input
                    type={data.inputType}
                    className={data.inputBox1}
                    name="username"
                    placeholder={data.id+"를 입력하세요"}
                    value={inputValue}
                    onChange={handleInputChange}
                    required/>
                    <p class={data.at}>@</p>
                    <input
                    type={data.inputType}
                    className={data.inputBox2}
                    name="password"
                    placeholder={data.id+"를 입력하세요"}
                    value={inputValue2}
                    onChange={handleInputChange2}
                    required/>
                    <button className={data.btn+" btnCheck"}>중복체크</button>
                </div>
                <p className={data.addOn}>{data.err}</p>
            </div>
    </div>
    );
}

export default NewAccoutGov;