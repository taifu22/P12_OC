import {getUserPerformance, getUserAverageSessions, getUserActivity} from './dataApi';
import { useParams } from 'react-router-dom'; 
import { useEffect } from 'react';
import { useState } from 'react';

export default function FormatDataApi(data) {

    let {userId} = useParams();
    const [performanceData, setPerformanceData] = useState();
    const [averageSessions, setAverageSessions] = useState();
    const [activityData, setActivityData] = useState();

    useEffect(()=>{
        if (userId === undefined) {
            userId = 12;
        }
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
        const orderedActivitiesInChart = [];
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
        let arrayAverage = [];
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
        let arrayActivity = [];
        activityData.sessions.map(item => {
          let day = item.day.replace('2020-', "");
          item.day = day
          return arrayActivity.push(item) 
        });
        return arrayActivity;
    } 
}
