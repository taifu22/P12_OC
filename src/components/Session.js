import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//import {getUserAverageSessions} from '../dataApi';
import FormatDataApi from '../formatDataApi';
//import { useParams } from 'react-router-dom';

function Session() {

    // let {userId} = useParams();

    // if (userId === undefined) {
    //     userId = 12;
    // }
    let data = FormatDataApi('session');
    // let data = getUserAverageSessions().find(item => {
    //     if (userId == item.userId) {
    //         return item
    //     }
    // })  

    // let data1 = data.sessions.map(item => {
    //     if (item.day == 1) {
    //         return item.day = item.day.toString().replace('1', "L")
    //     } else if (item.day == 2) {
    //         return item.day = item.day.toString().replace('2', "M")
    //     } else if (item.day == 3) {
    //         return item.day = item.day.toString().replace('3', "M")
    //     } else if (item.day == 4) {
    //         return item.day = item.day.toString().replace('4', "J")
    //     } else if (item.day == 5) {
    //         return item.day = item.day.toString().replace('5', "V")
    //     } else if (item.day == 6) {
    //         return item.day = item.day.toString().replace('6', "S")
    //     } else if (item.day == 7) {
    //         return item.day = item.day.toString().replace('7', "D")
    //     }
    //     return item
    // });

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
        <div className='div-session'>
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