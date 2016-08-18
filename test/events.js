const Calendar = require("../solution");

const chai = require("chai");

describe("events", () => {
    it("shouldn't overlap because the first event occurs before the second one", () => {
        const event0 = { from: new Date("2016-08-09T10:05:00.000Z"), to: new Date("2016-08-09T10:10:00.000Z") },
              event1 = { from: new Date("2016-08-09T12:00:00.000Z"), to: new Date("2016-08-09T12:30:00.000Z") };

        chai.expect(Calendar.areOverlaped(event0, event1)).to.be.false;
        chai.expect(Calendar.areOverlaped(event1, event0)).to.be.false;
    });

    it("shouldn't overlap because the first event occurs after the second one", () => {
        const event0 = { from: new Date("2016-08-09T14:05:00.000Z"), to: new Date("2016-08-09T14:10:00.000Z") },
              event1 = { from: new Date("2016-08-09T12:00:00.000Z"), to: new Date("2016-08-09T12:30:00.000Z") };

        chai.expect(Calendar.areOverlaped(event0, event1)).to.be.false;
        chai.expect(Calendar.areOverlaped(event1, event0)).to.be.false;
    });

    it("should overlap because the first event is happening during the second one", () => {
        const event0 = { from: new Date("2016-08-09T12:05:00.000Z"), to: new Date("2016-08-09T12:10:00.000Z") },
              event1 = { from: new Date("2016-08-09T12:00:00.000Z"), to: new Date("2016-08-09T12:30:00.000Z") };

        chai.expect(Calendar.areOverlaped(event0, event1)).to.be.true;
        chai.expect(Calendar.areOverlaped(event1, event0)).to.be.true;
    });

    it("should overlap because the end of the first event is after the beginning of the second event", () => {
        const event0 = { from: new Date("2016-08-09T11:30:00.000Z"), to: new Date("2016-08-09T12:10:00.000Z") },
              event1 = { from: new Date("2016-08-09T12:00:00.000Z"), to: new Date("2016-08-09T12:30:00.000Z") };

        chai.expect(Calendar.areOverlaped(event0, event1)).to.be.true;
        chai.expect(Calendar.areOverlaped(event1, event0)).to.be.true;
    });
});
