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

const keys=[65,83,68,70,71,72,74,75,76,186,222,220];
let level=[];
let userInput=[];
let randomNote;

function playRandom(){
    keys.forEach((keyPress,i)=>{
        let audio;
        randomNote= keys[Math.floor(Math.random()*12)];
         audio=document.querySelector(`audio[data-key="${randomNote}"]`)
         level.push(randomNote)

        setTimeout(()=>{
            audio.play();
            audio.currentTime=0;
            return;
        }, i * 1000)


    })
    return level;
}
function playRandomNote(){
    let audio,
    randomNote=keys[Math.floor(Math.random()*12)];
    audio=document.querySelector(`audio[data-key="${randomNote}"]`);
    level.push(randomNote);
    audio.play();
    audio.currentTime=0;
    return level;

}



function checkUser(notes,userNotes){
    let note=notes.join("");
    let userNote=userNotes;
    function check(){if(note===userNote){
        console.log("awesome")
    }
    else console.log("no awesome :(");

    }
    
    if(userNotes.constructor===Array){
         userNote=userNotes.join("");
         check();

    }
    else{
        check();
    }
    console.log(note+"+"+userNote)
}
  

  
document.querySelector(".random").onclick=  function(){
    level=[];
    playRandom();
    console.log(level);
    document.addEventListener("keydown",function(e){
        userInput.push(e.keyCode);
    })
    console.log(userInput)
;}
    
document.querySelector(".check").onclick=  function(){
        
        checkUser(level,userInput);
        
;}
document.querySelector(".ranKey").onclick=function(){
    level=[];
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

