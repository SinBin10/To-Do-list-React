import "./Modal.css";

const Modal = () => {
  return (
    <div className="add-task">
      <div className="task">
        <div className="task-heading">
          <label>Enter Heading..</label>
          <input className="heading-input" type="text" />
        </div>
        <div className="task-body">
          <label>Enter Task details..</label>
          <textarea className="body-input"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Modal;
