const clone = require("clone");

function Calendar() {
    this.attendes = [];
    this.events = [];
}

Calendar.prototype.addAttendes = function(attendes) {
    attendes = attendes.filter( (attende) => !this.attendes.find( (a) => a.name === attende.name ) );
    Array.prototype.push.apply(this.attendes, clone(attendes));
};

Calendar.prototype.addEvent = function(event) {
    const overlaped = this.events.find( (e) => Calendar.areOverlaped(e, event) );

    if ( overlaped ) {
        const resource = event.attendes.find( (a) => this.getResource(a) ),
              group = event.attendes.find( (a) => this.getGroup(a) );

        if ( resource ) {
            throw new Error();
        }

        if ( group && this.areThereBusyMembers(group, overlaped.attendes, event.from) ) {
            throw new Error();
        }
    }
    this.events.push(event);
};

Calendar.prototype.areThereBusyMembers = function(group, persons, when) {
    const members = this.getGroup(group)
              .members.filter( (m) => persons.indexOf(m) !== -1 );

    if ( members.length === 0 ) {
        return false;
    }

    return members.some( (m) => this.isBusy(m.name, when ));
};

Calendar.prototype.getAttende = function(name) {
    return this.attendes.find( (a) => a.name === name);
};

Calendar.prototype.getResource = function(name) {
    const a = this.getAttende(name);
    return ( a && a.type === 1) ? a : null;
};

Calendar.prototype.getGroup = function(name) {
    const a = this.getAttende(name);
    return ( a && a.type === 2) ? a : null;
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
