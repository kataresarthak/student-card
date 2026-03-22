import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Aman Kumar",
      age: 20,
      course: "Computer Science",
      email: "aman.kumar@email.com",
      skills: "JavaScript, React, Node.js",
      address: "123 Main Street, New Delhi",
      profileImage:
        "https://tse1.mm.bing.net/th/id/OIP.b6GLF67rw_oxDNouLbAX_QHaEP?w=626&h=358&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 19,
      course: "Information Technology",
      email: "priya.sharma@email.com",
      skills: "Python, Django, SQL",
      address: "456 Oak Avenue, Mumbai",
      profileImage:
        "https://upgradedpoints.com/wp-content/uploads/2023/05/Student-Carrying-Books-1.jpg",
    },
    {
      id: 3,
      name: "Rahul Singh",
      age: 21,
      course: "Web Development",
      email: "rahul.singh@email.com",
      skills: "HTML, CSS, JavaScript, React",
      address: "789 Pine Road, Bangalore",
      profileImage:
        "https://tse2.mm.bing.net/th/id/OIP.9CX7u5hpmaXkEFl5Nm46pwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Card App</h1>
        <p>Student Cards with Details</p>
      </header>

      <div className="cards-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
            email={student.email}
            skills={student.skills}
            address={student.address}
            profileImage={student.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
