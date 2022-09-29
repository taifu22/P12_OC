/**
 * @file Activity.js is the file that contains the component with activity chart
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/components/Activity.js">Répo GitHub</a>
 */

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FormatDataApi from '../formatDataApi';

export default function Activity() {

      /**
      * variable stores the backend or mock data concerning the user
      * @type {Object}
      */ 
      let data = FormatDataApi('activity');

     /**
     * Function to display the tooltip
     * @param {boolean} param0 if param true the tooltip is displayed
     * @param {array} param1 array with values to display the kg or kCal
     * @returns return the div to display the tooltip
     */
      function CustomTooltip({active, payload}) { 
        if (active && payload) {
          return ( 
            <div className='tooltip'>
              <div className='tooltip-red'>
                {`${payload[0].value} kg`} 
              </div>
              <div className='tooltip-red'>
                {`${payload[1].value} kCal`}
              </div>
            </div>
          ); 
        }
       
        return null;
      }

    return (
        <div className='div-activity'> 
            <header> 
                <p><b>Activité quotidienne</b></p>
                <ul>
                    <li><div className='red-li'></div>Poids {'(kg)'}</li>
                    <li><div className='black-li'></div>Calories brulèes {'(kCal)'}</li>
                </ul>
            </header> 
            <ResponsiveContainer width="95%" height="70%">
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                  }}
                  barGap={8}
                  barCategoryGap="35%"
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="day"
                  dy={10}
                  padding={{ left: -30, right: -30 }}
                  //stroke={`${styleVar.neutral400}`}
                  tickLine={false}
                  tick={{ fontSize: 14, fontWeight: 500 }}
                />
                <YAxis
                  yAxisId="kg"
                  dataKey="kilogram"
                  domain={["dataMin - 1", "dataMax + 2"]}
                  allowDecimals={false}
                  dx={48}
                  orientation="right"
                  //stroke={`${styleVar.neutral400}`}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="cal"
                  dataKey="calories"
                  domain={[0, "dataMax + 50"]}
                  hide={true}
                />
                <Bar
                  yAxisId="kg"
                  dataKey="kilogram"
                  maxBarSize={8}
                  fill="black"
                  radius={[50, 50, 0, 0]}
                />
                <Bar
                  yAxisId="cal"
                  dataKey="calories"
                  maxBarSize={8}
                  fill="red"
                  radius={[50, 50, 0, 0]}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{
                    fill: "rgba(0, 0, 0, 0.1)",
                  }}
                  wrapperStyle={{outline:'none'}}
                />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
