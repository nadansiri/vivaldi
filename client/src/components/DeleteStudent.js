import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteStudents} from "../Redux/actions/studentActions";


const DeleteStudent = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.studentReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteStudents(deleteID))
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

export default DeleteStudent;
