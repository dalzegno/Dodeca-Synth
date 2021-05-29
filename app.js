var createSynth = document.getElementById("btncreateSynth");
var selectOctave = document.getElementById("selectOctave");

var x = createContainer();
x.container.className = "container";
x.keyboard.className = "keyboard";
var scale =  getEqualScale(8, 440);
createOctaves(6, x.keyboard, scale);


createSynth.onclick = ()=>{
var keylistUpper = getKeysDown("upper");
var keymap = createKeyMap("C", keylistUpper);
createKeyBindings("C", 2, keymap);
createKeyEvents(keymap);

var keylistLower = getKeysDown("lower");
var keymaplower = createKeyMap("E", keylistLower);
createKeyBindings("E", 2, keymaplower);
createKeyEvents(keymaplower);

}


function createKeyEvents(keymaplist) {
for(let i = 0; i < keymaplist.length; i++){
    document.addEventListener('keydown', logkey);
    function logkey(e){
        if(e.code == keymaplist[i])
        notePressed(e, keymaplist[i]);
    }
}
  for(let i = 0; i < keymaplist.length; i++){
      document.addEventListener('keyup', logkey);
      function logkey(e){
        if(e.code == keymaplist[i])
        noteReleased(e);
    }
  }
}