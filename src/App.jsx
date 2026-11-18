
import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Pune");
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [react, setReact] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration Successful!");

    console.log({
      fullName,
      email,
      gender,
      city,
      skills: [
        html && "HTML",
        css && "CSS",
        react && "React"
      ].filter(Boolean),
      message
    });
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <p>Enter your details to register</p>

      <form onSubmit={handleSubmit}>

        {/* Text Input */}
        <label>Full Name:</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Radio Buttons */}
        <label>Gender:</label>

        <div className="options">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </div>

        {/* Dropdown */}
        <label>Select City:</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
        </select>

        {/* Checkboxes */}
        <label>Select Skills:</label>

        <div className="options">
          <input
            type="checkbox"
            checked={html}
            onChange={(e) => setHtml(e.target.checked)}
          />
          HTML

          <input
            type="checkbox"
            checked={css}
            onChange={(e) => setCss(e.target.checked)}
          />
          CSS

          <input
            type="checkbox"
            checked={react}
            onChange={(e) => setReact(e.target.checked)}
          />
          React
        </div>

        {/* Textarea */}
        <label>Address / Message:</label>
        <textarea
          placeholder="Enter your address or message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        />

        {/* Submit Button */}
        <button type="submit">Register Now</button>

      </form>
    </div>
  );
}

export default App;
