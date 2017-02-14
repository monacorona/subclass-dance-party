var FlyingPig = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('flyingPig');
  dancers.push(this);

};

FlyingPig.prototype = Object.create(Dancer.prototype);
FlyingPig.prototype.constructor = FlyingPig;

FlyingPig.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

var pig = new FlyingPig;
pig.step(this.top, this.left);
