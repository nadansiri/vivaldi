import { useDispatch, useSelector } from "react-redux";
import PostActivity from "./PostActivity";

const MyClub = () => {
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
        <>{teacher.role==="ADMIN"?<h1>All Posts In Club Forums</h1>:<h1>{teacher.club} Forum</h1>}
          
          <PostActivity
            firstName={teacher.firstName}
            lastName={teacher.lastName}
            posterId={teacher._id}
            role={teacher.role}
            club={teacher.club}
          />
        </>
      ) : isAuthAsStudent ? (
        <>
          <h1>{student.club} Forum</h1>
          <PostActivity
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

export default MyClub;
