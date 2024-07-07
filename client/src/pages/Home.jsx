import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <button className="add-new-btn">Add New Task</button>
        <Link className="saved-lists-btn" to="/saved_lists">
          <button>Saved Lists</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
