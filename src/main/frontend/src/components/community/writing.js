import './board.css';
import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import axios from 'axios';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Writing extends Component{
    state = {
        title : '',
        contents : '',
    }

    changeTitle = (event) => {
        this.setState({title:event.target.value})
    }

    changeArea = (event) => {
        this.setState({contents:event.target.value})
    }
    
    writeContent = async () =>{
        const dataSet ={
            title : this.state.title,
            contents : this.state.contents,
        };
    
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        };    
                    
        const res = await axios.post('/board/save',dataSet,axiosConfig).then(()=>{
            alert('게시글이 저장되었습니다');
        });
        
    }

    render(){
    return (
        <div>
            <Frame/>
            <Banner name={'게시판'}/>
            <ContentNav name={'게시판'}/>
            <div className='communityContentBox'>
                <h1>글쓰기</h1>
                <div className="formBox">
                        <div>
                            <label>제목</label><br/><br/>
                            <input 
                            type="text"
                            id="contentSubject"
                            placeholder='제목을 입력하세요'
                            onChange = {this.changeTitle}
                            value = {this.state.title}
                            required
                            /><br/><br/><br/>
                        </div>

                        <div>
                            <label>내용</label><br/><br/>
                            <textarea 
                            id="contentTextBox"
                            placeholder='내용을 입력하세요'
                            onChange={this.changeArea}
                            value = {this.state.contents}
                            required
                            />
                        <br/><br/><br/>
                        </div>

                        <div>
                            <label>이미지 삽입</label><br/><br/>
                            <input type="text"
                            placeholder='10Mb이하의 jpg, png 파일만 업로드 가능합니다.'
                            disabled
                            />
                            <button className="btnSubmit" id="btnFile">파일선택</button>
                            <button className="btnSubmit btnWhite">취소</button>
                            <br/><br/><br/><br/>
                        </div>
                </div>
                <div className="submit">
                    <button className ="btnSubmit" onClick={this.writeContent}>제출</button>
                    <button className ="btnSubmit btnWhite" onClick={()=>{this.props.history.push('/board');}}>취소</button>
                </div>
            </div>
            <Footer/>
        </div>

    );
    }
}