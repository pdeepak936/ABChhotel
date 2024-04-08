const TaskModel = require("../models/taskModel");

exports.submitFormData = async (req, res) => {
  try {
    const {
      userName,
      delay,
      rating,
      task,
      selectedDateTime,
      serviceRequest,
      itemRequest,
    } = req.body;

    const generateCardId = () => {
        const min = 10000; 
        const max = 99999; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    const newFormData = new TaskModel({
      userName,
      delay,
      rating,
      task,
      selectedDateTime,
      serviceRequest,
      itemRequest,
      status: "Scheduled",
      cardId: generateCardId(),
    });
    await newFormData.save();
    res.status(201).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Error submitting form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    await TaskModel.findByIdAndUpdate({ _id: id }, { status });
    res.status(200).json({ message: "Form data status updated successfully" });
  } catch (error) {
    console.error("Error updating form data status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.notify = async (req, res) => {
    try {
      const { id } = req.body;
      await TaskModel.findByIdAndUpdate({ _id: id }, { status: "Scheduled" });
      res.status(200).json({ message: "Form data status updated successfully" });
    } catch (error) {
      console.error("Error updating form data status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

exports.filterNotAccepted = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Not Accepted" });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.filterScheduled = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Scheduled" });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.filterOngoing = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Ongoing" });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.filterCompleted = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Completed" });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.filterDelayed = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Delayed" });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.filterOnTime = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Ontime" });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.allTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error filtering tasks by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateStatusIfDelayed = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ status: "Delayed" });
    const promises = tasks.map(async (task) => {
      try {
        const currentTime = new Date();
        const timeDifference = Math.abs(
          currentTime - Date.parse(task.selectedDateTime)
        );
        const delayMinutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const updatedTask = await TaskModel.findByIdAndUpdate(task._id, {
          delay: delayMinutes,
        });
        if (!updatedTask) {
          throw new Error(`Task with ID ${task._id} not found`);
        }
        return `Delay updated for task ${task._id}: ${delayMinutes} minutes`;
      } catch (error) {
        console.error(`Error updating delay for task ${task._id}:`, error);
        return null;
      }
    });
    const results = await Promise.all(promises);
    res
      .status(200)
      .json({ message: "Delay updated for delayed tasks", results });
  } catch (error) {
    console.error("Error updating delay for delayed tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


