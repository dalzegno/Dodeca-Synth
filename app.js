//var createSynth = document.getElementById("btncreateSynth");
//var selectOctave = document.getElementById("selectOctave");

var x = createContainer();
x.container.className = "container";
x.keyboard.className = "keyboard";
var scale =  getEqualScale(9, 440);
createOctaves(8, x.keyboard, scale);


// Creates key bindings
var keylistUpper = getKeysDown("upper");
var keymap = createKeyMap("C", keylistUpper);
createKeyBindings("C", 1, keymap);
createKeyEvents(keymap);

var keylistLower = getKeysDown("lower");
var keymaplower = createKeyMap("C", keylistLower);
createKeyBindings("C", 2, keymaplower);
createKeyEvents(keymaplower);




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