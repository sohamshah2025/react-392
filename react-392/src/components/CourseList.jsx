const CourseList = ({courses}) => {
    return (
      <div>
        
          {Object.entries(courses).map(([courseKey,course]) => {
            return (
                <p>{course.term} CS {course.number}: {course.title}</p>
            );
          })}
        
      </div>
    );
};
  export default CourseList;