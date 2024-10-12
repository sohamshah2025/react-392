import Course from './Course'; // Importing the Course component
import './CourseList.css'

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {Object.entries(courses).map(([courseKey, course]) => (
        <Course key={courseKey} course={course} />
      ))}
    </div>
  );
};

export default CourseList;


