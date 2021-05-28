
//CREATE SYNTH------------

var createSynthContainer = document.createElement("div");
createSynthContainer.className = "createSynthContainer";

var selectOctave = document.createElement("select");
selectOctave.className = "select";
selectOctave.setAttribute("id", "selectOctave");


var octaveNumbers = ["0","1","2","3","4","5","6","7","8"];
octaveNumbers.forEach((index)=>{
    var x = document.createElement("option");
    x.innerHTML = index;
    selectOctave.appendChild(x);
});

var octaveLabel = document.createElement("label");
octaveLabel.textContent = "Octaves: ";
createSynthContainer.appendChild(octaveLabel);

createSynthContainer.appendChild(selectOctave);
var btnCreateSynth = document.createElement("button");
btnCreateSynth.setAttribute("id", "btncreateSynth");
btnCreateSynth.innerHTML = "Create Synth";
createSynthContainer.appendChild(btnCreateSynth);

document.body.appendChild(createSynthContainer);

//---------------------

//------------ CONTROLS  -------------
var volumeControl = document.createElement("input");
volumeControl.setAttribute("id", "volumeControl");
volumeControl.type = "range";
volumeControl.setAttribute("min", "0.0");
volumeControl.setAttribute("max", "1.0");
volumeControl.setAttribute("value", "0.5");
volumeControl.setAttribute("step", "0.01");
document.body.appendChild(volumeControl);