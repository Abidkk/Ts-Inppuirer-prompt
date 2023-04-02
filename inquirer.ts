console.log('Hello Ts Inquirer Prompt');

import inquirer from "inquirer"; // importing inquirer


// code 
  
let a = await inquirer.prompt({
    name:'Age',
    })
     console.log(a.Age);

     