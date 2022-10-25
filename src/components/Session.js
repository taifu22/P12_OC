/**
 * @file Session.js is the file that contains the component with session chart
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/components/Session.js">Répo GitHub</a>
 */

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Rectangle, Tooltip, ResponsiveContainer } from 'recharts';
import FormatDataApi from '../formatDataApi';

function Session() { 

    /**
     * variable stores the backend or mock data concerning the user
     * @type {Object}
     */ 
    let data = FormatDataApi('session'); 
    let data1;

    /**
     * Function to display the tooltip
     * @param {boolean} param0 if param true the tooltip is displayed
     * @param {{number}} param1 value to display the minutes
     * @returns return the div to display the tooltip
     */
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

    /**
     * Function to display the rectangle opacity
     * @param {Array} param0 array with the values of points x and y to display the rectangle opacity
     * @param {number} param1 value of width
     * @returns return the component to display the rectangle opacity
     */
    function CustomizedCursor({points, width}) {
        const X = points[0].x;
        const Y = points[0].y;
        return (
            <Rectangle
              width={width+20}
              height={300}
              x={X}
              y={Y-70}
              style={{ background: "red", opacity: 0.1 }}
            />
          );
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