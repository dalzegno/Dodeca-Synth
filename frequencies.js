  
  function getEqualScale(octaves, a){
      
    let eqScale = [];
    eqScale[0] = [];
    
    a = a * 0.0625;
      eqScale[0][9] = a;
      eqScale[0][10] = a * 1.059463; //Bb
      eqScale[0][11] = a * 1.122462;  //B
      let j;
    for (let i = 1; i<octaves;i++){
        eqScale[i] = [];
        eqScale[i][0] = a * 1.189207; //C
        eqScale[i][1] = a * 1.259921; //C#
        eqScale[i][2] = a * 1.33484; //D
        eqScale[i][3] = a * 1.414214; //Eb
        eqScale[i][4] = a * 1.498307; //E
        eqScale[i][5] = a * 1.587401; //F
        eqScale[i][6] = a  * 1.681793; //F#
        eqScale[i][7] = a * 1.781797; //G
        eqScale[i][8] = a * 1.887749; //Ab
        a = a * 2;
        eqScale[i][9] = a; //A
        eqScale[i][10] = a * 1.059463; //Bb
        eqScale[i][11] = a * 1.122462; //B
    }
    j = octaves +1;
    eqScale[j] = [];
    eqScale[j][0] =  a * 1.189207; //C;

    return eqScale;
}
