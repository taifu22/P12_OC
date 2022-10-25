/**
 * @file dataApi.js is the file for call data backend, or mock if back offline
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/dataApi.js">Répo GitHub</a>
 */
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data'; 
import axios from 'axios';

/**
 * variable that passes in true if backend offline
 * @type {boolean}
 */
let dataMock=false 
 
/**
 * variable stores the backend or mock data concerning the user
 * @type {?Object}
 */
let userMainData;

/**
 * variable stores the backend or mock data concerning the user activity
 * @type {?Object}
 */
let userActivity; 

/**
 * variable stores the backend or mock data concerning the user sessions
 * @type {?Object}
 */
let userAverageSession;

/**
 * variable stores the backend or mock data concerning the user performances
 * @type {?Object}
 */
let userPerformance;

/**
 * Function that call the data's backend
 * @async
 * @param {string} url url for call backend
 * @returns {Promise<Object>|boolean} if backend online, return The data from the URL, else return false
 */
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

/**
 * Function that try if backend online
 * @returns if backend offline, it change the value of dataMock in true, for use data mock
 */
async function getData() {
    if (await getDataBackEnd("http://localhost:3001/user/"+12) === false) {
        dataMock = true
    }   
}
getData(); 

/**
 * Function for call back's data or mock's data of the user
 * @async
 * @param {number} id the id of user for call data
 * @returns {Object} return data backend or data mock of user
 */
async function getUserMainData(id) {
    if (dataMock === false) {
        userMainData = await getDataBackEnd("http://localhost:3001/user/"+id);
    }
    if (dataMock === true){
        USER_MAIN_DATA.find((item)=>{
            if (id == item.id) {
                userMainData = item
                return userMainData
            }
        })
        return userMainData
    }
    else if (userMainData != undefined) {
        console.log(userMainData);
        return userMainData;
    }
}

/**
 * Function for call back's data or mock's data of the user's activity
 * @async
 * @param {number} id the id of user for call data
 * @returns {Object} return data backend or data mock of the user's activity
 */
async function getUserActivity(id) {
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

/**
 * Function for call back's data or mock's data of the user's sessions
 * @async
 * @param {number} id the id of user for call data
 * @returns {Object} return data backend or data mock of the user's sessions
 */
async function getUserAverageSessions(id) {
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

/**
 * Function for call back's data or mock's data of the user's performances
 * @async
 * @param {number} id the id of user for call data
 * @returns {Object} return data backend or data mock of the user's performances
 */
async function getUserPerformance(id) {
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