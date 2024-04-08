// import React, {useState} from "react";
// import "./style.css";
// import axios from "axios";
// import Modal from 'react-modal';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import LocalDiningIcon from '@mui/icons-material/LocalDining';
// import RepeatOnIcon from '@mui/icons-material/RepeatOn';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { Circle } from "../../helper";

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width:'300px'
//   },
// };

// const Card = (props) => {
//   const {
//     username="Rajesh",
//     goal = "Routine Cleaning",
//     data="21 Jul 2024 | 03:00 am",
//     id="#68988",
//     delay="20",
//     task="Guest Task",
//     rating="2"
//   } = props;

//   let subtitle;

//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [status, setStatus] = useState('');

//   function openModal() {
//     setIsOpen(true);
//   }

//   // function afterOpenModal() {
//   //   // references are now sync'd and can be accessed.
//   //   subtitle.style.color = '#f00';
//   // }

//   const handleSubmit = async () => {
//     try {
//       await axios.put('http://localhost:8000/update', {
//         id: props.id,
//         status: status
//       });
//       closeModal();
//     } catch (error) {
//       console.error('Error updating status:', error);
//       // Handle error
//     }
//   };

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="card_container">
//       <div className="d-flex justify-content-between">
//        <div className="d-flex align-items-center" style={{background:"#F7F7F7"}}>
//        <LocalDiningIcon style={{...styles.icon, color:"#5F69C7"}} />
//         <span style={styles.usernameTitleStyle} className="d-flex align-items-center">{username}</span>
//         <Circle/>
//        </div>
//         <span onClick={openModal} style={{...styles.notAcceptedTitleStyle,background:"#F7F7F7"}}>Not Accepted</span>
//         <RepeatOnIcon style={{...styles.icon, color:"#767676", marginLeft:"-.8rem"}}/>
//         <span className="d-flex align-items-center justify-content-end pe-1" style={{width:"25%", color:"#00A441", background:"#D7FFE7", fontSize:"12px"}}> <AccessTimeFilledIcon style={{...styles.icon, color:"#00A441", background:"#D7FFE7"}}/> {delay} min</span>
//       </div>
//       {/* routine */}
//       <div className="d-flex mt-2 justify-content-between">
//         <h3 style={styles.goalTitleStyle} className="user_name">{goal}</h3>
//         <div style={styles.guestTaskTitleStyle}>{task}</div>
//       </div>
//       {/* date & time  */}
//       <div className="d-flex mt-1 justify-content-between align-items-center">
//         <div style={styles.dateTitleStyle}><CalendarTodayIcon style={styles.icon} /><span> {data}</span></div>
//         <span style={styles.dateTitleStyle}>{id}</span>
//       </div>
//       {/* transmit */}
//       <div className="d-flex justify-content-between align-items-center">
//         <span style={styles.transmitStyle}>From:Pantry</span>
//         <span style={styles.transmitStyle}>To:Reception</span>
//       </div>
//       {/* button */}
//       <div className="buttons_box">
//       {!!1 &&  <button style={styles.buttonStyle('#5F69C7')}> <span> <CheckCircleIcon/></span> Notify Staff</button>}
//       {!!0 &&  <button style={styles.viewDetailBtnStyle}> View Details</button>}
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         // onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <form>
//         <div className="form-group col-md-6">
//           <label htmlFor="inputState">Change Status</label>
//           <select id="inputState" className="form-control" name="itemRequest">
//             <option selected>Choose...</option>
//             <option>Not Accepted</option>
//             <option>Ongoing</option>
//             <option>Scheduled</option>
//             <option>Completed</option>
//             <option>Delayed</option>
//             <option>Ontime</option>
//           </select>
//         </div>
//         <button onClick={handleSubmit}>submit</button>
//         </form>
//       </Modal>
//     </div>

//   );
// };

// export default Card;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Modal from "react-modal";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Circle } from "../../helper";

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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/allTasks");
      setTasks(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const openModal = (task) => {
    setSelectedTask(task);
    setIsOpen(true);
  };

  const handleSubmit = async (id, status) => {
    try {
      const data = await axios.put("http://localhost:8000/update", {
        id: id,
        status: status,
      });
      console.log(status);
      setIsOpen(false);
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleNotify = async (id) => {
    try {
      await axios.post("http://localhost:8000/notify", {
        id: id,
      });
      setIsOpen(false);
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <>
      {tasks.map((task) => (
        <div className="col-sm-12 col-lg-4">
          <div className="card_container m-4 rounded" key={task._id}>
            <div className="d-flex justify-content-between rounded">
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
                  {task.userName}
                </span>
                <Circle />
              </div>
              <span
                onClick={() => openModal(task)}
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
                {task.status}
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
                  color: "#00A441",
                  background: "#D7FFE7",
                  fontSize: "12px",
                }}
              >
                {" "}
                <AccessTimeFilledIcon
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "#00A441",
                    background: "#D7FFE7",
                    margin: "5px 2px",
                  }}
                />{" "}
                {task.delay} min
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
                {task.serviceRequest}
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
                {task.task}
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
                <span> {formatDate(task.selectedDateTime)}</span>
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
                #{task.cardId}
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
                  background: "#5F69C7",
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
            <Modal
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
                    onChange={(e) => setStatus(e.target.value)}
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
                  onClick={() => handleSubmit(task._id, status)}
                >
                  Submit
                </button>
                <button type="button" onClick={closeModal}>
                  Close
                </button>
              </form>
            </Modal>
          </div>
        </div>
      ))}
    </>
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
