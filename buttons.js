
//--------------KEYBINDING CONTROLS------------//

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

//--------------------------------------//

//------------ CONTROLS  -------------

// <------->VOLUME
var volumeContainer = document.createElement("div");
volumeContainer.setAttribute("id", "volumeContainer");
var lblVolume = document.createElement("label");
lblVolume.innerHTML = "Volume";
var volumeControl = document.createElement("input");
volumeControl.setAttribute("id", "volumeControl");
volumeControl.type = "range";
volumeControl.setAttribute("min", "0.0");
volumeControl.setAttribute("max", "1.0");
volumeControl.setAttribute("step", "0.05");
volumeControl.setAttribute("value", "0.2");
volumeContainer.appendChild(lblVolume);
volumeContainer.appendChild(volumeControl);
document.body.appendChild(volumeContainer);

// <------->ADSR
var ADSRcontainer = document.createElement("div");
ADSRcontainer.className = "ADSRcontainer";
//----ADSRITEM
function appendADSRItem(item, labeltext, textID){
var ADSRitem = document.createElement("div");
var ADSRlabel = document.createElement("label");
ADSRlabel.className = "lblADSR";
ADSRlabel.innerHTML = `${labeltext}`;
var ADSRtextBox = document.createElement("input");
ADSRtextBox.type = "text";
ADSRtextBox.className = "txtADSR";
ADSRtextBox.setAttribute("id", `${textID}`);
ADSRitem.className = "ADSRitem";
ADSRitem.appendChild(ADSRlabel);
ADSRitem.appendChild(item);
ADSRitem.appendChild(ADSRtextBox);
return ADSRitem;
}
//----ATTACK
var attackControl = document.createElement("input");
attackControl.setAttribute("id", "attackControl");
attackControl.className = "ADSRrange";
attackControl.type = "range";
attackControl.setAttribute("min", "0.0");
attackControl.setAttribute("max", "100.0");
attackControl.setAttribute("step", "1");
attackControl.setAttribute("value", "10");
var attackItem = appendADSRItem(attackControl, "Attack ", "txtAttack");
//----DECAY
var decayControl = document.createElement("input");
decayControl.setAttribute("id", "decayControl");
decayControl.className = "ADSRrange";
decayControl.type = "range";
decayControl.setAttribute("min", "0.0");
decayControl.setAttribute("max", "100.0");
decayControl.setAttribute("step", "1");
decayControl.setAttribute("value", "10");
var decayItem = appendADSRItem(decayControl, "Decay ", "txtDecay");
//----SUSTAIN
var sustainControl = document.createElement("input");
sustainControl.setAttribute("id", "sustainControl");
sustainControl.className = "ADSRrange";
sustainControl.type = "range";
sustainControl.setAttribute("min", "0.0");
sustainControl.setAttribute("max", "1.0");
sustainControl.setAttribute("step", "0.01");
sustainControl.setAttribute("value", "0.2");
var sustainItem = appendADSRItem(sustainControl, "Sustain ", "txtSustain");
//----RELEASE
var releaseControl = document.createElement("input");
releaseControl.setAttribute("id", "releaseControl");
releaseControl.className = "ADSRrange";
releaseControl.type = "range";
releaseControl.setAttribute("min", "0.0");
releaseControl.setAttribute("max", "100.0");
releaseControl.setAttribute("step", "1");
releaseControl.setAttribute("value", "10");
var releaseItem = appendADSRItem(releaseControl, "Release ", "txtRelease");
//-----

ADSRcontainer.appendChild(attackItem);
ADSRcontainer.appendChild(decayItem);
ADSRcontainer.appendChild(sustainItem);
ADSRcontainer.appendChild(releaseItem);
document.body.appendChild(ADSRcontainer);