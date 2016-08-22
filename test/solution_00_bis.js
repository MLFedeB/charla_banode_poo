const chai = require('chai'),
      Calendar = require("../solution_00_bis");

var calendar;

describe("solution_00", () => {
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
        }, {
            name: "Team",
            type: 2,
            members: [ "Michel", "Bricks"]
        }]);
    });

    describe("calendar", () => {
        it("should allow adding attendes in batches", () => {
            calendar.addAttendes([{
                name: "Thomas",
                type: 0
            }, {
                name: "laptop",
                type: 1
            }]);

            chai.expect(
                calendar.attendes
            ).to.have.lengthOf(7);
        });

        it("should ensure attendes are not added multiple times", () => {
            calendar.addAttendes([{
                name: "Gabriel",
                type: 0
            }, {
                name: "projector",
                type: 1
            }]);

            chai.expect(
                calendar.attendes
            ).to.have.lengthOf(5);
        });
    });

    describe("person", () => {
        it("should be busy during an event", () => {
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

        it("shouldn't be busy after an event", () => {
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

        it("should attend both overlaped events", () => {
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
        it("should be busy during an event", () => {
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

        it("shouldn't be busy after an event", () => {
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

        it("should trigger an error if resource is added to overlaped events", () => {
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

    describe("group", () => {
        it("should be busy during an event", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Team" ]
            });

            chai.expect(
                calendar.isBusy( "Team", new Date("2016-08-09T12:00:00.000Z"))
            ).to.be.true;
        });

        it("shouldn't be busy after an event", () => {
            calendar.addEvent({
                name: "Meetup",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Team" ]
            });

            chai.expect(
                calendar.isBusy( "Team", new Date("2016-08-09T12:40:00.000Z"))
            ).to.be.false;
        });

        it("shouldn't trigger an error because the aren't overlaped event", () => {
            calendar.addEvent({
                name: "CatchUp",
                from: new Date("2016-08-09T12:00:00.000Z"),
                to: new Date("2016-08-09T12:30:00.000Z"),
                attendes: [ "Gabriel" ]
            });

            chai.expect( () => {
                calendar.addEvent({
                    name: "Meetup",
                    from: new Date("2016-08-09T12:05:00.000Z"),
                    to: new Date("2016-08-09T12:10:00.000Z"),
                    attendes: [ "Team" ]
                });
            }).to.not.throw(Error);

        });
    });
});
