import React from 'react';
import FormatDataApi from '../formatDataApi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function Intensity() {

    let data = FormatDataApi('intensity');
    //console.log(data);

    return (
        <div className='div-intensity'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={data}
                    outerRadius={window.innerWidth > 1340 ? "80%" : "60%"}
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