

let bubblemaker=()=>{
    let clutter="";
for(let i=1;i<=120;i++){
clutter +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;

}
document.querySelector("#btpanel").innerHTML=clutter;
}
bubblemaker();


let timer=60;
let runTimer=()=>{
let interval= setInterval(()=>{
   if(timer>0){ timer--;
    document.querySelector("#timerval").innerText=timer;}
    else{
        clearInterval(interval);
        document.querySelector("#btpanel").innerHTML= "<h1>Game over</h1>";
        gameover.removeEventListener("click",eobject);
    }
},1000);
}
runTimer();
let hitrn=0;
let newhit=()=>{
hitrn=  Math.floor(Math.random()*10);
document.querySelector("#hitval").innerText=hitrn;
}

newhit();
let score=0;
let  newscore=()=>{
score+=10;
document.querySelector("#scoreval").innerText=score;
}


let eobject=(e)=>{
    let clickno=(Number(e.target.innerText));
    bubblemaker();
    if(hitrn===clickno){
    newscore();
    bubblemaker();
    newhit();
    }
    if( hitrn!= clickno){
        newhit();
    }
    }

let gameover =document.querySelector("#btpanel")
gameover.addEventListener("click",eobject) 


