import inquirer from 'inquirer';

type ansType = {
    userGuess: number
}
const systemGeneratedNo = Math.floor  (Math.random() * 10); 

const answers: ansType = await inquirer.prompt([
{
    type: "number",
    name: "userGuess",
    message: "Guess a number from 1 to 10 for free Pizza:"
}
])



const {userGuess} = answers;

if(userGuess === systemGeneratedNo){
    console.log(userGuess, "userGuess", systemGeneratedNo, 'sys')
    console.log("Yahoo! your answer is correct.  \n Claim your free pizza now.")
} else {
console.log("Loser! guess again.") 
}

