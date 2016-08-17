const chai = require('chai'),
      Calendar = require("../solution");

var calendar;

describe("solution", () => {
    beforeEach(() => {
        calendar = new Calendar();
        calendar.addAttendes([{
            name: "Gabriel",
            type: 0
        }, {
            name: "Michel",
            type: 0
        }, {
            name: "Bricks",
            type: 0
        }, {
            name: "projector",
            type: 1
        }]);
    });

    describe("person", () => {
        it.skip("should be busy during an event", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Michel"]
            });

            chai.expect(
                calendar.isBusy( "Michel", new Date("2016-08-09T12:00:00.000Z"))
            ).to.be.true;
        });

        it.skip("shouldn't be busy after an event", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Michel"]
            });

            chai.expect(
                calendar.isBusy( "Michel", new Date("2016-08-09T12:40:00.000Z"))
            ).to.be.false;
        });

        it.skip("should attend both overlaped events", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Michel"]
            });

            calendar.addEvent({
                name: "CatchUp call",
                from: new Date("2016-08-09T12:05:00.000Z"),
                to: new Date("2016-08-09T12:10:00.000Z"),
                attendes: [ "Michel"]
            });

            chai.expect(
                calendar.isBusy( "Michel", new Date("2016-08-09T12:40:00.000Z"))
            ).to.be.false;
        });
    });

    describe("resource", () => {
        it.skip("should be busy during an event", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Michel", "projector"]
            });

            chai.expect(
                calendar.isBusy( "projector", new Date("2016-08-09T12:00:00.000Z"))
            ).to.be.true;
        });

        it.skip("shouldn't be busy after an event", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Michel", "projector"]
            });

            chai.expect(
                calendar.isBusy( "projector", new Date("2016-08-09T12:40:00.000Z"))
            ).to.be.false;
        });

        it.skip("should trigger an error if resource is added to overlaped events", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "projector" ]
            });

            chai.expect( () => {
                calendar.addEvent({
                    name: "CatchUp call",
                    from: new Date("2016-08-09T12:05:00.000Z"),
                    to: new Date("2016-08-09T12:10:00.000Z"),
                    attendes: [ "projector" ]
                });
            }).to.throw(Error);

        });
    });

});
