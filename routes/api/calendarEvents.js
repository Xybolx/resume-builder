const router = require("express").Router();
const calendarEventsController = require("../../controllers/calendarEventsController");

// Matches with "/api/calendarEvents"
router
    .route("/")
    .get(calendarEventsController.findAll)
    .post(calendarEvents.create)
    .delete(calendarEvents.remove);

// Matches with "/api/rants/:id"
router
    .route("/:id")
    .get(calendarEvents.findById)
    .put(calendarEvents.update);

module.exports = router;