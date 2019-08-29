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
let sequence=1;
let level=1;
