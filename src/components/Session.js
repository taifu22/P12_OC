import React, { PureComponent } from 'react';
import { useState,useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FormatDataApi from '../formatDataApi';

function Session() { 

    let data = FormatDataApi('session');
    //console.log(data);

    function CustomTooltip({active, payload}) {
        if (active && payload) {
            return(
                <div className='tooltip-session'>
                    <p>{`${payload[0].value} min`}</p>
                </div>
            )
        } 
        return null;
    }

    function CustomizedCursor() {
        return(
            <div className='div-cursor-tooltip'>
                 <p>ciao</p>
            </div>
        )
    }

    return (
        data != undefined && <div className='div-session'>
        <p className='p-session'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 70,
                        right: 15,
                        left: 15,
                        bottom: 25,
                    }}
                    //outerRadius="75%"
                >
                <XAxis 
                    dataKey="day"
                    stroke="rgba(255, 255, 255, 0.6)"
                    axisLine={false}
                    dy={10}
                    tickLine={false}
                    tick={{
                    fontSize: 12,
                    fontWeight: 500,
                    }}
                />
                <YAxis
                    dataKey="sessionLength"
                    domain={[0, "dataMax + 20"]}
                    hide={true}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    // cursor={{
                    // stroke: "rgba(0, 0, 0, 0.1)",
                    // strokeWidth: 100,
                    // }}
                    cursor={<CustomizedCursor />}
                    wrapperStyle={{outline:'none'}}
                />
                <Line
                    dataKey="sessionLength"
                    type="monotone"
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth={2}
                    dot={false}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Session;