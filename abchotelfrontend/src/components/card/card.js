import React, {useState} from "react";
import "./style.css";
import axios from "axios";
import Modal from 'react-modal';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Circle } from "../../helper";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'300px'
  },
};



const Card = (props) => {
  const {
    taskId='1',
    userName="Rajesh",
    serviceRequest = "Routine Cleaning",
    selectedDateTime="21 Jul 2024 | 03:00 am",
    cardId="68988",
    delay="20",
    task="Guest Task",
    rating="2",
    status='status',
    itemRequest='item req',
  } = props;

  console.log("props", props);


  const [modalIsOpen, setIsOpen] = useState(false);
  // const [selectedTask, setSelectedTask] = useState(null);
  // const [stat, setStat] = useState("");
  // //const [status, setStatus] = useState('');

  // function openModal() {
  //   setIsOpen(true);
  // }

  // // function afterOpenModal() {
  // //   // references are now sync'd and can be accessed.
  // //   subtitle.style.color = '#f00';
  // // }

  // const openModal = (task) => {
  //   setSelectedTask(task);
  //   setIsOpen(true);
  // };

  // const handleSubmit = async (taskId, status) => {
  //   try {
  //     const data = await axios.put("http://localhost:8000/update", {
  //       id: taskId,
  //       status: status,
  //     });
  //     console.log("status is",status);
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //   }
  // };

  const handleNotify = async (id) => {
    try {
      await axios.post("http://localhost:8000/notify", {
        id: id,
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(dateString)
    return `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  return (
    // <div className="col-sm-12 col-lg-4">
          <div className="card_container m-4 rounded" key={taskId}>
            <div className="d-flex justify-content-between rounded" style={{alignItems: "center"}}>
              <div
                className="d-flex align-items-center"
                style={{ background: "#F7F7F7" }}
              >
                <LocalDiningIcon
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "#5F69C7",
                    margin: "5px 2px",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    font: "Encode Sans Expanded",
                    lineHeight: "25px",
                    margin: "0 3px",
                  }}
                  className="d-flex align-items-center"
                >
                  {userName}
                </span>
                <Circle />
              </div>
              <span
                // onClick={() => openModal(task)}
                style={{
                  color: "#CC2610",
                  font: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "14.64px",
                  display: "flex",
                  alignItems: "center",
                  background: "#F7F7F7",
                }}
              >
                {status}
              </span>
              <RepeatOnIcon
                style={{
                  width: "14px",
                  height: "14px",
                  color: "#767676",
                  marginLeft: "-.8rem",
                }}
              />
              <span
                className="d-flex align-items-center justify-content-end pe-1"
                style={{
                  width: "25%",
                  color:  parseInt(delay)<3 ? "#CC2610":"#00A441",
                  background:  parseInt(delay)<3 ? "#F4D8D8":"#D7FFE7",
                  fontSize: "12px",
                  borderRadius: "20px"
                }}
              >
                {" "}
                <AccessTimeFilledIcon
                  style={{
                    width: "14px",
                    height: "14px",
                    color:  parseInt(delay)<3 ? "#CC2610":"#00A441",
                    background:  parseInt(delay)<3 ? "#F4D8D8":"#D7FFE7",
                    margin: "5px 2px"
                  }}
                />{" "}
                {delay} min
              </span>
            </div>
            <div className="d-flex mt-2 justify-content-between">
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  font: "Encode Sans Expanded",
                  color: "1A0A02",
                  padding: "5px",
                  lineHeight: "20px",
                }}
                className="user_name"
              >
                {serviceRequest}
              </h3>
              <div
                style={{
                  font: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "14.64px",
                  color: "#DC5B19",
                  padding: "5px",
                  background: "#F7F7F7",
                }}
              >
                {task}
              </div>
            </div>
            <div className="d-flex mt-1 justify-content-between align-items-center">
              <div
                style={{
                  font: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "14.64px",
                  color: "#767676",
                  display: "flex",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <CalendarTodayIcon
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "#767676",
                    margin: "5px 2px",
                  }}
                />
                <span> {formatDate(selectedDateTime)}</span>
              </div>
              <span
                style={{
                  font: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "14.64px",
                  color: "#767676",
                  display: "flex",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                #{cardId}
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span
                style={{
                  color: "#767676",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "5px",
                  font: "Encode Sans Expanded",
                }}
              >
                From:Pantry
              </span>
              <span
                style={{
                  color: "#767676",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "5px",
                  font: "Encode Sans Expanded",
                }}
              >
                To:Reception
              </span>
            </div>
            <div className="buttons_box">
              <button
                style={{
                  width: "100%",
                  background: parseInt(delay)<3 ? "#CC2610":"#5F69C7",
                  color: "#fff",
                  borderRadius: "20px",
                  border: "none",
                  padding: "5px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontStyle: "normal",
                }}
                onClick={() => handleNotify(task._id)}
              >
                {" "}
                <span>
                  {" "}
                  <CheckCircleIcon />
                </span>{" "}
                Notify Staff
              </button>
            </div>
            {/* <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Change Status Modal"
            >
              <form>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">Change Status</label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="status"
                    onChange={(e) =>{}}
                  >
                    <option value="">Choose...</option>
                    <option value="Not Accepted">Not Accepted</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Delayed">Delayed</option>
                    <option value="Ontime">Ontime</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => handleSubmit(taskId, status)}
                >
                  Submit
                </button>
                <button type="button" onClick={closeModal}>
                  Close
                </button>
              </form>
            </Modal> */}
          </div>
        // </div>
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
