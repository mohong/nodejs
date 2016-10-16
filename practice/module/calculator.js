//计算器模块
function convent(input) {
    return parseFloat(input);
}

function add(a,b) {
    return convent(a) + convent(b);
}

function subtract(a,b) {
    return convent(a) - convent(b);
}

function multiply(a,b) {
    return convent(a) * convent(b);
}

function divide(a,b) {
    return convent(a) / convent(b);
}

module.exports = {add,subtract,multiply,divide};

