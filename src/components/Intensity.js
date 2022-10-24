/**
 * @file Intensity.js is the file that contains the component with intensity chart
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/components/Intensity.js">Répo GitHub</a>
 */

import React from 'react';
import FormatDataApi from '../formatDataApi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function Intensity() { 

    /**
     * variable stores the backend or mock data concerning the user
     * @type {Object}
     */ 
    let data = FormatDataApi('intensity');

    return (
        <div className='div-intensity'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={data}
                    outerRadius={window.innerWidth > 1340 ? "70%" : "55%"}
                    >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis 
                        dataKey="activity"
                        stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                        fontSize: 12,
                        fontWeight: 500, 
                        }}
                    />
                    <Radar
                        dataKey="value"
                        fill={"#ff0101"}
                        fillOpacity={0.7}
                        stroke="transparent"
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Intensity; 