function solution(price, money, count) {
    var answer = 0;
    let payMoney = 0;
    let round = 0;
    for(let i = 1; i <= count ; i++){
        payMoney += price*i
    }
    if(payMoney > money){
        return payMoney - money
    }else{
     return 0   
    }
}