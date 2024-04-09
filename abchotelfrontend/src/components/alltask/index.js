import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { gridStyle } from "../../helper";
import Modal from "react-modal";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Circle } from "../../helper";
import  MainCard from "../card/card";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

const Card = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(()=>{
    (async()=>{
        try {
            const data = await axios.get("https://abchotelbackend.onrender.com/tasksByStatus", {
              data:{status: "Scheduled"}
            });
            console.log('schedule', data?.data);
            //setData(data.data);
            //debugger
          } catch (error) {
            console.error("Error updating status:", error);
          }
    })()
},[])

  const fetchData = async () => {
    try {
      const response = await axios.get("https://abchotelbackend.onrender.com/allTasks");
      setTasks(response.data);
      //debugger
      //console.log(response.data)
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

 

  return (
    <div className="row">
      {tasks.map((task) => {
        return  <MainCard
        taskId={task._id}
        userName={task.userName}
        serviceRequest = {task.serviceRequest}
        selectedDateTime={task.selectedDateTime}
        cardId={task.cardId}
        delay={task.delay}
        task={task.task}
        rating={task.rating}
        status={task.status}
        itemRequest={task.itemRequest}
        />
      }
      
      )}
    </div>
  );
};

export default Card;

const styles = {
  icon: {
    width: "14px",
    height: "14px",
    color: "#767676",
    margin: "5px 2px",
  },
  notAcceptedTitleStyle: {
    color: "#CC2610",
    font: "Montserrat",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14.64px",
    display: "flex",
    alignItems: "center",
  },
  usernameTitleStyle: {
    fontSize: "12px",
    fontWeight: 600,
    font: "Encode Sans Expanded",
    lineHeight: "25px",
    margin: "0 3px",
  },
  guestTaskTitleStyle: {
    font: "Montserrat",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14.64px",
    color: "#DC5B19",
    padding: "5px",
    background: "#F7F7F7",
  },
  goalTitleStyle: {
    fontSize: "16px",
    fontWeight: 600,
    font: "Encode Sans Expanded",
    color: "1A0A02",
    padding: "5px",
    lineHeight: "20px",
  },
  dateTitleStyle: {
    font: "Montserrat",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14.64px",
    color: "#767676",
    display: "flex",
    padding: "5px",
    alignItems: "center",
  },
  transmitStyle: {
    color: "#767676",
    fontSize: "12px",
    fontWeight: 600,
    padding: "5px",
    font: "Encode Sans Expanded",
  },
  viewDetailBtnStyle: {
    width: "100%",
    color: "#5F69C7",
    borderRadius: "20px",
    padding: "5px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "15px",
    fontStyle: "normal",
    border: "1px solid #5F69C7",
  },
  buttonStyle(btnBgColor) {
    return {
      width: "100%",
      background: btnBgColor,
      color: "#fff",
      borderRadius: "20px",
      border: "none",
      padding: "5px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "15px",
      fontStyle: "normal",
    };
  },
};
