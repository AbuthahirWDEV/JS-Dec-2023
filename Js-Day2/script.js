
let num = parseInt(prompt("Enter the number"))
function finder(num){
    if(num < 0){
        console.log("Negative number cant be calculated")
    }else if(num === 0){
        console.log(num + " factorial is 1")
    }else{
        let fact = 1
        for(let i=1 ; i<=num ; i++){
            fact = fact * i ;
        }
        console.log(num + " factorial is " + fact)
    }
}
finder(num)



