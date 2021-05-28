let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let gainList = [];
let keypressList = [];
let mainGainNode = null;

let attackTime= 0.1;
let decayTime = 0.5;
let sLevel = 1.0;
let releaseTime = 1;

mainGainNode = audioContext.createGain();
mainGainNode.connect(audioContext.destination);
mainGainNode.gain.value = volumeControl.value;

volumeControl = document.getElementById("volumeControl");
volumeControl.addEventListener("change", () => {
    mainGainNode.gain.value = volumeControl.value;
})

sineTerms = new Float32Array([2, 3, 1, 0, 1]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
  
    for (i=0; i<9; i++) {
        oscList[i] = {};
    }

    for(i=0;i<50;i++){
        gainList[i] = {};
    }

function playTone(freq, gain) {
    let osc = audioContext.createOscillator();
    
    osc.connect(gain);
    
    //let type = wavePicker.options[wavePicker.selectedIndex].value;
    sineTerms = new Float32Array([1,2,3,0,5]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
    osc.setPeriodicWave(customWaveform);
    /*
    if (type == "custom") {
      osc.setPeriodicWave(customWaveform);
    } else {
      osc.type = type;
    }
  */
    osc.frequency.value = freq;
    osc.start();
  
    return osc;
  }

  function makeGain(){
      let gain = audioContext.createGain();
      return gain;
  }



var keysDownUpper = [
    'Digit1',
    'KeyQ',
    'Digit2',
    'KeyW',
    'Digit3',
    'KeyE',
    'Digit4',
    'KeyR',
    'Digit5',
    'KeyT',
    'Digit6',
    'KeyY',
    'Digit7',
    'KeyU',
    'Digit8',
    'KeyI',
    'Digit9',
    'KeyO',
    'Digit0',
    'KeyP',
    'Minus'
]
console.log(keysDownUpper[20], "YO!");

// there must be a better way!!! me stupid
function createKeyMap(note){
    keymap = [];
    if(note == "C"){
    keymap = [
        keysDownUpper[1], keysDownUpper[2], keysDownUpper[3], keysDownUpper[4],
        keysDownUpper[5], keysDownUpper[7], keysDownUpper[8], keysDownUpper[9],
        keysDownUpper[10], keysDownUpper[11], keysDownUpper[12], keysDownUpper[13],
        keysDownUpper[15], keysDownUpper[16], keysDownUpper[17], keysDownUpper[18], keysDownUpper[19],
    ]
            }
    if(note == "D"){
        keymap = [
            keysDownUpper[0], keysDownUpper[1], keysDownUpper[2], keysDownUpper[3],
            keysDownUpper[5], keysDownUpper[6], keysDownUpper[7], keysDownUpper[8],
            keysDownUpper[9], keysDownUpper[10], keysDownUpper[11],keysDownUpper[13],
            keysDownUpper[14],keysDownUpper[15],keysDownUpper[16],keysDownUpper[17], keysDownUpper[19],
            keysDownUpper[20], keysDownUpper[21]
        ]
    }
    if(note == "E"){
        keymap = [
            keysDownUpper[0], keysDownUpper[1],keysDownUpper[3],keysDownUpper[4],
            keysDownUpper[5],keysDownUpper[6], keysDownUpper[7],keysDownUpper[8],
            keysDownUpper[9], keysDownUpper[11],keysDownUpper[12],keysDownUpper[13],
            keysDownUpper[14],keysDownUpper[15], keysDownUpper[17],keysDownUpper[18],keysDownUpper[19],
            keysDownUpper[20]
        ]
    }
    if(note == "F"){
        keymap = [
            keysDownUpper[1], keysDownUpper[2],keysDownUpper[3],keysDownUpper[4],
            keysDownUpper[5],keysDownUpper[6], keysDownUpper[7],keysDownUpper[9],
            keysDownUpper[10], keysDownUpper[11],keysDownUpper[12],keysDownUpper[13],
            keysDownUpper[15],keysDownUpper[16], keysDownUpper[17],keysDownUpper[18],keysDownUpper[19],
            keysDownUpper[20]
        ]
    }
    if(note == "G"){
        keymap = [ keysDownUpper[0],
            keysDownUpper[1], keysDownUpper[2],keysDownUpper[3],keysDownUpper[4],
            keysDownUpper[5],keysDownUpper[7], keysDownUpper[8],keysDownUpper[9],
            keysDownUpper[10], keysDownUpper[11],keysDownUpper[13],keysDownUpper[14],
            keysDownUpper[15],keysDownUpper[16], keysDownUpper[17],keysDownUpper[18],keysDownUpper[19]
        ]
    }
    
    if(note == "A"){
        keymap = [ keysDownUpper[0],
            keysDownUpper[1], keysDownUpper[2],keysDownUpper[3],keysDownUpper[5],
            keysDownUpper[6],keysDownUpper[7], keysDownUpper[8],keysDownUpper[9],
            keysDownUpper[11], keysDownUpper[12],keysDownUpper[13],keysDownUpper[14],
            keysDownUpper[15],keysDownUpper[16], keysDownUpper[17],keysDownUpper[19],keysDownUpper[20]
        ]
    }
    
    if(note == "B"){
        keymap = [ keysDownUpper[0],
            keysDownUpper[1], keysDownUpper[3],keysDownUpper[3],keysDownUpper[4],
            keysDownUpper[5],keysDownUpper[6], keysDownUpper[7],keysDownUpper[9],
            keysDownUpper[10], keysDownUpper[11],keysDownUpper[12],keysDownUpper[13],
            keysDownUpper[14],keysDownUpper[15], keysDownUpper[17],keysDownUpper[18],keysDownUpper[19],keysDownUpper[20]
        ]
    }
    return keymap;
}

  function createKeyBindings(note, octave, keymap){
let notenum = 0;
switch(note){
    case "C": notenum = 0; break;
    case "D": notenum = 1; break;
    case "E": notenum = 3; break;
    case "F": notenum = 5; break;
    case "G": notenum = 6; break;
    case "A": notenum = 8; break;
    case "B": notenum = 10; break;
}
for(let i = 0; i < keymap.length; i++){
    if(note == "B"){
        if(notenum == 12){
            notenum = 0;
        }
        setTimeout(()=>{console.log("yo nurf")}, 2000);
     keypressList[keymap[i]] = [];
       keypressList[keymap[i]] = document.getElementById(`${octave}${notenum}`).dataset;
        
       console.log(`${octave}${notenum}`);
        
        
        notenum++;
        
        if(notenum == 12){
            octave++;
            
        }
    }
    else{
    if(notenum == 12){
        octave++;
        
        notenum = 0;
    }
    setTimeout(()=>{console.log("yo nurf")}, 2000);
 keypressList[keymap[i]] = [];
   keypressList[keymap[i]] = document.getElementById(`${octave}${notenum}`).dataset;
    notenum++;
    }
}
}


let start;
  function notePressed(event) {
    
      var target = event.srcElement;
      var tar = event.explicitOriginalTarget;
      var cod = event.key;
      //console.log(event.keydown, "(starttime)note start");
    const now = audioContext.currentTime;
    
    
    let keyPressed;
    let keyValid;
    for(let x = 0; x < keymap.length;x++){
        if(event.code == keymap[x]){
          keyValid = keymap[x];
         console.log(keyValid, "THIS IS THE KEY");
        }
      }
     

    if (event.buttons & 1 || keyValid) {
      console.log(keyValid, "going through?");
      aTime = attackTime;
      dTime = decayTime;
      sustainLevel = sLevel;
      rTime = releaseTime;

      sustainLevel = sLevel;
      rTime = releaseTime;

      let  dataset = event.currentTarget.dataset;
      if(event.buttons & 1){
        dataset = event.currentTarget.dataset;
      }
      else if(event.code == keyValid)
      {
        
        dataset = keypressList[event.code];
        console.log(keypressList[event.code], "NOTE PRESSED!");
        target = document.getElementById(`${dataset["octave"]}${dataset["notenumber"]}`);
      }
      
      if (!dataset["pressed"]) {
        start = audioContext.currentTime;
        //mainGainNode.gain.setValueAtTime(0,0);
        //mainGainNode.gain.linearRampToValueAtTime(1, now + 1);
        /*
        if(target.className == "whiteKey"){
          target.setAttribute("class", "whitekey activeWhite");
        
        }
        else{
          target.setAttribute("class", "blackkey activeBlack");
      }
      */
        let octave = +dataset["octave"];
       gainList[octave][dataset["notenumber"]] = makeGain();
       let noteGain = gainList[octave][dataset["notenumber"]];
       oscList[octave][dataset["notenumber"]] = playTone(dataset["frequency"], gainList[octave][dataset["notenumber"]]);
       
       console.log(noteGain);
       noteGain.gain.setValueAtTime(0,0);
        noteGain.gain.linearRampToValueAtTime(1, now + aTime);
        noteGain.gain.linearRampToValueAtTime(sustainLevel, now + aTime + dTime);
        noteGain.connect(mainGainNode);
        dataset["pressed"] = "yes";
      }
    }
  }

  function noteReleased(event) {
    let dataset = event.currentTarget.dataset;
    const now = audioContext.currentTime;
    var target = event.srcElement;
    let keyValid;
    for(let x = 0; x < keymap.length;x++){
      if(event.code == keymap[x]){
        keypressed = keymap[x];
       console.log(keyValid, "THIS IS THE KEY");
       dataset = keypressList[event.code];
       target = document.getElementById(`${dataset["octave"]}${dataset["notenumber"]}`);
      }
    }

    if (dataset && dataset["pressed"] ) {
      console.log(keypressList[event.code], "NOTE RELEASED!");
      console.log(event.code, "NOTE RELEASED!");
        //aTime = attackTime;
        /*
        if(dataset["notenumber"].length == 1){
          target.setAttribute("class", "whitekey inactiveWhite");
      }
        else{
          target.setAttribute("class", "blackkey inactiveBlack");
      }
      */
      let octave = +dataset["octave"];
      let noteGain = gainList[octave][dataset["notenumber"]];
     // oscList[octave][dataset["note"]].connect(mainGainNode);
      if((start + aTime) >=now){
        
          let timePassed = now - start;
          //let gainValue = 1/(aTime/timePassed);
          let gainValue = noteGain.gain.value;
          noteGain.gain.setValueAtTime(gainValue,0);

          let timeLeft = aTime - timePassed;
          //noteGain.gain.linearRampToValueAtTime(gainValue, now + timeLeft);
          noteGain.gain.linearRampToValueAtTime(1, now + timeLeft);
          noteGain.gain.linearRampToValueAtTime(sustainLevel, now + timeLeft + dTime);
          noteGain.gain.linearRampToValueAtTime(0, now + timeLeft + dTime + rTime);
        
      }
      else if((start + aTime + dTime)>= now){
        let timePassed = (now - start);
        let TimeMinusAttack = timePassed - aTime;
        let timePassinvert = dTime - TimeMinusAttack;
        //let timePassInvertRatio = (dTime-TimeMinusAttack)/dTime;
        let gainBetween = 1 - sustainLevel;
        ////let gainValue = timePassInvertRatio * gainBetween + sustainLevel;
        let gainValue = noteGain.gain.value;
        noteGain.gain.setValueAtTime(gainValue,0);
        noteGain.gain.linearRampToValueAtTime(sustainLevel, now + timePassinvert);
   
        noteGain.gain.linearRampToValueAtTime(0, now + timePassinvert + rTime + 0.1);
      }
      else if((start + aTime + dTime)<= now) {
        let gainValue = noteGain.gain.value;
      noteGain.gain.setValueAtTime(gainValue, 0);
      noteGain.gain.linearRampToValueAtTime(0, now + rTime);
      }
      oscList[octave][dataset["notenumber"]].stop(now + aTime + dTime + rTime);
      delete gainList[octave][dataset["notenumber"]];
      delete oscList[octave][dataset["notenumber"]];
      delete dataset["pressed"];
    }
  }

 
