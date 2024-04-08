const express = require("express");
const router = express.Router();
const {
  submitFormData,
  updateStatus,
  allTasks,
  updateStatusIfDelayed,
  notify,
  filterNotAccepted,
  filterScheduled,
  filterOngoing,
  filterCompleted,
  filterDelayed,
  filterOnTime
} = require("../controller/controller");

router.post("/submitForm", submitFormData);
router.put("/update", updateStatus);
router.get("/filterNotAccepted", filterNotAccepted);
router.get("/filterScheduled", filterScheduled);
router.get("/filterOngoing", filterOngoing);
router.get("/filterCompleted", filterCompleted);
router.get("/filterDelayed", filterDelayed);
router.get("/filterOnTime", filterOnTime);
router.get("/allTasks", allTasks);
router.get("/updateDelayed", updateStatusIfDelayed);
router.post("/notify", notify);

module.exports = router;
