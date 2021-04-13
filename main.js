
var submit = document.querySelector("#submit");
var userid = document.querySelector("#initials");


//function that returns the initials of entered name.
//If  its one word then return the first and second word in uppercase.
// If it's more than one then return the first of first word and the first of last word.
function nameInitials(){
 var myname = document.querySelector("#username").value;
  var splittedName= myname.split(" ");
  
  var length = splittedName.length;
  
    if(length == 1){
        username = myname[0].toUpperCase() + myname[1].toUpperCase();
    }
    else{

         username = splittedName[0][0].toUpperCase() + splittedName[length-1][0].toUpperCase();
        

    }

    userid.innerHTML = username;
   
    
}


