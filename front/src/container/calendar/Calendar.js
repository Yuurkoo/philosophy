import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import Title from "../../component/title";

export default function Settings() {
  const [date, setDate] = useState(new Date());
  const [reminders, setReminders] = useState({});
  const [newReminder, setNewReminder] = useState("");

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleAddReminder = () => {
    const dateString = date.toDateString();
    const updatedReminders = {
      ...reminders,
      [dateString]: [...(reminders[dateString] || []), newReminder],
    };
    setReminders(updatedReminders);
    setNewReminder("");
  };

  const handleDeleteReminder = (reminderIndex) => {
    const dateString = date.toDateString();
    const updatedReminders = {
      ...reminders,
      [dateString]: reminders[dateString].filter(
        (_, index) => index !== reminderIndex
      ),
    };
    setReminders(updatedReminders);
  };

  return (
    <div className="settings">
      <Title>Календар</Title>
      <Calendar onChange={handleDateChange} value={date} />

      <h3>Додати нагадування</h3>
      <div className="reminder-input">
        <input
          type="text"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
          placeholder="Введіть нагадування"
        />
        <button onClick={handleAddReminder}>Додати</button>
      </div>
      <div className="reminder-list">
        <h3>Нагадування на {date.toDateString()}</h3>
        <ul>
          {(reminders[date.toDateString()] || []).map((reminder, index) => (
            <li key={index}>
              {reminder}
              <button
                className="delete-button"
                onClick={() => handleDeleteReminder(index)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
