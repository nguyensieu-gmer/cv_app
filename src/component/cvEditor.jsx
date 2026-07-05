import { useState } from "react";

export function Form({ personalInfor, education, experience, actions }) {
  const [eduIsOpen, setEduForm] = useState(false);
  const { name, email, address, phone } = personalInfor;

  function handleOpenEduForm(value) {
    setEduForm(value);
  }

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="userName">Name:</label>
          <input
            onChange={actions.handleChangePersonalInfor}
            name="name"
            type="text"
            value={name}
            id="userName"
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input
            onChange={actions.handleChangePersonalInfor}
            type="email"
            name="email"
            id="userEmail"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="userTel">Phone:</label>
          <input
            onChange={actions.handleChangePersonalInfor}
            type="tel"
            name="phone"
            id="userTel"
            value={phone}
          />
        </div>
        <div>
          <label htmlFor="userLocal">Address</label>
          <input
            onChange={actions.handleChangePersonalInfor}
            name="address"
            type="text"
            value={address}
            id="userLocal"
          />
        </div>
      </form>
      <div>Education</div>
      <ul>
        {eduIsOpen ? (
          <EduForm handleChange={handleOpenEduForm} />
        ) : (
          education.map((item) => {
            return <EduItem key={item.id} {...item} />;
          })
        )}
      </ul>
      <button onClick={() => handleOpenEduForm(true)}>add education</button>
      <div>Experience</div>
      <ul>
        {experience.map((item) => {
          return <ExpItem key={item.id} {...item} />;
        })}
      </ul>
      <button>add experience</button>
    </div>
  );
}

function EduItem({ name }) {
  return <li>{name}</li>;
}

function ExpItem({ name }) {
  return <li>{name}</li>;
}

// {
//       name: "Hanoi University",
//       from: "2024",
//       to: "2025",
//       major: "Software Engineer",
//       address: "Linh Dam, Ha Noi",
//       visible: true,
//       id: crypto.randomUUID(),
//     },

function EduForm({ handleChange }) {
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
