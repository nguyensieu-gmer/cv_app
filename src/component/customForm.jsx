export function EduForm({ handleChange }) {
  return (
    <form action="">
      <div>
        <label htmlFor="eduFrom">From: </label>
        <input type="text" name="from" id="eduFrom" />
      </div>
      <div>
        <label htmlFor="eduTo">To: </label>
        <input type="text" name="to" id="eduTo" />
      </div>
      <div>
        <label htmlFor="eduName">Name: </label>
        <input type="text" name="name" id="eduName" />
      </div>
      <div>
        <label htmlFor="eduAddress">Location: </label>
        <input type="text" name="address" id="eduAddress" />
      </div>
      <div>
        <label htmlFor="eduMajor">Major: </label>
        <input type="text" name="major" id="eduMajor" />
      </div>
      <button type="reset">Reset</button>
      <button onClick={() => handleChange(false)} type="button">
        Cancel
      </button>
      <button type="submit">Add</button>
    </form>
  );
}
