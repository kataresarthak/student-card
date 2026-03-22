import { useState } from "react";
import "./StudentCard.css";

function StudentCard({
  name,
  age,
  course,
  email,
  skills,
  address,
  profileImage,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const [likes, setLikes] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="student-card">
      {profileImage ? (
        <img src={profileImage} alt={name} className="student-image" />
      ) : (
        <div className="student-image placeholder">👤</div>
      )}

      <div className="card-content">
        <h2 className="student-name">{name}</h2>
        <p className="student-info">
          <strong>Age:</strong> {age}
        </p>
        <p className="student-info">
          <strong>Course:</strong> {course}
        </p>

        {showDetails && (
          <div className="details-section">
            <hr />
            <p className="student-info">
              <strong>Email:</strong> {email || "Not provided"}
            </p>
            <p className="student-info">
              <strong>Skills:</strong> {skills || "Not provided"}
            </p>
            <p className="student-info">
              <strong>Address:</strong> {address || "Not provided"}
            </p>
          </div>
        )}

        <div className="button-container">
          <button className="btn btn-details" onClick={toggleDetails}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          <button className="btn btn-like" onClick={handleLike}>
            👍 Like ({likes})
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
