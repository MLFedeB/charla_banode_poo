module.exports = {
    events: [],

    addEvent: function(event) {
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
