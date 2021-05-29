let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let gainList = [];
let keypressList = [];
let mainGainNode = null;

let attackTime= attackControl.value/10;
let decayTime = decayControl.value/10;
let sLevel = sustainControl.value;
let releaseTime = 0.5;

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


function getKeysDown(option){
    keys = [];
    if(option == "upper"){
keys = ['Digit1','KeyQ','Digit2','KeyW','Digit3',
    'KeyE','Digit4','KeyR','Digit5','KeyT','Digit6','KeyY','Digit7',
    'KeyU','Digit8','KeyI','Digit9','KeyO','Digit0','KeyP','Minus'];
    }
    else if(option == "lower"){
keys = ['KeyA',
'KeyZ','KeyS',
'KeyX','KeyD',
'KeyC','KeyF',
'KeyV','KeyG',
'KeyB','KeyH',
'KeyN','KeyJ',
'KeyM','KeyK',
'Comma','KeyL',
'Period','Semicolon',
'Slash', 'Quote'];
    }
    return keys;
}

// there must be a better way!!! me stupid
function createKeyMap(note, keysDownList){
    keymap = [];
    if(note == "C"){
    keymap = [
        keysDownList[1], keysDownList[2], keysDownList[3], keysDownList[4],
        keysDownList[5], keysDownList[7], keysDownList[8], keysDownList[9],
        keysDownList[10], keysDownList[11], keysDownList[12], keysDownList[13],
        keysDownList[15], keysDownList[16], keysDownList[17], keysDownList[18], keysDownList[19],
    ]
            }
    if(note == "D"){
        keymap = [
            keysDownList[0], keysDownList[1], keysDownList[2], keysDownList[3],
            keysDownList[5], keysDownList[6], keysDownList[7], keysDownList[8],
            keysDownList[9], keysDownList[10], keysDownList[11],keysDownList[13],
            keysDownList[14],keysDownList[15],keysDownList[16],keysDownList[17], keysDownList[19],
            keysDownList[20], keysDownList[21]
        ]
    }
    if(note == "E"){
        keymap = [
            keysDownList[0], keysDownList[1],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[6], keysDownList[7],keysDownList[8],
            keysDownList[9], keysDownList[11],keysDownList[12],keysDownList[13],
            keysDownList[14],keysDownList[15], keysDownList[17],keysDownList[18],keysDownList[19],
            keysDownList[20]
        ]
    }
    if(note == "F"){
        keymap = [
            keysDownList[1], keysDownList[2],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[6], keysDownList[7],keysDownList[9],
            keysDownList[10], keysDownList[11],keysDownList[12],keysDownList[13],
            keysDownList[15],keysDownList[16], keysDownList[17],keysDownList[18],keysDownList[19],
            keysDownList[20]
        ]
    }
    if(note == "G"){
        keymap = [ keysDownList[0],
            keysDownList[1], keysDownList[2],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[7], keysDownList[8],keysDownList[9],
            keysDownList[10], keysDownList[11],keysDownList[13],keysDownList[14],
            keysDownList[15],keysDownList[16], keysDownList[17],keysDownList[18],keysDownList[19]
        ]
    }
    
    if(note == "A"){
        keymap = [ keysDownList[0],
            keysDownList[1], keysDownList[2],keysDownList[3],keysDownList[5],
            keysDownList[6],keysDownList[7], keysDownList[8],keysDownList[9],
            keysDownList[11], keysDownList[12],keysDownList[13],keysDownList[14],
            keysDownList[15],keysDownList[16], keysDownList[17],keysDownList[19],keysDownList[20]
        ]
    }
    
    if(note == "B"){
        keymap = [ keysDownList[0],
            keysDownList[1], keysDownList[3],keysDownList[3],keysDownList[4],
            keysDownList[5],keysDownList[6], keysDownList[7],keysDownList[9],
            keysDownList[10], keysDownList[11],keysDownList[12],keysDownList[13],
            keysDownList[14],keysDownList[15], keysDownList[17],keysDownList[18],keysDownList[19],keysDownList[20]
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
 keypressList[keymap[i]] = [];
   keypressList[keymap[i]] = document.getElementById(`${octave}${notenum}`).dataset;
    notenum++;
    }
}
}


let start;
  function notePressed(event, key) {
    
      var target = event.srcElement;
      //console.log(event.keydown, "(starttime)note start");
    const now = audioContext.currentTime;
    let keyPressed;
    let keyValid;
        if(event.code == key){
          keyValid = key;
        }
        if (event.buttons & 1 || keyValid) {
      let  dataset = event.currentTarget.dataset;
      if(event.buttons & 1){
        dataset = event.currentTarget.dataset;
      }
      else if(event.code == keyValid)
      {
        console.log(event.code, "EVENT CODE!")
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
       noteGain.gain.setValueAtTime(0,0);
        noteGain.gain.linearRampToValueAtTime(1, now + attackTime);
        noteGain.gain.linearRampToValueAtTime(sLevel, now + attackTime + decayTime);
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
    if( event.buttons & 1 ){
        dataset = event.currentTarget.dataset;
        
    }
     else if(event.code){
         
       dataset = keypressList[event.code];
       target = document.getElementById(`${dataset["octave"]}${dataset["notenumber"]}`);
      }
    
    if (dataset && dataset["pressed"] ) {
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
      if((start + attackTime) >=now){
          let timePassed = now - start;
          //let gainValue = 1/(aTime/timePassed);
          let gainValue = noteGain.gain.value;
          noteGain.gain.setValueAtTime(gainValue,0);

          let timeLeft = attackTime - timePassed;
          //noteGain.gain.linearRampToValueAtTime(gainValue, now + timeLeft);
          noteGain.gain.linearRampToValueAtTime(1, now + timeLeft);
          noteGain.gain.linearRampToValueAtTime(sLevel, now + timeLeft + decayTime);
          noteGain.gain.linearRampToValueAtTime(0, now + timeLeft + decayTime + releaseTime);
        
      }
      else if((start + attackTime + decayTime)>= now){
        let timePassed = (now - start);
        let TimeMinusAttack = timePassed - attackTime;
        let timePassinvert = decayTime - TimeMinusAttack;
        //let timePassInvertRatio = (dTime-TimeMinusAttack)/dTime;
        let gainBetween = 1 - sLevel;
        ////let gainValue = timePassInvertRatio * gainBetween + sustainLevel;
        let gainValue = noteGain.gain.value;
        noteGain.gain.setValueAtTime(gainValue,0);
        noteGain.gain.linearRampToValueAtTime(sLevel, now + timePassinvert);
   
        noteGain.gain.linearRampToValueAtTime(0, now + timePassinvert + releaseTime + 0.1);
      }
      else if((start + attackTime + decayTime)<= now) {
        let gainValue = noteGain.gain.value;
      noteGain.gain.setValueAtTime(gainValue, 0);
      noteGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + releaseTime);
      }
      oscList[octave][dataset["notenumber"]].stop(now + attackTime + decayTime + releaseTime);
      delete gainList[octave][dataset["notenumber"]];
      delete oscList[octave][dataset["notenumber"]];
      delete dataset["pressed"];
    }
  }

 
