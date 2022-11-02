function scuberGreetingForFeet(foot){
    if (foot <= 400 ) {
       
      return "This one is on me!"
    } 
        else if (foot > 400 && foot <= 2000){
          return 'That will be twenty bucks.'
    }
        else if (foot > 2000 && foot <= 2500){
          return 'I will gladly take your thirty bucks.'
    }
        else  {
          return 'No can do.'
        }
    }  
  // Write your code here!


function ternaryCheckCity(city){ 
  return city === "NYC"? "Ok, sounds good.":"No go."
  // Write your code here!
}


function switchOnCharmFromTip(tip){ switch(tip) {
    case 'generous' : 
          return "Thank you so much."
          break;
    case 'not as generous':
          return "Thank you."
          break;
    default :
          return "Bye."


   }

}