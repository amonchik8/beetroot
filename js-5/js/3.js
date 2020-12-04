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
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        };
        while (obj.min > 59) {
            obj.min -= 60;
            obj.hour += 1;
            if (obj.min < 10) {
                obj.min = `0${obj.min}`;
            };
        };     
    } else {
        obj.min += Math.floor(value / 60);
        while (obj.min > 59) {
            obj.min -= 60;
            obj.hour += 1;
            // if (obj.min < 10) {
            //     obj.min = `0${obj.min}`;
            // };
        };
        
        value = value % 60;
        obj.sec += value;
    };
    while (obj.sec > 59) {
        obj.min += 1;
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        };
        obj.sec = obj.sec - 60;
        if (obj.sec < 10) {
            obj.sec = `0${obj.sec}`;
        };
    };
    while (obj.min > 59) {
        obj.hour += 1;
        obj.min -= 60;
        if (obj.min < 10) {
            obj.min = `0${obj.min}`;
        }; 
    };
    while (obj.hour > 23) {
        obj.hour = obj.hour - 24;
        if (obj.hour < 10) {
            obj.hour = `0${obj.hour}`;
        };  
    };
    
    
    // if (obj.min > 59) {
    //     obj.hour += 1;
    //     obj.min = obj.min - 60;
    //     if (obj.min < 10) {
    //         obj.min = `0${obj.min}`;
    //     };  
    // };
    console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
};



changeSec(time, 897876500 );
// 897876500
// 4000



// function changeHour(obj, value) {
//     obj.hour += value;
//     if (obj.hour > 23) {
//         obj.hour = obj.hour - 24;
//         if (obj.hour < 10) {
//             obj.hour = `0${obj.hour}`;
//         };  
//     };
//     console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
// };

// changeHour(time, 28);