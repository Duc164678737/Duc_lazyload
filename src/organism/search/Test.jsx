// import React, { useEffect,  useState } from 'react'

// function Test(func, delay) {
//     let timeout;

//     return function executedFunc(...args) {
//         if (timeout) {
//             clearTimeout(timeout);
//         }

//         timeout = setTimeout(() => {
//             func(...args);
//             timeout = null;
//         }, delay);
//     };
// }

// export default Test


function Test(func, delay) {
    let timeoutId

    return function(...arg) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...arg)
      }, delay)
    }
    }
export default Test
