import React from 'react';
import './Placement.css';

const Placement = () => {
  const students = [
    {
      image: 'images/gnaneswri.jpeg',
      name: 'Gnaneswari',
      company: 'FedServ',
      salary: '₹19,000',
      college: 'XYZ University',
      batch: '9215',
    },
    // Add 14 more student objects
    {
      image: 'images/A.Kalpana.jpeg',
      name: 'A.Kalpana',
      company: 'Tech Mahindra',
      salary: '₹13,916',
      college: 'ABC Institute',
      batch: '2022',
    },
    {
      image: 'images/Sowjanya.jpeg',
      name: 'Sowjanya',
      company: 'Innovate Ltd.',
      salary: '₹5,50,000',
      college: 'ABC Institute',
      batch: '2022',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Jane Smith',
      company: 'Innovate Ltd.',
      salary: '₹5,50,000',
      college: 'ABC Institute',
      batch: '2022',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Jane Smith',
      company: 'Innovate Ltd.',
      salary: '₹5,50,000',
      college: 'ABC Institute',
      batch: '2022',
    },
    // Continue adding other student objects...
  ];

  return (
    <>
      <h1 className="placement-top-heading">
        <span className="placement-top-heading-span">( 1800 + )</span> PLACED STUDENTS
      </h1>
      <div className="placement-grid">
        {students.map((student, index) => (
          <div className="placement-card" key={index}>
            <img src={student.image} alt={student.name} className="placement-card-image" />
            <div className="placement-card-content">
              <h2 className="placement-card-name">{student.name}</h2>
              <p className="placement-card-company">Company: {student.company}</p>
              <p className="placement-card-salary">Salary: {student.salary}</p>
              <p className="placement-card-college">College: {student.college}</p>
              <p className="placement-card-batch">Batch: {student.batch}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Placement;
