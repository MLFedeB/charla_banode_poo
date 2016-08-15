const clone = require("clone");

function Calendar() {
    this.attendes = [];
}

Calendar.prototype.protocol = function(attende) {
    const protocols = {
        0: require("./person"),
        1: require("./resource"),
        2: require("./team")
    };

    return clone( protocols[attende.type] );
};

Calendar.prototype.addAttendes = function(attendes) {
    this.attendes = attendes.map( (a) => {
        a.__proto__ = this.protocol(a);
        return a;
    });
};

Calendar.prototype.addEvent = function(event) {
    const self = this;
    event.attendes.forEach( (a) => {
        const attende = self.getAttende(a);
        attende.addEvent(event, self.attendes);
    });
};

Calendar.prototype.getAttende = function(name) {
    return this.attendes.find( (a) => a.name === name);
};

Calendar.prototype.isBusy = function(who, when) {
    const attende = this.attendes.find( (a) => a.name === who);

    return attende.isBusy(when);
 };

module.exports = Calendar;
