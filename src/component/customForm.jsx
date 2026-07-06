export function EduForm({ handleChange, edu, eduOnChange, eduActions }) {
  return (
    <form action="">
      <div>
        <label htmlFor="eduFrom">From: </label>
        <input
          onChange={eduOnChange}
          value={edu.from}
          type="text"
          name="from"
          id="eduFrom"
        />
      </div>
      <div>
        <label htmlFor="eduTo">To: </label>
        <input
          onChange={eduOnChange}
          value={edu.to}
          type="text"
          name="to"
          id="eduTo"
        />
      </div>
      <div>
        <label htmlFor="eduName">Name: </label>
        <input
          onChange={eduOnChange}
          value={edu.name}
          type="text"
          name="name"
          id="eduName"
        />
      </div>
      <div>
        <label htmlFor="eduAddress">Location: </label>
        <input
          onChange={eduOnChange}
          value={edu.address}
          type="text"
          name="address"
          id="eduAddress"
        />
      </div>
      <div>
        <label htmlFor="eduMajor">Major: </label>
        <input
          onChange={eduOnChange}
          value={edu.major}
          type="text"
          name="major"
          id="eduMajor"
        />
      </div>
      <button
        onClick={() => {
          handleChange(false);
        }}
        type="button"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          eduActions.handleRemoveEdu(edu.id);
          handleChange(false);
        }}
      >
        remove
      </button>
      <button onClick={() => handleChange(false)} type="submit">
        Add
      </button>
    </form>
  );
}

export function ExpForm({ handleChange, exp, expOnChange, expActions }) {
  return (
    <form action="">
      <div>
        <label htmlFor="eduFrom">From: </label>
        <input
          onChange={expOnChange}
          value={exp.from}
          type="text"
          name="from"
          id="eduFrom"
        />
      </div>
      <div>
        <label htmlFor="eduTo">To: </label>
        <input
          onChange={expOnChange}
          value={exp.to}
          type="text"
          name="to"
          id="eduTo"
        />
      </div>
      <div>
        <label htmlFor="eduName">Name: </label>
        <input
          onChange={expOnChange}
          value={exp.name}
          type="text"
          name="name"
          id="eduName"
        />
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <input
          onChange={expOnChange}
          value={exp.location}
          type="text"
          name="location"
          id="location"
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position: </label>
        <input
          onChange={expOnChange}
          value={exp.positionTitle}
          type="text"
          name="positionTitle"
          id="positionTitle"
        />
      </div>
      <div>
        <label htmlFor="desciption">desciption</label>
        <textarea
          value={exp.desciption}
          onChange={expOnChange}
          name="desciption"
          id="desciption"
        ></textarea>
      </div>
      <button
        onClick={() => {
          handleChange(false);
        }}
        type="button"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          expActions.handleRemoveExp(exp.id);
          handleChange(false);
        }}
      >
        remove
      </button>
      <button onClick={() => handleChange(false)} type="submit">
        Add
      </button>
    </form>
  );
}
