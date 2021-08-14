import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteActivity} from "../Redux/actions/publicActions";


const ActivityDelete = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteActivity(deleteID))
    alert(`The Activity "${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default ActivityDelete;
