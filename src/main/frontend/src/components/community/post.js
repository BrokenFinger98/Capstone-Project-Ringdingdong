
import { Component } from "react";
import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import axios from 'axios';

import './post.css';
export default class Post extends Component{
    state = {
        content:{
            title:'test제목입니다',
            contents : 'test 내용입니다',
            writer:'@작성자',
            modifiedTime:'작성시간'
        },
    }
    
    componentDidMount() {
        this.getDataFromDB();
    }

    getDataFromDB = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const url = '/board/' + id;

        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        };
        const res = await axios.get(url,axiosConfig);
        this.setState({content : res.data});
    }

    deleteContents = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const url = '/board/' + id;
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        };
        const res = await axios.delete(url,axiosConfig).then(()=>{
            alert('게시글이 삭제되었습니다');
        });
        
        
    }

    render(){   
        const {content} =  this.state;
        if (content === null || content === undefined) {
            return <p>Loading...</p>;
        }
        
    return(
    <div>
        <Frame/>
        <Banner name={'커뮤니티'}/>
        <ContentNav name={'커뮤니티'}/>
        <div className='communityContentBox'>
                <div className="post">
                        <div className="postTitleBox">
                            <div className="postTitle">{content.title}</div>
                            <div className="postTitleDate">{content.writer}</div>
                            <div>{content.modifiedTime}</div>
                        </div>
                        <div className="postContent">{content.contents}</div>
                        <div className="postCommentBox">
                            {
                            //content.comment.map((data)=>{this.renderComment(data)})
                            }
                        </div>
                </div>
                <br/><br/>
                <button className ="btnWriting" onClick={this.deleteContents}>삭제</button>
        </div>
        <Footer/>
    </div>
    );

    }
}