/*a variable declaration and condittional statement*/
let age = 10;
if(age >= 18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

/*hava two custom functions that return the ages of a voter and dislpay whether can vote or not*/
function checkVotingEligibility(age){
    if(age >= 18){
        return "Eligible to vote";
    }else{  
        return "Not eligible to vote";
    }
}
console.log(checkVotingEligibility(12)); // Output: Eligible to vote

// have atleast two loops of the age limit in voting//
for(let i=15; i<=25; i++){
    if(i>=18){
        console.log("Age " + i + ": Eligible to vote");
    }else{
        console.log("Age " + i + ": Not eligible to vote");
    }
}
//with three DOM manipulations//
function checkEligibility(){
    let age = 30; // You can change this value to test different ages
    let result = document.getElementById("result");
    if(age >= 18){
        result.textContent = "You are eligible to vote.";
        result.style.color = "green";
    }else{
        result.textContent = "You are not eligible to vote.";
        result.style.color = "red";
    }
}
//changing the background color of the body//
document.body.style.backgroundColor = "lightyellow";
// changing the text of the heading//
document.getElementById("vote").textContent = "Voting Eligibility Check";