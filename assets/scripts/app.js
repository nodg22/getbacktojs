const defaultResult = 0;

let currentResult = defaultResult;
currentResult = (currentResult +10)*3/2-1;


const calcDesc = `(${defaultResult} + 10) * 3/2 - 1`;
const add = (a,b)=>{
    const result = a+b;
    return result;

    
};




outputResult(currentResult, calcDesc);
addBtn.addEventListener('click', add)