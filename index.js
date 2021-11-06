let button=document.querySelector(".button")
let head=document.querySelector(".heading")
let ptip1=document.getElementById("ptip1")
let ptip2=document.getElementById("ptip2")
let ptip3=document.getElementById("ptip3")
let ptip4=document.getElementById("ptip4")
let ptip5=document.getElementById("ptip5")
let nump=document.querySelector(".form-input-p")
let amt=document.querySelector(".form-input-a")
let alert=document.querySelector(".alert")
var amtval,val,per;
ptip1.addEventListener("click",()=>{
    ptip1.style.backgroundColor="#F4902A";
    ptip1.style.color="#4852A3"
    ptip2.style.color="#ffffff";
    ptip2.style.backgroundColor="#4852A3"
    ptip3.style.color="#ffffff";
    ptip3.style.backgroundColor="#4852A3"
    ptip4.style.color="#ffffff";
    ptip4.style.backgroundColor="#4852A3"
    ptip5.style.color="#ffffff";
    ptip5.style.backgroundColor="#4852A3"
    document.querySelector('.form-input-custom').value=""
    console.log('clicked')
    per=5;
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
})
ptip2.addEventListener("click",()=>{
    ptip2.style.backgroundColor="#F4902A";
    ptip2.style.color="#4852A3"
    ptip1.style.color="#ffffff";
    ptip1.style.backgroundColor="#4852A3"
    ptip3.style.color="#ffffff";
    ptip3.style.backgroundColor="#4852A3"
    ptip4.style.color="#ffffff";
    ptip4.style.backgroundColor="#4852A3"
    ptip5.style.color="#ffffff";
    ptip5.style.backgroundColor="#4852A3"
    document.querySelector('.form-input-custom').value=""
    console.log('clicked')
    per=10;
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
})
ptip3.addEventListener("click",()=>{
    ptip3.style.backgroundColor="#F4902A";
    ptip3.style.color="#4852A3"
    ptip2.style.color="#ffffff";
    ptip2.style.backgroundColor="#4852A3"
    ptip1.style.color="#ffffff";
    ptip1.style.backgroundColor="#4852A3"
    ptip4.style.color="#ffffff";
    ptip4.style.backgroundColor="#4852A3"
    ptip5.style.color="#ffffff";
    ptip5.style.backgroundColor="#4852A3"
    document.querySelector('.form-input-custom').value=""
    console.log('clicked')
    per=15;
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
})
ptip4.addEventListener("click",()=>{
    ptip4.style.backgroundColor="#F4902A";
    ptip4.style.color="#4852A3"
    ptip2.style.color="#ffffff";
    ptip2.style.backgroundColor="#4852A3"
    ptip3.style.color="#ffffff";
    ptip3.style.backgroundColor="#4852A3"
    ptip1.style.color="#ffffff";
    ptip1.style.backgroundColor="#4852A3"
    ptip5.style.color="#ffffff";
    ptip5.style.backgroundColor="#4852A3"
    document.querySelector('.form-input-custom').value=""
    console.log('clicked')
    per=25;
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
})
ptip5.addEventListener("click",()=>{
    ptip5.style.backgroundColor="#F4902A";
    ptip5.style.color="#4852A3"
    ptip2.style.color="#ffffff";
    ptip2.style.backgroundColor="#4852A3"
    ptip3.style.color="#ffffff";
    ptip3.style.backgroundColor="#4852A3"
    ptip4.style.color="#ffffff";
    ptip4.style.backgroundColor="#4852A3"
    ptip1.style.color="#ffffff";
    ptip1.style.backgroundColor="#4852A3"
    document.querySelector('.form-input-custom').value=""
    per=50;
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
})

function getnump(e){
    val=parseFloat(e.value);
    if(val==0 && val!=null){
        alert.style.display='inline'
    }
    else{
        alert.style.display='none'
    }
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)  && amtval!=0 && val!=0){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
}

function getamt(e){
    amtval=parseFloat(e.value);
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per)  && amtval!=0 && val!=0){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
}
function getCustom(e){
    per=parseFloat(e.value);
    ptip1.style.backgroundColor="#4852A3";
    ptip1.style.color="#ffffff"
    ptip2.style.color="#ffffff";
    ptip2.style.backgroundColor="#4852A3"
    ptip3.style.color="#ffffff";
    ptip3.style.backgroundColor="#4852A3"
    ptip4.style.color="#ffffff";
    ptip4.style.backgroundColor="#4852A3"
    ptip5.style.color="#ffffff";
    ptip5.style.backgroundColor="#4852A3"
    if(!isNaN(amtval) && !isNaN(val) && !isNaN(per) && amtval!=0 && val!=0){
        let ans1=((((per)/100)*amtval)/val).toFixed(2);
        let totAmt=(parseFloat(amtval)+(ans1*val))/val;
        document.querySelector('.tip-answer').innerHTML=("$"+ans1);
        document.querySelector('.tot-answer').innerHTML=("$"+totAmt.toFixed(2));
    }
    else{
        document.querySelector('.tip-answer').innerHTML="$0.00";
        document.querySelector('.tot-answer').innerHTML="$0.00";
    }
}

function reset(){
    document.querySelector('.form-input-custom').value=""
    document.querySelector('.form-input').value=""
    document.querySelector('.form-input-p').value=""
    document.querySelector('.tip-answer').innerHTML="$0.00";
    document.querySelector('.tot-answer').innerHTML="$0.00";
    ptip1.style.backgroundColor="#4852A3";
    ptip1.style.color="#ffffff"
    ptip2.style.color="#ffffff";
    ptip2.style.backgroundColor="#4852A3"
    ptip3.style.color="#ffffff";
    ptip3.style.backgroundColor="#4852A3"
    ptip4.style.color="#ffffff";
    ptip4.style.backgroundColor="#4852A3"
    ptip5.style.color="#ffffff";
    ptip5.style.backgroundColor="#4852A3"
}