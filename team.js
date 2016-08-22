module.exports = {
    events: [],

    addEvent: function(event, attendes) {
        this.attendes = attendes;

        if ( this.attendesWichAreMembers().some( (m) => m.isBusy(event.from) ) ) {
            throw new Error();
        }

        this.events.push(event);
    },

    isBusy: function(when) {
        return this.events.some(
            (e) =>
                e.attendes.indexOf( this.name ) !== -1 &&
                ( when >= new Date(e.from) && when <= new Date(e.to) )
        );
    },

    attendesWichAreMembers: function() {
        return this.attendes.filter( (a) => this.members.indexOf(a.name) !== -1 );
    },

    isEqual: function(other) {
        return this.name === other.name;
    }
};
