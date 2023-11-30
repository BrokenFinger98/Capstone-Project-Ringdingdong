import './community.css';

import {Frame, Banner, ContentNav, Footer} from '../frame/frame.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

function 게시글({data}){   
    const url = '/board/' + data.number;
    //axios로 서버에서 데이터 불러오는 과정 필요할듯.

    // board/{num} => 게시글 번호 조회 (content->id(PK)) get
    /*  content: [

        id / title / writer / modifiedTime 넘어옴
    ]*/ 
    
    return (
    <div className='displayRow 게시글'>
        <div>{data.number}</div>
        <div>
            <Link to={url}>{data.subject}</Link>
        </div>
        <div>{data.view}</div>
    </div>
    );
}


export default function CommunityMain({subject}){ 
    //const [dataCommunity, setData] = useState([]);
    //const param = 1;
    //setData(getBoardData(param));

    const preDataSet = (page, size) =>{
        axios.post(`/board?page=${page}&size=${size}`)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
            return 0;
        })
    }

    //setData(preDataSet(0,10)); //접속시 첫페이지 load.

    
    const 양식 = {
        number : '글 번호',
        subject : '제목',
        view : '조회수'
    }
    const data =[{
        number:'001',
        subject:'제목예시 제목입니당',
        view:'7'
    },{
        number:'002',
        subject:'실화냐 어쩌구 저쩌구 ',
        view:'27'
    },{
        number:'003',
        subject:'제목입니다 아무말대잔치',
        view:'15'
    },{
        number:'004',
        subject:'제목입니다 아무말대잔치',
        view:'15'
    },{
        number:'005',
        subject:'제목입니다2 아무말대잔치',
        view:'22'
    }];

    return (
        <div>
            <Frame/>
            <Banner name={subject}/>
            <ContentNav name={'공지사항'}/>

            <div className='communityContentBox'>
                <h1>{subject}</h1>
                    <div>
                        <div className="양식">
                            <게시글 data={양식}/>
                        </div>
                        <게시글 data={data[0]}/>
                        <게시글 data={data[1]}/>
                        <게시글 data={data[2]}/>
                        <게시글 data={data[3]}/>
                        <게시글 data={data[4]}/>
                    </div>
                    <br/><br/>
                    <Link to="/writing">
                    <button className ="btnWriting">글쓰기</button>
                    </Link>
            </div>
            <Footer/>
        </div>

    );
}