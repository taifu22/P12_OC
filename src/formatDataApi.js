import {getUserPerformance, getUserAverageSessions, getUserMainData, getUserActivity} from './dataApi';
import { useParams } from 'react-router-dom'; 

export default function FormatDataApi(data) {

    let {userId} = useParams();
    if (userId === undefined) {
      userId = 12;
    }

    let dataintensity;
    let datasession;
    let datahome;
    let dataActivity;
    
    if (data == 'intensity') {
        getUserPerformance().find(item => {
            if (userId == item.userId) {
                dataintensity = item
                return dataintensity
            }
        })
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
            dataintensity.data.map((item1) => {
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
    else if (data == 'session') {
        getUserAverageSessions().find(item => {
            if (userId == item.userId) {
                datasession = item
                return datasession
            }
        })  
        let data1 = datasession.sessions.map(item => {
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
            return item
        });
        return data1
    } 
    else if (data =='home') {
        getUserMainData().find(item => {
            if (userId == item.id) {
                datahome = item
                return datahome
            }
        })
        return datahome
    } 
    else if (data = 'activity') {
        getUserActivity().find(item => {
            if (userId == item.userId) {
                dataActivity = item
                return dataActivity
            }
        })    
        let newdataActivity = dataActivity.sessions.map(item => {
          let day = item.day.replace('2020-', "");
          item.day = day
          return item 
        })
        return newdataActivity;
    }
}
