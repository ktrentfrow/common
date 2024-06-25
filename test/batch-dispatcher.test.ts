import { assert, expect } from "chai";
import { afterEach } from "mocha";
import { BatchDispatcher } from "../src/utilities/batch-dispatcher";

let bd : BatchDispatcher<string, unknown>;
describe("Batch dispatcher", () => {
  before(() => {
    try {
      bd = new BatchDispatcher(1000, (data: Array<string>) => {
        console.log(data);
      });
    } catch (ex) {
      console.log("database already exists");
    }
  });

  after(() => {
    bd.close();
    bd = null;
  });

  it("should create a batch dispatcher", () => {
    try {
      expect(bd).to.not.be.undefined;
    } catch (ex) {
      assert(false, "failed to create batch dispatcher");
    }
  });

  it("should reset interval and do manual execute", () => {
    try {
        bd.resetBatchInterval(3000000);
        bd.data.push('string1');
        expect(bd.data.length).to.equal(1);
        bd.executeDispatch();
        expect(bd.data.length).to.equal(0);
        bd.resetBatchInterval(1000);
    } catch (ex) {
      assert(false, "failed to create batch dispatcher");
    }
  });
});
