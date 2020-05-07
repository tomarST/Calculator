function clear(){
    document.forms[0].elements[0].value="";
}
function dott(){
    let text = document.forms[0].elements[0].value;
    if(text){if(!text.includes('.')) document.forms[0].elements[0].value+='.';}
    else document.forms[0].elements[0].value+='.' 
}

function deleete(){
    if(document.forms[0].elements[0].value){
        document.forms[0].elements[0].value = document.forms[0].elements[0].value.slice(0,document.forms[0].elements[0].value.length-1)
    }

}

function operator(i){
    let text = document.forms[0].elements[0].value
    if(text){
        if(text[text.length-1]!=='+' && text[text.length-1]!=='-' && text[text.length-1]!=='*'  && text[text.length-1]!=='/'  ){
            document.forms[0].elements[0].value+=i;
        }
    }
}


function equals(){
    document.forms[0].elements[0].value = eval(document.forms[0].elements[0].value);
}



document.getElementById('clearr').addEventListener('click',clear);
document.getElementById('dot').addEventListener('click',dott);
const numerical =document.getElementsByClassName('numerical');
document.getElementById('back').addEventListener('click', deleete);
document.getElementById('equal').addEventListener('click', equals);
const operators = document.getElementsByClassName('operator');

console.log(operators)

for(let i =0; i<numerical.length; i++){
numerical[i].addEventListener('click',function(){
    document.forms[0].elements[0].value+=numerical[i].innerText;
})
}

for(let i =0; i<operators.length; i++){
    operators[i].addEventListener('click',function(){
        operator(operators[i].innerText);
    })
    }
