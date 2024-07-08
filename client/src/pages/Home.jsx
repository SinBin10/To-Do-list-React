import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [displaymodal, setDisplaymodal] = useState(false);
  function cancelClick() {
    setDisplaymodal(false);
  }
  return (
    <>
      {displaymodal && <Modal onChange={cancelClick} />}
      <div className="home-page">
        <button onClick={() => setDisplaymodal(true)} className="add-new-btn">
          Add New Task
        </button>
        <Link className="saved-lists-btn" to="/saved_lists">
          <button>Saved Lists</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
