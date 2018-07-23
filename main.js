enchant();

window.onload = function() {

    var milkcocoa = new MilkCocoa("XXXXX");
    var ds = milkcocoa.dataStore('gravity');

    ds.on('send', changeViewFromSentMode);
    var direction = "top";
    
    var core = new Core(1000, 1000);
    core.preload('chara1.png');
    
    var bear;
    
    core.onload = function() {
        bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 0;
        bear.y = 0;
                
        core.rootScene.addChild(bear);
    };
    
    core.start();
    
    function changeViewFromSentMode(sent){
        if(sent.value.mode === 'stop'){
            direction = "stop";
        }
        if(sent.value.mode === 'right'){
            direction = "right";
        }
        if(sent.value.mode === 'left'){
            direction = "left";
        }
    }
    
    var move = function() {
       if (direction == "right") {
          bear.x += 5;
       }
       if (direction == "left") {
          bear.x -= 5;
       }
       //console.log(bear.x);
       setTimeout(function(){ move(); }, 100);
    };
    
    setTimeout(function(){ move(); }, 100);
};

