/**
 * @file Home.js is the Home of application with all charts
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/pages/Home.js">Répo GitHub</a>
 */

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
import { useParams } from 'react-router-dom'; 
import Erreur_404 from '../pages/Erreur_404';
import {getUserMainData} from '../dataApi';
import { useEffect } from 'react';
import { useState } from 'react';
 
function Home() { 

    let {userId} = useParams();
    if (userId === undefined) {
        userId = 12;
    }

    /**
     * variable that store the data of the user
     * @type {Array}
     */
    const [data1, setData1] = useState()

    /**
     * variable that show a 404 page if the userId doesn't exist
     * @type {string}
     */
    let data2;

    useEffect(()=>{
        /**
         * Function that call data from file dataApi.js
         * @async 
         * @returns {Promise<Object>} return the user's data
         */
        async function fetchData() {
            setData1(await getUserMainData(userId))
        }
        fetchData();
    },[])

    if (data1 != undefined) {
        data2 = '1';
    }

    return (
        data1 ?
        <div className='div-home'>
            <div className='div-home-center'> 
                <div className='home-title'>
                    <h1>Bonjour {data1.userInfos.firstName}</h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
                </div>
                <div className='center-home'>
                    <Activity />
                </div>
                <div className='center-bottom-home'>
                    <Session />
                    <Intensity />
                    <Score data={data1} />
                </div>
            </div> 
            <div className='div-home-right'>
                <Energy image={fire} item={'Calories'} bgColor={'rgb(255, 0, 0, 0.1)'} data={data1.keyData.calorieCount+'kcal'} />
                <Energy image={chicken} item={'Proteines'} bgColor={'rgba(74, 184, 255, 0.1)'} data={data1.keyData.proteinCount+'g'}/>
                <Energy image={apple} item={'Glucides'} bgColor={'rgb(249, 206, 35, 0.1)'} data={data1.keyData.carbohydrateCount+'g'}/>
                <Energy image={hamburger} item={'Lipides'} bgColor={'rgba(253, 81, 129, 0.1)'} data={data1.keyData.lipidCount+'g'}/>
            </div>  
        </div> : data2 =='1' && <Erreur_404 />
    ); 
}

export default Home;