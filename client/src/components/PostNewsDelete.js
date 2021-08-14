import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteSubmittedNews} from "../Redux/actions/publicActions";


const NewsDelete = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteSubmittedNews(deleteID))
    alert(`The News Piece with the ID: "${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default NewsDelete;
