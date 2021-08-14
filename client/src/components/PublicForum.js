import {  useSelector } from "react-redux";
import PostInForum from "./PostInForum";

const PublicForum = () => {
  const isAuthAsTeacher = useSelector(
    (state) => state.teacherReducer.isAuthTeacher
  );
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const isAuthAsStudent = useSelector(
    (state) => state.studentReducer.isAuthStudent
  );
  const student = useSelector((state) => state.studentReducer.student);
  return (
    <div className="PublicForum">
      {isAuthAsTeacher? 
        <>
          <PostInForum firstName={teacher.firstName} lastName={teacher.lastName} posterId={teacher._id} role={teacher.role}/>
        </>: isAuthAsStudent ? <>
          <PostInForum firstName={student.firstName} lastName={student.lastName} posterId={student._id} role={student.role}/>
        </>
       : null}
    </div>
  );
};

export default PublicForum;
