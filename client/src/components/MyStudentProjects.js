import { useDispatch, useSelector } from "react-redux";
import PostStudentProjectGetPosts from "./PostStudentProjectGetPosts";

const MyStudentProjects = () => {
  const isAuthAsTeacher = useSelector(
    (state) => state.teacherReducer.isAuthTeacher
  );
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const isAuthAsStudent = useSelector(
    (state) => state.studentReducer.isAuthStudent
  );
  const student = useSelector((state) => state.studentReducer.student);
  return (
    <div className="MyClub">
      {isAuthAsTeacher ? (
        <>
          <PostStudentProjectGetPosts
            firstName={teacher.firstName}
            lastName={teacher.lastName}
            posterId={teacher._id}
            role={teacher.role}
            club={teacher.club}
          />
        </>
      ) : isAuthAsStudent ? (
        <>
          <PostStudentProjectGetPosts
            firstName={student.firstName}
            lastName={student.lastName}
            posterId={student._id}
            role={student.role}
            club={student.club}
          />
        </>
      ) : null}
    </div>
  );
};

export default MyStudentProjects;
