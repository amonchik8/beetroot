"use strict";

const time = {
    hour : 20,
    min : 56,
    sec : 20,
};

function getTime(obj) {
    alert(`${obj.hour}:${obj.min}:${obj.sec}`);
};

function changeSec(obj, value) {
    
    if (value % 3600 === 0) {
        obj.hour += (value / 3600);
        while (obj.hour > 23) {
            obj.hour = obj.hour - 24;
        };  
        if (obj.hour < 10) {
            obj.hour = `0${obj.hour}`;
        };
    } else if (value % 60 === 0) {
        obj.min += (value / 60);
        while (obj.min > 59) {
            obj.min -= 60;
            obj.hour += 1;
        };
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        };
        while (obj.hour > 23) {
            obj.hour = obj.hour - 24;
        };  
        if (obj.hour < 10) {
            obj.hour = `0${obj.hour}`;
        };   
    } else {
        obj.min += Math.floor(value / 60);
        while (obj.min > 59) {
            obj.min -= 60;
            obj.hour += 1;
        };
        while (obj.hour > 23) {
            obj.hour = obj.hour - 24;
        };  
        if (obj.hour < 10) {
            obj.hour = `0${obj.hour}`;
        };
        value = value % 60;
        obj.sec += value;
        while (obj.sec > 59) {
            obj.min += 1;
            obj.sec = obj.sec - 60;
        };
        if (obj.sec < 10) {
            obj.sec = `0${obj.sec}`;
        };
        while (obj.min > 59) {
            obj.hour += 1;
            obj.min -= 60;
        };
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        };     
    };
    console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
};
// changeSec(time, 1488 );

function changeMin(obj, value) {
    obj.min += value;
    while (obj.min > 59) {
            obj.min -= 60;
            obj.hour += 1;
    };
    if (obj.min < 10) {
            obj.min = `0${obj.min}`;
    };
    while (obj.hour > 23) {
            obj.hour = obj.hour - 24;
    };  
    if (obj.hour < 10) {
            obj.hour = `0${obj.hour}`;
    };
    console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
};
// changeMin(time, 30);

function changeHour(obj, value) {
    obj.hour += value;
    while (obj.hour > 23) {
        obj.hour = obj.hour - 24;
    };  
    if (obj.hour < 10) {
        obj.hour = `0${obj.hour}`;
    };
    console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
};
// changeHour(time, 8);