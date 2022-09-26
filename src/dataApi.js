import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data'; 
import axios from 'axios';

let dataMock=false

let getDataBackEnd = async (url) => {
    try {
      let res = await axios.get(url).then(res => res.data.data);
      return res;
    } catch (error) {
      if (error) {
        return false; 
      }
    }
}

async function getData() {
    if (await getDataBackEnd("http://localhost:3001/user/"+12) === false) {
        dataMock = true
    }   
}
getData();

async function getUserMainData(id) {
    let userMainData;
    if (dataMock === false) {
        userMainData = await getDataBackEnd("http://localhost:3001/user/"+id);
    }
    if (dataMock === true){
        console.log(userMainData);
        USER_MAIN_DATA.find((item)=>{
            if (id == item.id) {
                userMainData = item
                return userMainData
            }
        })
        return userMainData
    }
    else if (userMainData != undefined) {
        return userMainData;
    }
}

async function getUserActivity(id) {
    let userActivity;
    if (dataMock === false) {
        userActivity = await getDataBackEnd("http://localhost:3001/user/"+id+"/activity");   
    }
    if (dataMock === true) {
        USER_ACTIVITY.find(item => {
            if (id == item.id || id == item.userId) {
                userActivity = item
                return userActivity
            }
        })
        return userActivity
    }
    else if (userActivity != undefined) {
        return userActivity;
    }
}

async function getUserAverageSessions(id) {
    let userAverageSession;
    if (dataMock === false) {
        userAverageSession = await getDataBackEnd("http://localhost:3001/user/"+id+"/average-sessions");   
    }
    if (dataMock === true) {
        USER_AVERAGE_SESSIONS.find(item => {
            if (id == item.id || id == item.userId) {
                userAverageSession = item
                return userAverageSession
            }
        })
        return userAverageSession
    }
    else if (userAverageSession != undefined) {
        return userAverageSession;
    }     
}

async function getUserPerformance(id) {
    let userPerformance;
    if (dataMock === false) {
        userPerformance = await getDataBackEnd("http://localhost:3001/user/"+id+"/performance");   
    }
    if (dataMock === true) {
        USER_PERFORMANCE.find(item => {
            if (id == item.id || id == item.userId) {
                userPerformance = item
                return userPerformance
            }
        })
        return userPerformance
    }
    else if (userPerformance != undefined) {
        return userPerformance;
    }
}

export {getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformance}