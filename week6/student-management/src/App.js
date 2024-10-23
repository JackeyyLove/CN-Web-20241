import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const REST_API_URL = "http://localhost:3005";

const App = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ StudentId: '', Name: '', Roll: '', Birthday: '' });
  const [updateStudent, setUpdateStudent] = useState({ id: '', Name: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(REST_API_URL + '/api/findall');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async () => {
    try {
      await axios.post(REST_API_URL + '/api/save', newStudent);
      fetchStudents();
      setNewStudent({ StudentId: '', Name: '', Roll: '', Birthday: '' });
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleUpdateStudent = async () => {
    try {
      await axios.post(REST_API_URL + '/api/update', updateStudent);
      fetchStudents();
      setUpdateStudent({ id: '', Name: '' });
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.post(REST_API_URL + '/api/delete', { id });
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Management</h1>
      
      <div className="mb-5">
        <h2>Add Student</h2>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Student ID"
            value={newStudent.StudentId}
            onChange={(e) => setNewStudent({ ...newStudent, StudentId: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newStudent.Name}
            onChange={(e) => setNewStudent({ ...newStudent, Name: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Roll"
            value={newStudent.Roll}
            onChange={(e) => setNewStudent({ ...newStudent, Roll: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="date"
            className="form-control"
            placeholder="Birthday"
            value={newStudent.Birthday}
            onChange={(e) => setNewStudent({ ...newStudent, Birthday: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddStudent}>Add Student</button>
      </div>

      <div className="mb-5">
        <h2>Update Student</h2>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Student ID"
            value={updateStudent.id}
            onChange={(e) => setUpdateStudent({ ...updateStudent, id: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={updateStudent.Name}
            onChange={(e) => setUpdateStudent({ ...updateStudent, Name: e.target.value })}
          />
        </div>
        <button className="btn btn-warning" onClick={handleUpdateStudent}>Update Student</button>
      </div>

      <div>
        <h2>Student List</h2>
        <ul className="list-group">
          {students.map((student) => (
            <li key={student._id} className="list-group-item d-flex justify-content-between align-items-center">
              {student.Name} (ID: {student.StudentId}) - Roll: {student.Roll} - Birthday: {student.Birthday}
              <button className="btn btn-danger btn-sm" onClick={() => handleDeleteStudent(student._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
