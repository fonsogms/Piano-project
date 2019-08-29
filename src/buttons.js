  
document.querySelector(".random").onclick=  function(){
    // console.log(userInput);

    document.removeEventListener("keyup", userKey)

    userInput=[];
    randomSequence=[];
    timeOutArray.forEach(timeOut=>clearInterval(timeOut))
    playRandom(speed,sequence);
    document.addEventListener("keyup", userKey)
    

;}
    
document.querySelector(".check").onclick=  function(){
    timeOutArray.forEach(timeOut=>clearInterval(timeOut))

        checkUser(randomSequence,userInput);
        userInput=[];

        
;}

document.querySelector(".ranKey").onclick=function(){
    pauseMusic();
    document.removeEventListener("keyup", userKey)


    randomSequence=[];
    playRandomNote();
    document.addEventListener("keyup",function(e){

        userInput=""+e.keyCode;
    })
}

document.querySelector(".hard").onclick=function(){
    let pads = document.querySelectorAll(".pads div");
    pads.forEach((pad, index) => {
        pad.style.borderWidth = "0";
        });
      
    
}
document.querySelector(".easy").onclick=function(){
    let pads = document.querySelectorAll(".pads div");
    pads.forEach((pad, index) => {
        pad.style.borderWidth = "10px";
        });
      
    
}

window.addEventListener("keydown",function(e){
    timeOutArray.forEach(timeOut=>clearInterval(timeOut))

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