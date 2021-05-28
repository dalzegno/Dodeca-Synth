let keyboardID = 0;
function createContainer(){
    
    var c = document.createElement("div");
    var k = document.createElement("div");
    keyboardID += 1;
    k.setAttribute("id", `keyboard${keyboardID}`);
    var h = document.createElement("header");
    h.className = "keyboardHeader";
    h.setAttribute("id", `keyboard${keyboardID}header`);
    h.setAttribute("draggable", "true");
    k.appendChild(h);
    c.appendChild(k);
    document.body.appendChild(c);

    //from draggable-js
    var dragHeader = document.getElementById(`keyboard${keyboardID}`);
    dragElement(dragHeader);
    return {container: c, keyboard: k};
}

function createOctaves(octaves, keyboard, freq){
    var blackOctave = document.createElement("div");
        blackOctave.className = "blackOctave";
        var whiteOctave = document.createElement("div");
        whiteOctave.className = "whiteOctave";
        var octave = document.createElement("div");
        octave.className = "firstThreeOctave";
    let lastoctave = 0;
        //create three keys below C
        for(let i = 0; i <= 2; i++){
            var key = createKey();
            key.setAttribute("id", `0${i+9}`);
            if(i == 1){
                key.className = "blackKey firstBlack"
                blackOctave.appendChild(key);
                }
                else{
                key.className = "whiteKey";
                whiteOctave.appendChild(key);
                }
                key.dataset["frequency"] = freq[0][i+9];
                key.dataset["octave"] = 0;
                key.dataset["notenumber"] = i + 9;
        }
        octave.appendChild(blackOctave);
        octave.appendChild(whiteOctave);
        keyboard.appendChild(octave);

        //Create the rest of the keys
    for(let i = 0; i < octaves; i++){
        var blackOctave = document.createElement("div");
        blackOctave.className = "blackOctave";
        var whiteOctave = document.createElement("div");
        whiteOctave.className = "whiteOctave";
        var octave = document.createElement("div");
        octave.className = "octave";

        for(let j = 0; j < 12; j++){
            var key = createKey();
            key.setAttribute("id", `${i}${j}`);

            key.dataset["octave"] = i + 1;
            key.dataset["notenumber"] = j;
            key.dataset["frequency"] =  freq[i +1][j];
            if(j == 1 || j == 3 || j == 6 || j == 8 || j == 10)
            {
            key.className = "blackKey"
            blackOctave.appendChild(key);
            }
            else{
            key.className = "whiteKey";
            whiteOctave.appendChild(key);
            }
        }
        octave.appendChild(blackOctave);
        octave.appendChild(whiteOctave);
        keyboard.appendChild(octave);
        lastoctave = i +1;
    }
            var whiteOctave = document.createElement("div");
            whiteOctave.className = "whiteOctave";
            var octave = document.createElement("div");
            octave.className = "octave";
            var key = createKey();
            let oct = octaves + 1;
            
            key.dataset["octave"] = lastoctave;
            key.dataset["notenumber"] = 0;
            key.dataset["frequency"] =  freq[lastoctave][0];
            
            key.className = "whiteKey";
           

            whiteOctave.appendChild(key);
            octave.appendChild(whiteOctave);
            keyboard.appendChild(octave);
}

function createKey(){
    var keyElement = document.createElement("button");

    keyElement.addEventListener("mousedown", notePressed, false);
    keyElement.addEventListener("mouseup", noteReleased, false);
    keyElement.addEventListener("mouseover", notePressed, false);
    keyElement.addEventListener("mouseleave", noteReleased, false);
    keyElement.addEventListener("keydown", notePressed, false);
    keyElement.addEventListener("keyup", noteReleased, false);
  
    return keyElement;
}