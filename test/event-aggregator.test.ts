import { assert, expect } from "chai";
import { afterEach } from "mocha";
import { EventAggregator } from "../src/utilities/event-aggregator";

let ea : EventAggregator;
describe("Event Aggregator", () => {
  before(() => {
    try {
      ea = new EventAggregator();
    } catch (ex) {
      console.log("database already exists");
    }
  });

  after(() => {
    ea = null;
  });

  it("should create an event aggregator", () => {
    try {
      expect(ea).to.not.be.undefined;
    } catch (ex) {
      assert(false, "failed to create event aggregator");
    }
  });

  it("should subscribe and receive event", (done) => {
    try {
      const msg = 'TESTMESSAGE';
      let str = ''
      ea.subscribe(msg, (data) => { 
        expect(data).to.equal('THIS IS MY TEST MESSAGE');
        done();
      });
      ea.publish(msg, 'THIS IS MY TEST MESSAGE');
    } catch (ex) {
      assert(false, "failed to subscribe and reeive event");
    }
  });

});
