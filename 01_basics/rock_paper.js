let arr = ["rock","scissor","paper"]
function result(userChoice){
    let choice = Math.floor(Math.random()*3);
    let computerChoice = arr[choice];
    console.log(`computer choice was ${computerChoice}`)
    if(computerChoice===userChoice){
        console.log("it is a tie")
    }
    else if(computerChoice==="rock"&&userChoice==="paper"){
        console.log("you win this time")
    }else if(computerChoice==="paper" && userChoice==="scissor"){
        console.log("you win this time")
    }else if(computerChoice==="scissor" && userChoice==="rock"){
        console.log("you win this time")
    }else{
        console.log("you lost this time")
    }
}
result("rock");