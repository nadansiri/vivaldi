import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteForm} from "../Redux/actions/publicActions";


const DeleteForm = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteForm(deleteID))
    alert(`The Form "${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteForm;
