import "../style/cvAction.css";

export function Action({ clearResume, loadExample }) {
  return (
    <div className="btns">
      <button className="btn" onClick={clearResume}>
        Clear resume
      </button>
      <button className="btn" onClick={loadExample}>
        Load example
      </button>
    </div>
  );
}
