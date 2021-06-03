import Sidebar from "../../Sidebar/Sidebar";
import "./Diploma.css";
import Select from "@material-ui/core/Select";
import { useEffect, useState } from "react";
import { sha256 } from "js-sha256";
import axios from "axios";

function Diploma() {
  const [student, setStudent] = useState({});
  const [students, setStudents] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStudents([
      { name: "Valeriu Rusu" },
      { name: "Dorcia Fiona Dinesh" },
      { name: "Raluca Elena Petrovici" },
      { name: "Armand-Angel Somicu" },
      { name: "Roxana Maria Spiridon" },
      { name: "Jakub Duchon" },
      { name: "Andrei Mungiu" },
      { name: "David Franko" },
    ]);
  }, []);

  function createHash() {
    let hash = sha256.create();
    hash.update(student.name);
    hash.update(student.student_number);
    hash.update(student.education);
    return hash.hex();
  }

  function createDiploma() {
    setLoading(true);
    let data = {
      student_name: student.name,
      student_number: student.student_number,
      education: student.education,
      hash: createHash(student),
    };
    let config = {
      method: "post",
      url: "http://127.0.0.1:5000/add-block",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    axios(config)
      .then((result) => {
        console.log(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        if (options[i].value === "Valeriu Rusu") {
          setStudent({
            name: "Valeriu Rusu",
            education: "Software Engineering",
            student_number: "280167",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "Dorcia Fiona Dinesh") {
          setStudent({
            name: "Dorcia Fiona Dinesh",
            education: "Software Engineering",
            student_number: "280145",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "Raluca Elena Petrovici") {
          setStudent({
            name: "Raluca Elena Petrovici",
            education: "Software Engineering",
            student_number: "279998",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "Armand-Angel Somicu") {
          setStudent({
            name: "Armand-Angel Somicu",
            education: "Software Engineering",
            student_number: "281449",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "Roxana Maria Spiridon") {
          setStudent({
            name: "Roxana Maria Spiridon",
            education: "Software Engineering",
            student_number: "280055",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "Jakub Duchon") {
          setStudent({
            name: "Jakub Duchon",
            education: "Software Engineering",
            student_number: "267095",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "Andrei Mungiu") {
          setStudent({
            name: "Andrei Mungiu",
            education: "Software Engineering",
            student_number: "273473",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
        if (options[i].value === "David Franko") {
          setStudent({
            name: "David Franko",
            education: "Software Engineering",
            student_number: "279949",
            issuer: "VIA University College",
          });
          setDisabled(false);
        }
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="diploma">
        {loading === true ? (
          <div>Creating Diploma ...</div>
        ) : (
          <div className="select">
            <Select
              variant="outlined"
              size="small"
              autoWidth
              multiple
              native
              value={students}
              onChange={handleChangeMultiple}
            >
              {students.map((student) => (
                <option key={student.name} value={student.name}>
                  {student.name}
                </option>
              ))}
            </Select>
            <div>
              <div>{student.name}</div>
              <div>{student.student_number}</div>
              <div>{student.education}</div>
              <div>{student.issuer}</div>
              <button disabled={disabled} onClick={() => createDiploma()}>
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diploma;
