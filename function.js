document.querySelector(".disLev").innerText="Level: "+ level;
function playRandom(speedo,times){
    for(let i=0;i<=times;i++){
        let audio;
        let key;
        
        randomNote= keys[Math.floor(Math.random()*11)];
        audio=document.querySelector(`audio[data-key="${randomNote}"]`)
        key=document.querySelector(`div[data-key="${randomNote}"]`);


         randomSequence.push(randomNote)
 //metemos la funcion de intervalo en un array 
 //para luego poder pausarlo cuando queramos
     timeOutArray.push(setTimeout(()=>{
        audio.currentTime=0;
        audio.play();
        key.classList.add("playing");

        setTimeout(()=>{
        audio.pause();
        key.classList.remove("playing")
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
        level+=1;
        document.querySelector(".disLev").innerText="Level: "+ level;
        speed=speed*0.8;
         sequence+=1;
        console.log("awesome")
        console.log(speed);

    }
    else{ console.log("no awesome :(");
    level=1;
        document.querySelector(".disLev").innerText="Level: "+ level;}
        
    }
    
    if(userNotes.constructor===Array){
         userNote=userNotes.join("");
         
         check();
         

    }
    else{
        level-=1;
        if(note===userNote){
            level+=1;
            document.querySelector(".disLev").innerText="Level: "+ level;
            
            console.log("awesome")
            console.log(speed);
    
        }
        else{ console.log("no awesome :(");
        level=1;
        document.querySelector(".disLev").innerText="Level: "+ level;}
        
    
    }
    console.log(note+"+"+userNote)
}
  
function userKey(e) {
    console.log("Hello")
    userInput.push(e.keyCode);

}
