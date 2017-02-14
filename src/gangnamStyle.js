var GangnamStyle = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('gangnamStyle');


};

GangnamStyle.prototype = Object.create(Dancer.prototype);
GangnamStyle.prototype.constructor = GangnamStyle;

GangnamStyle.prototype.step = function() {


  Dancer.prototype.step.call(this);
  this.$node.toggle();

};


var psy = new GangnamStyle;
psy.step(this.top, this.left);
