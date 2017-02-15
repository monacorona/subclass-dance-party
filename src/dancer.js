  var Dancer = function(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class = "dancer"></span>');
    this.step();
    this.setPosition();
  };

  Dancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  };


//lines up all the elements on the page
  Dancer.prototype.lineup = function() {
  //declare new variables
    var topPosition;

    //access all the items in the global array
    dancers.forEach(function(dancer) {
      //look up and find index of current item using ===
      var dancerIndex = dancers.indexOf(dancer);
      // once found use index * px(constant) -> 3*10px for top and const left
      topPosition = dancerIndex * 50;

      var styleSettings = {
        left: 50,
        top: topPosition
      };

      dancer.$node.css(styleSettings);
    });
  };

  var newAngle = 0;

  Dancer.prototype.rotate = function() {
    //declare new variables
   // var newAngle = 10;

    //access all items in the global array
  
    dancers.forEach(function(dancer) {
      //declare styleSetting var for css rotate property
      var styleSettings = {
        'transform': 'rotate(' + newAngle++ + 'deg)'
      };
      //apply styleSetting to each dancer
      dancer.$node.css(styleSettings);
    });

    //  setInterval(twist, 100);
  };

  Dancer.prototype.scatter = function(){

  };

  //breaks up line up
  // Dancer.prototype.breakLine = function() {
  //   this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
  //   this.$node.css(styleSettings);
  // }
