const chai = require('chai'),
      Calendar = require("../solution_00");

var calendar;

describe("solution_00", () => {
    describe("resource", () => {
        beforeEach(() => {
            calendar = new Calendar();
            calendar.addTo({
                name: "projector",
                type: 1,
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z")
            });
        });
        it("should be busy", () => {
            chai.expect(
                calendar.busy("projector", new Date("2016-08-09T12:00:00.000Z"))
            ).to.be.true;
        });

        it("shouldn't attend overlapped  appointments", () => {
            chai.expect( () => {
                calendar.addTo({
                    name: "projector",
                    type: 1,
                    from: new Date("2016-08-09T12:05:00.000Z"),
                    to: new Date("2016-08-09T12:10:00.000Z")
                });
            }).to.throw(Error);
        });
    });

    describe("person", () => {
        beforeEach(() => {
            calendar = new Calendar();
            calendar.addTo({
                name: "Michel",
                type: 0,
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z")
            });
        });
        it("should be busy", () => {
            chai.expect(
                calendar.busy("Michel", new Date("2016-08-09T12:00:00.000Z"))
            ).to.be.true;
        });

        it("should not be busy", () => {
            chai.expect(
                calendar.busy("Michel", new Date("2016-08-09T14:00:00.000Z"))
            ).to.be.false;
        });

        it("should attend overlapped appointments", () => {
            calendar = new Calendar();
            calendar.addTo({
                name: "Michel",
                type: 0,
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z")
            });

            calendar.addTo({
                name: "Michel",
                type: 0,
                from: new Date("2016-08-09T12:05:00.000Z"),
                to: new Date("2016-08-09T12:10:00.000Z")
            });
            chai.expect(
                calendar.busy("Michel", new Date("2016-08-09T12:03:00.000Z"))
            ).to.be.true;
        });
    });
});
