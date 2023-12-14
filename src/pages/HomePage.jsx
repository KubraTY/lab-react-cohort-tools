import { useState } from "react";
import StudentCard from "../components/StudentCard";
import studentsData from "../assets/students.json";
import { useParams } from "react-router-dom";

function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const [students, setStudents] = useState(studentsData);
  const { _id } = useParams();

  const student = students.find((s) => s._id === _id)

  return (
    <div className="border-2 border-rose-500 m-2">
        <h1>Home Page</h1>
        <div className="flex justify-between items-center p-2 font-bold border-b w-full">
          <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
          <span style={{ flexBasis: "20%" }}>Name</span>
          <span style={{ flexBasis: "20%" }}>Program</span>
          <span style={{ flexBasis: "20%" }}>Email</span>
          <span style={{ flexBasis: "20%" }}>Phone</span>
        </div>

      {students &&
        students.map((student) => {
          return (
              <StudentCard student={student} key={student._id} {...student} />
          );
        })}
    </div>
  );
}

export default HomePage;
