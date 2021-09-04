function getGreeting() {
    return 'Hello';
}
//console.log(getGreeting());


var greeting = (firstName) => {
    return 'Greetings ' + firstName;
}
//console.log(greeting('Tony'));


var somaNum = (a,b) => {
    return a+b;
}
//console.log(somaNum(2,8));


const getVehiclesCount = () => 400;
//console.log(getVehiclesCount());


var getPriceVar = (desconto) => {
    return 500 - (desconto * 500);
}
//console.log(getPriceVar(0.25));


const getPrice = (total = 0) => {
    const discount = 0.10;
    console.log ("Valor total do produto: " + total);
    console.log ("Valor do desconto: " + discount + "%");
    console.log ("Valor do produto após desconto: ");
    return total - (discount * total)
} 
console.log(getPrice(500));
