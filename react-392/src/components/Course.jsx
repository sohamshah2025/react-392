import './Course.css'; 

const Course = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.term} CS {course.number}</h3>
      <p>{course.title}</p>
      <p>{course.meets}</p>
    </div>
  );
};

export default Course;