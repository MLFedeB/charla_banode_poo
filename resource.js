module.exports = {
    events: [],

    addEvent: function(event) {
        const overlaped = this.events.find(
            (e) =>
                ( event.to >= e.from && event.to <= e.to ) ||
                ( event.from >= e.from && event.from <= e.to )
        );

        if ( overlaped ) {
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
    }
};
