var createSynth = document.getElementById("btncreateSynth");
var selectOctave = document.getElementById("selectOctave");

var x = createContainer();
x.container.className = "container";
x.keyboard.className = "keyboard";
var scale =  getEqualScale(8, 440);
createOctaves(6, x.keyboard, scale);


createSynth.onclick = ()=>{

var keymap = createKeyMap("A");
createKeyBindings("A", 0, keymap);

for(let i = 0; i < keymap.length; i++){
    document.addEventListener('keydown', logkey);
    function logkey(e){
        if(e.code == keymap[i])
        notePressed(e);
    }
}
  for(let i = 0; i < keymap.length; i++){
      document.addEventListener('keyup', logkey);
      function logkey(e){
        if(e.code == keymap[i])
        noteReleased(e);
    }
  }
}
