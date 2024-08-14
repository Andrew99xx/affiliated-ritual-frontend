import "./Delete.css";
import close from "./close.png";
import log from "./log.png";

const DeleteGift = ({ showDelete, closeDelete, onDeleteClick }) => {
  return (
    <div className={showDelete ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="closebtn" onClick={closeDelete}>
          <img src={close} alt="Close" />
        </div>
        <div className="mainc">
          <img src={log} alt="Log" />
          <h1 className="heading">Are you sure?</h1>
          <p className='para'>
            Do you really want to delete this gift? This process cannot be undone.
          </p>
          <div className="btnc">
            <div onClick={closeDelete} className="btn">Cancel</div>
            <div onClick={onDeleteClick} className="btn">Delete</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DeleteGift;
