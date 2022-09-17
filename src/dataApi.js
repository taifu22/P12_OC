import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from './data';

function getUserMainData() {
    return USER_MAIN_DATA;
}

function getUserActivity() {
    return USER_ACTIVITY;
}

function getUserAverageSessions() {
    return USER_AVERAGE_SESSIONS;
}

function getUserPerformance() {
    return USER_PERFORMANCE;
}

export {getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformance}