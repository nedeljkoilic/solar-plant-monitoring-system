import React from 'react';
import GaugeChart from 'react-gauge-chart'
import './style.css';
function MeasureBox(props) {
    const { innerWidth: width, innerHeight: height } = window;
    return ( 
            <div>
                <GaugeChart id="gauge-chart1" 
                nrOfLevels={props.levels} 
                colors={props.colors} 
                arcWidth={0.2}
                percent={props.percent} 
                style={{width: width/4}}
                textColor='black'
                formatTextValue={( value => props.valueOfMeasurment+props.unit)}
                />
                <label className='labela'>{props.desc}</label>
            </div>
     );
}

export default MeasureBox;