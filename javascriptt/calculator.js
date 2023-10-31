function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Error: Invalid expression";
    }
}


console.log(calculate("2 + 3"));        
console.log(calculate("4 - 2"));         
console.log(calculate("3 * 5"));        
console.log(calculate("6 / 2"));        
console.log(calculate("10 / 0"));      
console.log(calculate("5 * "));
