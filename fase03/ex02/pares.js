function pares(num1, num2) {
    var resto1 = num1 % 2;
    var resto2 = num2 % 2;
    var total = resto1 || resto2;
    
    if(total == 0) {
        return "Os nùmeros sào pares"
    }else {
        return "Os nùmeros nào sào pares"
    }
}
    