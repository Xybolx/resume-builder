const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarEventsSchema = new Schema({
    event: {
        type: String
    },

    eventDate: {
        type: Date
    },

    date: {
        type: Date,
        default: Date.now,
        index: {
            unique: true
        }
    }

});

const CalendarEvents = mongoose.model("CalendarEvents", calendarEventsSchema);

module.exports = CalendarEvents;
