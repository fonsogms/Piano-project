window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
      "#60d394",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
          sounds[index].currentTime = 0;
          sounds[index].play();
        });
      });
    
  });

const keys=[49,50,51,52,53,54,55,56,57,48,222,187];
let randomSequence=[];
let userInput=[];
let randomNote;
let timeOutArray = [];
let speed=2;
let sequence=4;
let level=1;
document.querySelector(".disLev").innerText="Level: "+ level;
function playRandom(speedo,times){
    for(let i=0;i<=times;i++){
        let audio;
        randomNote= keys[Math.floor(Math.random()*11)];
         audio=document.querySelector(`audio[data-key="${randomNote}"]`)
         randomSequence.push(randomNote)
 //metemos la funcion de intervalo en un array 
 //para luego poder pausarlo cuando queramos
     timeOutArray.push(setTimeout(()=>{
        audio.currentTime=0;
        audio.play();
        setTimeout(()=>{
        audio.pause();
        },speedo*1000-50)
     }, i*speedo*1000))   
        
        
    }
    return randomSequence;
}

function playRandomNote(){
    let audio;
    randomNote=keys[Math.floor(Math.random()*11)];
    audio=document.querySelector(`audio[data-key="${randomNote}"]`);
    randomSequence.push(randomNote);
    audio.play();
    audio.currentTime=0;
    return randomSequence;

}




function pauseMusic(){
    let audio;
    for (const key of keys){
    audio=document.querySelector(`audio[data-key="${key}"]`);
    audio.currentTime=100000;
    audio.pause();
    }
}

function checkUser(notes,userNotes){
    let note=notes.join("");
    let userNote=userNotes;
    function check(){if(note===userNote){
        sequence+=1;
        level+=1;
        document.querySelector(".disLev").innerText="Level: "+ level;

        console.log("awesome")
        console.log(speed);

    }
    else console.log("no awesome :(");

    }
    
    if(userNotes.constructor===Array){
         userNote=userNotes.join("");
         speed=speed*0.8;

         check();

    }
    else{
        level-=1;

        check();

    }
    console.log(note+"+"+userNote)
}
  
function userKey(e) {
    console.log("Hello")
    userInput.push(e.keyCode);
    // console.log(userInput);
}
  
document.querySelector(".random").onclick=  function(){
    // console.log(userInput);

    document.removeEventListener("keydown", userKey)

    userInput=[];
    randomSequence=[];
    timeOutArray.forEach(timeOut=>clearInterval(timeOut))
    playRandom(speed,sequence);
    document.addEventListener("keydown", userKey)


;}
    
document.querySelector(".check").onclick=  function(){
    timeOutArray.forEach(timeOut=>clearInterval(timeOut))

        checkUser(randomSequence,userInput);
        userInput=[];

        
;}

document.querySelector(".ranKey").onclick=function(){
    pauseMusic();
    document.removeEventListener("keydown", userKey)

    timeOutArray.forEach(timeOut=>clearInterval(timeOut))

    randomSequence=[];
    playRandomNote();
    document.addEventListener("keydown",function(e){
        userInput=""+e.keyCode;
    })
}


window.addEventListener("keydown",function(e){
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    audio.play();
    key.classList.add("playing");
})


window.addEventListener("keyup",function(e){
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.pause();
    audio.currentTime=0;
    key.classList.remove("playing");

})
document.querySelector(".stop").onclick=function(){
    pauseMusic();
    timeOutArray.forEach(timeOut=>clearInterval(timeOut))

}