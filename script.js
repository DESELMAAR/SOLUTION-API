// function to randanize and fetch API
function myrandom(){
  const myrandom =Math.floor( Math.random()*150);
  const adviceapi =" https://api.adviceslip.com/advice/"+myrandom;
async function getapi(){
 
          try{
            const response = await fetch(adviceapi);
            const data = await response.json();
            printadvice(data);  
          }catch(error){
            console.log(error);
          }

  printnumber(myrandom); //  print number advice
}
getapi()

}

// Function to print number of advice
 function printnumber(num){
  const output1= document.getElementById("myp");
  output1.innerHTML=`Advice # ${num}`;
 }


// Function to print advices
function printadvice(datavariable){
  const output= document.getElementById("mydiv");
  const result = datavariable["slip"]["advice"];
  output.innerHTML=`‟${result}”`;
}


// Functions to Active button when clicked
function onclickfun(){ 
  document.getElementById("change").style.boxShadow="0 0 20px hsl(150, 100%, 66%)";
}
function onclickup(){ 
  document.getElementById("change").style.boxShadow="none";
}