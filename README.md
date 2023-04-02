# Ts-Inppuirer-prompt
Ts Inquirer prompt


// What is inquirer?
// Inquirer is a method to get user data by prompt.

==> To Use  inquirer follow the given steps


1=>>> Create tsconfig file :===>      tsc --init  or  tsc.cmd —init
2=>>> Create package.json  :===>      npm init -y     
3=>>> Install types for node module :===>   npm i @types/node -D
4=>>> Make Following changes in your project
  1--> In the package.json add this:      "type": "module",
  2--> In the tsconfig.json set module and moduleResolution:
     "module": "nodenext",
     "moduleResolution": "NodeNext", 
     "target": "es2020", 
5=>>  Install inquirer :===>    npm i inquirer 
6=>>  Install dev types :==>    npm i --save-dev @types/inquirer
7=>>  Compile ts to js :==>    tsc   /   tsc.cmd -w
8=>>  Run file    :===>        node inquirer.js (file name can be on your own choice)

NOTE :: before step-7 .. import inquirer in your ts file and code in it lets have an example
  1-->>  importing inquirer in my file ::==>>      import inquirer from "inquirer";
  2-->> lets code :
  
      let a = await inquirer.prompt({
      name:'Age',
      })
       console.log(a.Age);
       
       NOW COMPILE AND RUN YOUR FILE BY FOLLOWING THE STEP 7 AND 8

 
Note : for this must have an active internet connection

