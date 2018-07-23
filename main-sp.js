window.onload = function(){

  var currentMode = 'stop';
  var output = document.getElementById('output');

  var milkcocoa = new MilkCocoa("XXXXX");
  var ds = milkcocoa.dataStore('gravity');

  window.addEventListener('devicemotion', function(e){
    gravity = e.accelerationIncludingGravity;

    output.innerHTML
    = 'x方向: '+gravity.x
    + '<br>y方向: '+gravity.y;

    sendModeFromGravityValue(gravity);

  },true);


  function sendModeFromGravityValue(g){

    var x = g.x;
    var y = Math.sqrt(g.y * g.y);

    if(currentMode != 'top' && x > -1.0 && x < 1.0){
      currentMode = 'stop';
      ds.send({mode: currentMode});
    }

    if(currentMode != 'left' && x < -8.0){
      currentMode = 'left';
      ds.send({mode: currentMode});
    }
    
    if(currentMode != 'right' && x > 8.0){
      currentMode = 'right';
      ds.send({mode: currentMode});
    }
  }

};