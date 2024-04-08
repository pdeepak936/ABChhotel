import React, { useState } from "react";
import "react-calendar-datetime-picker/dist/style.css";

function Form() {
  const [formData, setFormData] = useState({
    userName: "",
    delay: "",
    rating: "",
    task: "",
    selectedDateTime: "",
    serviceRequest: "",
    itemRequest: "",
  });

  const [showServiceRequest, setShowServiceRequest] = useState(true);
  const [showItemRequest, setShowItemRequest] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "serviceRequest") {
      setShowItemRequest(false);
    }
    if (name === "itemRequest") {
      setShowServiceRequest(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      const data = await response.json();
      console.log('Form data submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error
    }
  };

  return (
    <div className="mt-5" style={{}}>
      <form
        className="mt-5 p-5"
        style={{ backgroundColor: "grey", border: "1px solid black", margin: "20px 400px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputEmail4">User Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="User Name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4">Delay</label>
            <input
              type="number"
              className="form-control"
              id="inputPassword4"
              placeholder="Delay"
              name="delay"
              value={formData.delay}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="inputAddress">Rating</label>
          <input
            type="number"
            className="form-control"
            id="inputAddress"
            placeholder="1 to 5"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputState">Task</label>
          <select
            id="inputState"
            className="form-control"
            name="task"
            value={formData.task}
            onChange={handleChange}
          >
            <option selected>Choose...</option>
            <option>Guest Task</option>
            <option>Internal Task</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputDateTime">Select Date and Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="inputDateTime"
              name="selectedDateTime"
              value={formData.selectedDateTime}
              onChange={handleChange}
            />
          </div>

          {showServiceRequest && (
            <div className="form-group">
              <label htmlFor="inputState">Service requests</label>
              <select
                id="inputState"
                className="form-control"
                name="serviceRequest"
                value={formData.serviceRequest}
                onChange={handleChange}
              >
                <option selected>Choose...</option>
                <option>Routine Cleaning</option>
                <option>Room Cleaning</option>
                <option>Bathroom Cleaning</option>
              </select>
            </div>
          )}
          {showItemRequest && (
            <div className="form-group">
              <label htmlFor="inputState">Item requests</label>
              <select
                id="inputState"
                className="form-control"
                name="itemRequest"
                value={formData.itemRequest}
                onChange={handleChange}
              >
                <option selected>Choose...</option>
                <option>Shampoo</option>
                <option>Conditioner</option>
              </select>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
