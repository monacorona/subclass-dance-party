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
  // Dancer.prototype.lineup = function(){
  //
  //   var styleSettings = {
  //     left: 0;
  //   };
  //   this.$node.css(styleSettings);
  // }

  //breaks up line up
  // Dancer.prototype.breakLine = function() {
  //   this.setPosition($('body').height * Math.random(), $('body').width * Math.random());
  //   this.$node.css(styleSettings);
  // }
