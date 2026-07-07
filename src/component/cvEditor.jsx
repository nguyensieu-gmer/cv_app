import { useState } from "react";
import { EduForm } from "./customForm";
import { ExpForm } from "./customForm";
import "../style/cvEditor.css";

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
    <div className="cvEditor">
      <div className="cvTitle edu_editor">Information</div>
      <form className="user_cvEditor">
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
      <div className="cvTitle edu_editor">Education</div>
      <ul className="editor_list">
        {eduIsOpen ? (
          <EduForm
            edu={currentEdu}
            eduOnChange={eduOnChange}
            handleChange={handleOpenEduForm}
            eduActions={eduActions}
          />
        ) : (
          education.map((item) => {
            return (
              <EduItem
                key={item.id}
                setCurrentEduId={setCurrentEduId}
                handleOpenEduForm={handleOpenEduForm}
                eduActions={eduActions}
                edu={item}
              />
            );
          })
        )}
      </ul>
      {!eduIsOpen && (
        <button
          className="btn btn_editor"
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
          <i className="ri-add-circle-fill"></i>
          <p>education</p>
        </button>
      )}
      <div className="cvTitle edu_editor">Experience</div>
      <ul className="editor_list">
        {expIsOpen ? (
          <ExpForm
            handleChange={handleOpenExpForm}
            exp={currentExp}
            expOnChange={expOnChange}
            expActions={expActions}
          />
        ) : (
          experience.map((item) => {
            return (
              <ExpItem
                key={item.id}
                exp={item}
                setCurrentExpId={setCurrentExpId}
                handleOpenExpForm={handleOpenExpForm}
                expActions={expActions}
              />
            );
          })
        )}
      </ul>
      {!expIsOpen && (
        <button
          className="btn btn_editor"
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
            expActions.handleAddExp(NewExp);
            handleOpenExpForm(true);
          }}
        >
          <i className="ri-add-circle-fill"></i>
          <p>experience</p>
        </button>
      )}
    </div>
  );
}

function EduItem({ edu, eduActions, setCurrentEduId, handleOpenEduForm }) {
  return (
    <li className="editor_item">
      <p className="edu_item_name">
        {edu.name.trim() !== "" ? edu.name : "No title"}
      </p>
      <button onClick={() => eduActions.handleRemoveEdu(edu.id)}>
        <i className="ri-delete-bin-fill"></i>
      </button>
      <button
        onClick={() => {
          setCurrentEduId(edu.id);
          handleOpenEduForm(true);
        }}
      >
        <i className="ri-pencil-fill"></i>
      </button>
      <button onClick={() => eduActions.handleChangeEduVisible(edu.id)}>
        {!edu.visible ? (
          <i className="ri-eye-fill"></i>
        ) : (
          <i className="ri-eye-off-fill"></i>
        )}
      </button>
    </li>
  );
}

function ExpItem({ exp, expActions, setCurrentExpId, handleOpenExpForm }) {
  return (
    <li className="editor_item">
      <p className="edu_item_name">
        {exp.name.trim() !== "" ? exp.name : "No title"}
      </p>
      <button onClick={() => expActions.handleRemoveExp(exp.id)}>
        <i className="ri-delete-bin-fill"></i>
      </button>
      <button
        onClick={() => {
          setCurrentExpId(exp.id);
          handleOpenExpForm(true);
        }}
      >
        <i className="ri-pencil-fill"></i>
      </button>
      <button onClick={() => expActions.handleChangeExpVisible(exp.id)}>
        {!exp.visible ? (
          <i className="ri-eye-fill"></i>
        ) : (
          <i className="ri-eye-off-fill"></i>
        )}
      </button>
    </li>
  );
}
