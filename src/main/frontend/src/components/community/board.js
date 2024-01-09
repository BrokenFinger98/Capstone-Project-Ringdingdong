import './board.css';
import React, { Component } from 'react';
import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Board extends Component{
    state = {
        data : null,
        양식 : {
            id : '글 번호',
            title : '제목',
            writer : '작성자',
            modifiedTime : '수정 시간'
        },
        page:0,
        size:10,
    }
    
    componentDidMount() {
        this.getDataFromDB(0, 10);
    }

    getDataFromDB = async (page,size) =>{
        const url = `/board?page=${page}&size=${size}`;
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        };
        const res = await axios.get(url,axiosConfig);
        this.setState({data:res.data.content});
    }
    

    게시글 = (data) => {   
        const url = '/post?id=' + data.id;
        return (
        <div className='displayRow 게시글'>
            <div>{data.id}</div>
            <div>
                <Link to={url}>{data.title}</Link>
            </div>
            <div>{data.writer}</div>
            <div>{data.modifiedTime}</div>
        </div>
        );
    }
    
    renderPage = ()=>{
        const pageItems = [];
        for (let i = 1; i < 11; i++) {
        const number = i;
        pageItems.push(
            <li key={number} onClick={() => this.getDataFromDB(number, this.state.size)}>
            {number}
            </li>
        );
        }
        return (<ul className="selectPage">{pageItems}</ul>);
    }

    render(){
        if (!localStorage.getItem('jwtToken')){
            alert('접근 권한이 없습니다.');
        }
        const { data } = this.state;
        if (data === null || data === undefined) {
            return <p>Loading...</p>;
        }

        return(
        <div>
            <Frame/>
            <Banner name={'커뮤니티'}/>
            <ContentNav name={'커뮤니티'}/>
            <div className='communityContentBox'>
                <h1>{'커뮤니티'}</h1>
                    <div>
                        <div className="양식">
                        {this.게시글(this.state.양식)}
                        </div>
                        {data.map((dataPartial) => this.게시글(dataPartial))}
                    </div>
                    <br/><br/>
                        {this.renderPage}
                    <Link to="/writing">
                    <button className ="btnWriting">글쓰기</button>
                    </Link>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Board;


    