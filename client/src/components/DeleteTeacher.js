import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteTeachers} from "../Redux/actions/teacherActions";


const DeleteTeacher = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.teacherReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTeachers(deleteID))
    alert(`"${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteTeacher;
