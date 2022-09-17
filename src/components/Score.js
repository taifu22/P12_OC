import React from 'react'; 
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function Score(props) {
    //console.log(props.data);

    const pieData = [
        { name: "completed", value: props.data.todayScore, fillColor: "#ff0101" },
        { name: "not-completed", value: 1 - props.data.todayScore, fillColor: "transparent" },
    ];

    return (
        <div className='div-score'>
            <p><b>Score</b></p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={250}
                outerRadius={window.innerWidth > 1340 ? "80%" : "60%"}>
                    <Pie 
                        data={pieData}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                    >
                       {pieData.map((item,index) => {
                        return <Cell
                            key={`cell-${index}`}
                            fill={item.fillColor}
                            cornerRadius="50%"
                        />
                       })}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='div-resultat-score'>
                <p className='p-result-score'>{`${100 * props.data.todayScore}%`}</p>
                <br />
                <p className='p-text-score'>de votre objectif</p>
                <br />
            </div>
        </div>
    );
}

//Score.proptypes
export default Score;