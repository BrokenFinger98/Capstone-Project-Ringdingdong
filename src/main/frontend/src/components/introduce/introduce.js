import {Frame, Banner, Footer} from '../frame/frame.js';
import './introduce.css';
function Introduce(){

    const 설명 =
`차량 운행의 효율성과 도로 안전을 높이기 위한 귀하의 노력에 감사드립니다.

이 웹사이트는 시각화 기술을 통해 도로 혼잡도와 각 교차로의 시간당 차종별 차량 수를
쉽게 이해할 수 있도록 돕습니다.

운전자들과 교통 관리 담당관들이 보다 빠르고 정확한 결정을 내릴 수 있도록 지원하며,
이를 통해 교통 체증 문제를 해결하고 안전한 운전 환경을 조성하는 데 도움이 될 것입니다.

함께 도로 교통의 미래를 더욱 밝고 안전하게 만들어가길 기대합니다.`;
    
    const 페이지이름 = "서비스 소개";

    return (
        <div>
            <Frame/>
            <Banner name={페이지이름}/>
                <div className='content'>
                    <img src="drone.jpg" width="400px"/>
                    <div id="서비스소개텍스트">
                        <div>안녕하세요 DTCA(Drone Traffic Congestion Analysis)입니다!</div>
                        <h3>저희 웹사이트를 방문해주셔서 감사합니다!</h3>
                        <pre>{설명}</pre>
                    </div>
                </div>
            <Footer/>
        </div>

    );
}
export default Introduce;