"use strict";

const styles = [
    {
        name : "color:",
        meaning : "red;",
    },
    {
        name : "font-size:",
        meaning : "20px;",
    },
    {
        name : "text-align:",
        meaning : "center;",
    },
];

function showText(arr, text) {
    document.write(`<p style ="${styles[0].name}${styles[0].meaning}${styles[1].name}${styles[1].meaning}${styles[2].name}${styles[2].meaning}">${text}</p>`);
    
};

showText(styles, "Текст");