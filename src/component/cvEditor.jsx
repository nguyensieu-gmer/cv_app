import { useState } from "react";
import { EduForm } from "./customForm";

export function Form({
  personalInfor,
  education,
  experience,
  actions,
  eduActions,
}) {
  const [eduIsOpen, setEduForm] = useState(false);
  const { name, email, address, phone } = personalInfor;
  const [currentEduId, setCurrentEduId] = useState(null);

  const currentEdu = education.find((item) => item.id === currentEduId);

  function eduOnChange(e) {
    const { name, value } = e.target;
    const udated = { ...currentEdu, [name]: value };
    eduActions.handleUpdateEdu(udated);
  }

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
          <EduForm
            edu={currentEdu}
            eduOnChange={eduOnChange}
            handleChange={handleOpenEduForm}
            eduActions={eduActions}
          />
        ) : (
          education.map((item) => {
            return <EduItem key={item.id} {...item} />;
          })
        )}
      </ul>
      <button
        onClick={() => {
          const newEdu = {
            name: "",
            from: "",
            to: "",
            address: "",
            major: "",
            visible: true,
            id: crypto.randomUUID(),
          };
          eduActions.handleAddEdu(newEdu);
          setCurrentEduId(newEdu.id);
          handleOpenEduForm(true);
        }}
      >
        add education
      </button>
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
