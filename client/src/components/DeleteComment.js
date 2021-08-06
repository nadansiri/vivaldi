import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteComments} from "../Redux/actions/publicActions";


const DeleteComment = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.publicReducer.errors);
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComments(deleteID))
    alert(`The comment "${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      {
        //Teachers List //Accessed only by admin
          //Render if Admin
          teacher.role === "ADMIN" ? (
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>):null}
    </div>
  );
};

export default DeleteComment;
