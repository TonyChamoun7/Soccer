import React, { useState } from "react";
import "./TrainingSessionsPage.css"; // Import CSS file for styling

function TrainingSessionsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic or API call here
    console.log("Submitted:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedService,
      dateTime,
      isRecurring,
    });
    setIsSubmitted(true);
    // Clear form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedService("");
    setDateTime("");
    setIsRecurring(false);
  };

  const handleRecurringChange = (e) => {
    setIsRecurring(e.target.checked);
  };

  return (
    <div className="training-session-container">
      <h1>Training Session Booking</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Select a Service:
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="form-input"
          >
            <option value="">-- Select a Service --</option>
            <option value="Shooting Practice">Shooting Practice</option>
            <option value="Dribbling Practice">Dribbling Practice</option>
            <option value="Passing Practice">Passing Practice</option>
            <option value="Set Piece Practice">Set Piece Practice</option>
            <option value="Defending Practice">Defending Practice</option>
            <option value="Goalie Practice">Goalie Practice</option>
          </select>
        </label>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="recurring-checkbox">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={handleRecurringChange}
            className="form-input"
          />
          <span className="recurring-checkbox-label">Recurring</span>
        </label>
        <button type="submit" className="submit-button">
          Book Session
        </button>
      </form>
      {isSubmitted && (
        <div className="confirmation-message">
          <p>
            Thank you for booking a training session, {firstName} {lastName}!
          </p>
          <p>Service: {selectedService}</p>
          <p>Date and Time: {dateTime}</p>
        </div>
      )}
    </div>
  );
}

export default TrainingSessionsPage;
