function Calendar() {
    this.appointments = [];
}

Calendar.prototype.addTo = function(appointment) {

    if ( appointment.type === 1 ) {
        if ( this.busy(appointment.name, appointment.from) ) {
            throw new Error();
        }
    }
    this.appointments.push(appointment);
};

Calendar.prototype.busy = function(name, when) {
    const appointment = this.appointments.find( (a) => {
        const from = new Date(a.from),
              to = new Date(a.to);
        return when >= from && when <= to;
    });

    return appointment !== undefined;
};

module.exports = Calendar;
