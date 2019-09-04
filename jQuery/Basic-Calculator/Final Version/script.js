let result=document.getElementById('result'),
elTable=document.getElementById('table');

function display(e){
    let obj=e.target;
    let check=obj.id;
    check=check.substring(0,3);

    switch(check){
        case 'res':
            let len=result.value.length;
            if(len>1){
                obj.textContent='';
                // for(let i=0;i<len-1;i++){
                //     obj.textContent+=result.value[i];
                // }
                obj.textContent=result.value.substring(0,len-1);
                result.value=obj.textContent;
            }else{
                result.value='0';
            }
            break;
        case 'cle':
            result.value='0';
            break;
        case 'equ':
            result.value=eval(result.value);
            break;
        case 'per':
            result.value+=obj.textContent;
            break;
        case 'lef':
            result.value=obj.textContent;
            break;
        case 'num':
            if(result.value==='0'){
                result.value=obj.textContent;
            }else{
                result.value+=obj.textContent;
            }
            break;
        default:
            if(result.value!=='0'){
                result.value+=obj.textContent;
            }
            break;
        }
}

elTable.addEventListener('click',display);