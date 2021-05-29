var txtAttack = document.getElementById("txtAttack");
var txtDecay = document.getElementById("txtDecay");
var txtSustain = document.getElementById("txtSustain");
var txtRelease = document.getElementById("txtRelease");
txtAttack.value = attackControl.value/10;
txtDecay.value = decayControl.value/10;
txtSustain.value = sustainControl.value;
txtRelease.value = releaseControl.value/10;

attackControl.addEventListener("change", () =>{
    attackTime = attackControl.value/10;
    
    txtAttack.value = attackTime;
    console.log(attackControl.value);
})
decayControl.addEventListener("change", ()=>{
    decayTime = decayControl.value/10;
    
    txtDecay.value = decayTime;
})
sustainControl.addEventListener("change", ()=>{
    sLevel = sustainControl.value;
    
    txtSustain.value = sLevel;
})
releaseControl.addEventListener("change", ()=>{
    releaseTime = releaseControl.value/10;
    txtRelease.value = releaseTime;
})