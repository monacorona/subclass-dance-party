describe('gangnamStyle', function() {

  var gangnamStyle, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    gangnamStyle = new GangnamStyle(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(gangnamStyle.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(gangnamStyle.$node, 'toggle');
    gangnamStyle.step();
    expect(gangnamStyle.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(gangnamStyle, 'step');
      expect(gangnamStyle.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(gangnamStyle.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(gangnamStyle.step.callCount).to.be.equal(2);
    });
  });
});
