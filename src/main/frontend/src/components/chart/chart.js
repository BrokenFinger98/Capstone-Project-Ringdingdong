
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import React, { useState } from 'react';
import axios from 'axios';

function 요일체인저(요일){
  switch(요일){
    case '월':
      return 'MON';
    case '화':
      return 'TUE';
    case '수':
      return 'WED';
    case '목':
      return 'THU';
    case '금':
      return 'FRI';
    case '토':
      return 'SAT';
    case '일':
      return 'SUN';
  }
}

async function 데이터가져와({marker},요일){
    const res = 요일체인저(요일);
    const command = '/traffic/'+res+'/'+marker;
    const response = await axios.get(command);
    return response.data;
  }

function RenderChart({marker}){

  const [isActive, setToggleState] = useState(false);
  const handleButtonClick = () => {
      setToggleState(!isActive);
    };

  const [dataSet, changeData] = useState([]);

  const toggleOn = async(event) =>{
  try{
       const 가져온데이터 = await 데이터가져와({marker},event.target.textContent); //데이터 잘 넘어오면 넘기는 data는 이 데이터.
        changeData(가져온데이터);
  }catch(err){
    console.log(err);
  }
    const btn = document.getElementById('토글버튼').querySelectorAll('button')
      btn.forEach((child)=>{
        child.classList.add('투명화');
        child.classList.remove('불투명화');
      });
      event.target.classList.add('불투명화');
  }

  const buttonClass = isActive ? '투명화' : '불투명화';
  const buttonClass2 = isActive ? '불투명화' : '투명화';
  const 보일까안보일까 = isActive ? '보인다' : '안보인다';
  const 안보일까보일까 = isActive ? '안보인다' : '보인다';

  return(
    <div className="차트">
      <div>차량별 이동량</div>
      <div className="토글버튼박스">
        <button className={buttonClass} id="혼잡도버튼" onClick={handleButtonClick}>혼잡도</button>
        <button className={buttonClass2} id="차량버튼" onClick={handleButtonClick}>차량</button>
      </div><br/>
      <div id = "토글버튼">
        <button onClick={toggleOn}>월</button>
        <button onClick={toggleOn}>화</button>
        <button onClick={toggleOn}>수</button>
        <button onClick={toggleOn}>목</button>
        <button onClick={toggleOn}>금</button>
        <button onClick={toggleOn}>토</button>
        <button onClick={toggleOn}>일</button>
      </div><br/>
      <div className={보일까안보일까}>
        <RenderStringChart data={dataSet}/>
      </div>
      <div className={안보일까보일까}>
        <RenderBarChart data={dataSet}/>
      </div>
    </div>
  );
}

function RenderBarChart({data}){
  const tickFormatter = (data) => {
    if (data === 0){
      return '원활';
    }
    else if(data === 1){
      return '서행';
    }
    else if(data === 2){
      return '혼잡';
    }
  };
    return(
      <BarChart width={450} height={350} data={data}>
        <Bar dataKey="congestion" fill="#8884d8" />
        <CartesianGrid stroke="#ccc" horizontalPoints={[1, 2]} /> 
        <XAxis dataKey="hour"/>
        <YAxis interval={1} tickFormatter={tickFormatter} />
        <Legend/>
      </BarChart>
    );   
}

function RenderStringChart({data}){
return (
    <LineChart width={450} height={350} data={data}>
      <Line type="monotone" dataKey="numberOfCar" stroke="#8884d8" />
      <Line type="monotone" dataKey="numberOfTruck" stroke="#111111" />
      <Line type="monotone" dataKey="numberOfMotorcycle" stroke="#bbbbbb" />
      <Line type="monotone" dataKey="numberOfBus" stroke="#cccccc" />
      <Line type="monotone" dataKey="congestion" stroke="#242424" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="hour"/>
      <YAxis />
      <Legend/>
    </LineChart>
  );
}

export default RenderChart;