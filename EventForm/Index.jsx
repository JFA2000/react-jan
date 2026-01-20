import { useState } from "react";

const EventForm = () => {
  const [eventName, setEventName] = useState("");  
  const [eventMail, setEventMail] = useState("");
  const [eventAttendees, setEventAttendees] = useState(0);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSubmitted(true);
    }}>
        <label>Name</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={eventMail}
          onChange={(e) => setEventMail(e.target.value)}
          required
        />
        <label>Number of Attendees</label>
        <input
          type="number"
          value={eventAttendees}
          onChange={(e) => setEventAttendees(e.target.value)}
          required
        />
        <label>Dietary Preferences</label>
        <input
          type="text"
          value={dietaryPreferences}
          onChange={(e) => setDietaryPreferences(e.target.value)}
        />
        <label>Bringing Additional Guests?</label>
        <input
          type="checkbox"
          checked={additionalGuests}
          onChange={(e) => setAdditionalGuests(e.target.checked)}
        />
        <button type="submit">Submit</button>
    </form>
    {isSubmitted && (
      <div className="event-details">
        <h2>Event Details</h2>
        <p><strong>Name:</strong> {eventName}</p>
        <p><strong>Email:</strong> {eventMail}</p>
        <p><strong>Number of Attendees:</strong> {eventAttendees}</p>
        <p><strong>Dietary Preferences:</strong> {dietaryPreferences || "None"}</p>
        <p><strong>Bringing Additional Guests:</strong> {additionalGuests ? "Yes" : "No"}</p>
      </div>
    )}
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<EventForm />);

