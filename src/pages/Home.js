import React from 'react';
import Activity from '../components/Activity';
import Session from '../components/Session';
import Intensity from '../components/Intensity';
import Score from '../components/Score';
import Energy from '../components/Energy';
import fire from '../assets/fire.png';
import chicken from '../assets/chicken.png';
import apple from '../assets/apple.png';
import hamburger from '../assets/hamburger.png';
//import { useParams } from 'react-router-dom';
//import {getUserMainData} from '../dataApi';
import FormatDataApi from '../formatDataApi';

function Home() {
    
    // let {userId} = useParams();

    // if (userId === undefined) {  
    //     userId = 12;
    // }

    // let data = getUserMainData().find(item => {
    //     if (userId == item.id) {
    //         return item
    //     }
    // })
    let data = FormatDataApi('home');
    return (
        <div className='div-home'>
            <div className='div-home-center'>
                <div className='home-title'>
                    <h1>Bonjour {data.userInfos.firstName}</h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
                </div>
                <div className='center-home'>
                    <Activity />
                </div>
                <div className='center-bottom-home'>
                    <Session />
                    <Intensity />
                    <Score data={data} />
                </div>
            </div>
            <div className='div-home-right'>
                <Energy image={fire} item={'Calories'} bgColor={'rgb(255, 0, 0, 0.1)'} data={data.keyData.calorieCount+'kcal'} />
                <Energy image={chicken} item={'Proteines'} bgColor={'rgba(74, 184, 255, 0.1)'} data={data.keyData.proteinCount+'g'}/>
                <Energy image={apple} item={'Glucides'} bgColor={'rgb(249, 206, 35, 0.1)'} data={data.keyData.carbohydrateCount+'g'}/>
                <Energy image={hamburger} item={'Lipides'} bgColor={'rgba(253, 81, 129, 0.1)'} data={data.keyData.lipidCount+'g'}/>
            </div>  
        </div>
    ); 
}

export default Home;