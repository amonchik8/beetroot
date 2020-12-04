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
    } else if (value % 60 === 0) {
        obj.min += (value / 60);

        // if (value > 59) {
        //     convertMin(value)
        //     obj.hour += 1;
        // }

        if (obj.min > 59) {
            obj.hour += 1;
            obj.min = obj.min - 60;
            if (obj.min < 10) {
                obj.min = `0${obj.min}`;
            };  
        };
        
        
    } else {
        obj.min += Math.floor(value / 60);
        if (obj.min > 59) {
            obj.hour += 1;
            obj.min = obj.min - 60;
            if (obj.min < 10) {
                obj.min = `0${obj.min}`;
            };  
        };
        value = value % 60;
        obj.sec += value;
        if (obj.sec > 59) {
            obj.min += 1;
            obj.sec = obj.sec - 60;
            if (obj.sec < 10) {
                obj.sec = `0${obj.sec}`;
            };
        }; 
    };
    if (obj.hour > 23) {
        obj.hour = obj.hour - 24;
        if (obj.hour < 10) {
            obj.hour = `0${obj.hour}`;
        };  
    };
    if (obj.min > 59) {
        obj.hour += 1;
        obj.min = obj.min - 60;
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        };  
    };
    if (obj.min > 59) {
        obj.hour += 1;
        obj.min = obj.min - 60;
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        };  
    };
    console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
};



changeSec(time, 6800);
// 11100

function convertMin(value) {
    while (value > 59) {
        value -= 60;
        convertMin(value);
    } 
    return value;
}