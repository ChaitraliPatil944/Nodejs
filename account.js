

var account=function(amount){
    var balance=amount;
var deposit=function(amount){
    balance+=amount;
}
var withdraw=function(amount){
    if(amount<=balance){
        balance-=amount;
    }else{
        console.log("Insufficient funds");
    }
}
var getBalance=function(){
    return balance; 
}
return{
    credit:deposit,
    debit:withdraw,
    balance:getBalance}
}
var myAccount=new account(1000);
myAccount.credit(500);
myAccount.debit(200);
console.log(myAccount.balance());