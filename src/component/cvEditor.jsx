import { useState } from "react";
import { EduForm } from "./customForm";
import { ExpForm } from "./customForm";

export function Form({
  personalInfor,
  education,
  experience,
  actions,
  eduActions,
  expActions,
}) {
  const [eduIsOpen, setEduForm] = useState(false);
  const [expIsOpen, setExpForm] = useState(false);
  const { name, email, address, phone } = personalInfor;
  const [currentEduId, setCurrentEduId] = useState(null);
  const [currentExpId, setCurrentExpId] = useState(null);

  const currentExp = experience.find((item) => item.id === currentExpId);
  const currentEdu = education.find((item) => item.id === currentEduId);

  function expOnChange(e) {
    const { name, value } = e.target;
    const updated = { ...currentExp, [name]: value };
    expActions.handleUpdateExp(updated);
  }

  function eduOnChange(e) {
    const { name, value } = e.target;
    const udated = { ...currentEdu, [name]: value };
    eduActions.handleUpdateEdu(udated);
  }

  function handleOpenEduForm(value) {
    setEduForm(value);
  }

  function handleOpenExpForm(value) {
    setExpForm(value);
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
            return <EduItem key={item.id} eduActions={eduActions} edu={item} />;
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
        {expIsOpen ? (
          <ExpForm
            handleChange={handleOpenExpForm}
            exp={currentExp}
            expOnChange={expOnChange}
            expActions={expActions}
          />
        ) : (
          experience.map((item) => {
            return <ExpItem key={item.id} exp={item} expActions={expActions} />;
          })
        )}
      </ul>
      <button
        onClick={() => {
          const NewExp = {
            name: "",
            from: "",
            to: "",
            positionTitle: "",
            location: "",
            visible: true,
            id: crypto.randomUUID(),
          };
          setCurrentExpId(NewExp.id);
          expActions.handleAddEpx(NewExp);
          handleOpenExpForm(true);
        }}
      >
        add experience
      </button>
    </div>
  );
}

function EduItem({ edu, eduActions }) {
  return (
    <li>
      <p>{edu.name}</p>
      <button onClick={() => eduActions.handleRemoveEdu(edu.id)}>remove</button>
      <button>edit</button>
      <button onClick={() => eduActions.handleChangeEduVisible(edu.id)}>
        hide
      </button>
    </li>
  );
}

function ExpItem({ exp, expActions }) {
  return (
    <li>
      <p>{exp.name}</p>
      <button onClick={() => expActions.handleRemoveExp(exp.id)}>remove</button>
      <button>edit</button>
      <button onClick={() => expActions.handleChangeExpVisible(exp.id)}>
        hide
      </button>
    </li>
  );
}
