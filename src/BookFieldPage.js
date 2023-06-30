import React, { useState } from "react";
import "./BookFieldPage.css"; // Import CSS file for styling

function BookFieldPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedField, setSelectedField] = useState("");
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
      selectedField,
      dateTime,
      isRecurring,
    });
    setIsSubmitted(true);
    // Clear form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedField("");
    setDateTime("");
    setIsRecurring(false);
  };

  const handleRecurringChange = (e) => {
    setIsRecurring(e.target.checked);
  };

  const renderConfirmation = () => {
    if (isSubmitted) {
      return (
        <div className="confirmation-message">
          <p>
            Thank you for booking a field, {firstName} {lastName}!
          </p>
          <p>Field: {selectedField}</p>
          <p>Date and Time: {dateTime}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="book-field-container">
      <h1>Field Booking</h1>
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
          Select a Field:
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="form-input"
          >
            <option value="">-- Select a Field --</option>
            <option value="Field 1">Etihad Stadium</option>
            <option value="Field 2">Allianz Arena</option>
            <option value="Field 3">Santiago Bernabeu</option>
            <option value="Field 4">Camp Nou</option>
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
          Book Field
        </button>
      </form>
      {renderConfirmation()}
    </div>
  );
}

export default BookFieldPage;
