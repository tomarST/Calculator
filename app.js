function clear(){
    document.forms[0].elements[0].value="";
    isEqual = 0;
    isOperator = 0;
}
function dott(){
    let text = document.forms[0].elements[0].value;
    if(text){if(!text.includes('.')) document.forms[0].elements[0].value+='.';}
    else document.forms[0].elements[0].value+='.' 
}

function deleete(){
    if(!isEqual) {
        if (document.forms[0].elements[0].value) {
            document.forms[0].elements[0].value = document.forms[0].elements[0].value.slice(0, document.forms[0].elements[0].value.length - 1)
        }
    }
    else { document.forms[0].elements[0].value  = ""; isEqual =0; }
}

function operator(i){
    let text = document.forms[0].elements[0].value
    if(isEqual){ document.forms[0].elements[0].value = ''; isEqual = 0;}
    else{
    if(text){
        if(text[text.length-1]!=='+' && text[text.length-1]!=='-' && text[text.length-1]!=='*'  && text[text.length-1]!=='/'  ){
            document.forms[0].elements[0].value+=i;
        }
    }}
}


function equals(){
    document.forms[0].elements[0].value = eval(document.forms[0].elements[0].value);
    isEqual = 1;
}


let isEqual = 0;
let isOperator = 0;

document.getElementById('clearr').addEventListener('click',clear);
document.getElementById('dot').addEventListener('click',dott);
const numerical =document.getElementsByClassName('numerical');
document.getElementById('back').addEventListener('click', deleete);
document.getElementById('equal').addEventListener('click', equals);
const operators = document.getElementsByClassName('operator');


for(let i =0; i<numerical.length; i++){
numerical[i].addEventListener('click',function(){
    if(!isEqual || isOperator){
    document.forms[0].elements[0].value+=numerical[i].innerText;}
    else{
        document.forms[0].elements[0].value=''+numerical[i].innerText;
        isEqual = 0;
    }
})
}

for(let i =0; i<operators.length; i++){
    operators[i].addEventListener('click',function(){
        operator(operators[i].innerText);
    })
    }
