const btn=document.querySelectorAll('button');
const screen=document.querySelector('#screen');
let screenvalue=" ";
for(elements of btn){
    elements.addEventListener('click',(e)=>{
        let value=e.target.innerText;
        if(value=='sin'){
            value=Math.sin(screen.value);
            screenvalue=value;
            screen.value=screenvalue;
        }
        else if(value=='cos'){
            value=Math.cos(screen.value);
            screenvalue=value;
            screen.value=screenvalue;
        }
        else if(value=='tan'){
            value=Math.tan(screen.value);
            screenvalue=value;
            screen.value=screenvalue;
        }
        else if(value=='log'){
            value=Math.log(screen.value);
            screenvalue=value;
            screen.value=screenvalue;
        }
        else if(value=='Fact'){
            let fact=1;
            for(let i=1;i<=screen.value;i++){
                fact=fact*i;    
            }
            screen.value=fact;
        }
        else if(value=='CE'){
            screen.value=screen.value.substr(0,screen.value.length-1);
        }
        else if(value=='AC'){
            screenvalue=" ";
            screen.value=screenvalue;
        }
        else if(value=='pi'){
            value=Math.PI;
            screenvalue+=value;
            screen.value=screenvalue;
        }
        else if(value=='e'){
            screen.value=2.71;
        }
        else if(value =='='){
            screen.value=eval(screenvalue);
        }
        else if(value=='Root'){
            value=Math.sqrt(screen.value);
            screenvalue=value;
            screen.value=screenvalue;
        }
        else if(value=='Sqre'){ 
           screen.value=screen.value**2;
        }
        else{
            screenvalue+=value;
            screen.value=screenvalue;
        }

    })
}