import "./Modal.css";

const Modal = ({ onChange }) => {
  return (
    <>
      <div className="add-task" onClick={onChange}>
        <div className="task" onClick={(e) => e.stopPropagation()}>
          <div className="task-heading">
            <label>Enter Heading..</label>
            <input className="heading-input" type="text" />
          </div>
          <div className="task-body">
            <label>Enter Task details..</label>
            <textarea className="body-input"></textarea>
          </div>
          <div className="btn">
            <button>Save</button>
            <button onClick={onChange}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
