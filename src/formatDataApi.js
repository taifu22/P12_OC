/**
 * @file formatDataApi.js is the file for format data (mock or Backend)
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/formatDataApi.js">Répo GitHub</a>
 */

import {getUserPerformance, getUserAverageSessions, getUserActivity} from './dataApi';
import { useParams } from 'react-router-dom'; 
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * Function export for format thet data of performane, activity or session 
 * @module formatDataApi
 * @param {string} data value for format data, that can be performane, activity or session 
 * @returns return the data of performane, activity or session formatted
 */
export default function FormatDataApi(data) {
    
    let {userId} = useParams();

    /**
     * variable that store the data performance ordered
     * @type {Array}
     */
    let orderedActivitiesInChart = [];

    /**
     * variable that store the data session ordered
     * @type {Array}
     */
    let arrayAverage = [];

    /**
     * variable that store the data activity ordered
     * @type {Array}
     */
    let arrayActivity = [];

    const [performanceData, setPerformanceData] = useState();
    const [averageSessions, setAverageSessions] = useState();
    const [activityData, setActivityData] = useState();

    useEffect(()=>{
        if (userId === undefined) {
            userId = 12;
        }
        /**
         * Function that set the data for the chart of performances, sessions and activities from file dataApi.js
         * @async 
         */
        async function fetchData() {
            setPerformanceData(await getUserPerformance(userId));
            setAverageSessions(await getUserAverageSessions(userId));
            setActivityData(await getUserActivity(userId));
        }
        fetchData();
    },[])

    if ((performanceData && data == 'intensity')) {
        const ACTIVITIES = [
            "Intensité",
            "Vitesse",
            "Force", 
            "Endurance",
            "Energie",
            "Cardio",
        ];
        ACTIVITIES.map((item, index) => {
            performanceData.data.map((item1) => {
                if (item1.kind == index+1) {
                    orderedActivitiesInChart.push({
                    activity: item,
                    value: item1.value,
                    });
                }
            })
        })
        return orderedActivitiesInChart
    } 
    else if (averageSessions && data == 'session') {
        averageSessions.sessions.map(item => {
            if (item.day == 1) {
                return item.day = item.day.toString().replace('1', "L")
            } else if (item.day == 2) {
                return item.day = item.day.toString().replace('2', "M")
            } else if (item.day == 3) {
                return item.day = item.day.toString().replace('3', "M")
            } else if (item.day == 4) {
                return item.day = item.day.toString().replace('4', "J")
            } else if (item.day == 5) {
                return item.day = item.day.toString().replace('5', "V")
            } else if (item.day == 6) {
                return item.day = item.day.toString().replace('6', "S")
            } else if (item.day == 7) {
                return item.day = item.day.toString().replace('7', "D")
            }
            return arrayAverage.push(item);
        });
        return arrayAverage
    } 
    else if (activityData && data == 'activity') {  
        activityData.sessions.map(item => {
          let day = item.day.replace('2020-', "");
          item.day = day
          return arrayActivity.push(item) 
        });
        return arrayActivity;
    } 
}
