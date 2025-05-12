import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from '../../styles/AssignmentsStyles';

const Assignments = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
      console.log('API Response:', response.data);
      
      if (response.data?.assignments && Array.isArray(response.data.assignments)) {
        setAssignments(response.data.assignments);
      } else {
        console.warn('Invalid response structure');
        setAssignments([]);
      }
    } catch (error) {
      console.error('Error fetching assignments:', error);
      setAssignments([]);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();

    if (!newAssignment.title.trim() || !newAssignment.description.trim() || !newAssignment.grade.trim() || !newAssignment.deadline.trim()) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/assignments', newAssignment);
      toast.success('Assignment added successfully');

      // ✅ Fetch updated assignments list instead of manually adding the new one
      fetchAssignments();

      setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
    } catch (error) {
      console.error('Error adding assignment:', error);
      toast.error('Error adding assignment');
    }
};


  return (
    <AssignmentsContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                assignment && (
                  <AssignmentItem key={assignment._id}>
                    <strong>{assignment.title || "NA"}: </strong>
                    {assignment.description || "NA"}, {assignment.grade || "NA"}, {assignment.deadline || "NA"}
                  </AssignmentItem>
                )
              ))
            ) : (
              <p>No assignments available</p>
            )}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignments;
