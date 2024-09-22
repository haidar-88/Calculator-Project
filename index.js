const display = document.getElementById("display");
let res = false;

function appendToDisplay(elm){
    if (res){
        display.value="";
        res=false;
    }
    display.value+=elm;
}
function resultdis(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    res = true;
}
function cleardis(){
    display.value="";
}
