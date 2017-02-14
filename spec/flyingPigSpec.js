describe('flyingPig', function() {

  var flyingPig, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    debugger;
    flyingPig = new FlyingPig(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flyingPig.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(flyingPig.$node, 'toggle');
    flyingPig.step();
    expect(flyingPig.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flyingPig, 'step');
      expect(flyingPig.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flyingPig.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(flyingPig.step.callCount).to.be.equal(2);
    });
  });
});
