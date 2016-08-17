const clone = require("clone");

function Calendar() {
    this.attendes = [];
    this.events = [];
}

Calendar.prototype.addAttendes = function(attendes) {
    this.attendes = clone(attendes);
};

Calendar.prototype.addEvent = function(event) {
    const overlaped = this.events.find( (e) => Calendar.areOverlaped(e, event) );

    // Code here ! (if you want to remove all the code go ahead)
    this.events.push(event);
};

Calendar.prototype.getAttende = function(name) {
    return this.attendes.find( (a) => a.name === name);
};

Calendar.prototype.getResource = function(name) {
    const a = this.getAttende(name);
    return ( a && a.type === 1) ? a : null;
};

Calendar.prototype.isBusy = function(who, when) {
    const event = this.events.find(
        (e) =>
            e.attendes.indexOf( who ) !== -1 &&
            ( when >= new Date(e.from) && when <= new Date(e.to) )
    );
    return event !== undefined;
};

Calendar.areOverlaped = function(event0, event1) {
    const events = [ event0, event1 ].sort( (a,b) => a.from - b.from );

    return ( events[0].from <= events[1].from && events[1].from <= events[0].to ) ||
        ( events[0].from <= events[1].to   && events[1].to   <= events[0].to );
};

module.exports = Calendar;
