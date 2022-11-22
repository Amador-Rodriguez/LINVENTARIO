import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../../assets/css/graphics.css';

function Graphics (props){
  const data = {
    labels : ["Junio", "Julio", "Agosto", "Septembre", "Octubre", "Noviembre"],
    datasets:[
      {
        label : "Ventas",
        fill : false,
        backgroundColor:'rgba(73,155,234,1)',
        borderColor:'rgba(73,155,234,1)',
        pointBorderColor:'rgba(73,155,234,1)',
        pointBorderWidth:1,
        pointHoverRadius:5,
        pointHoverBackgroundColor:'rgba(73,155,234,1)',
        pointHoverBorderColor:'rgba(73,155,234,1)',
        pointRadius:1,
        pointHitRadius:10,
        data: props.values
      }
    ]
  }

  return(
    <div className='containerGrafica'>
      <Line data={data}/>
    </div>
  );
}

export default Graphics;
