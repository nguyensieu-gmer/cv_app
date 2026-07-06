import { useState } from "react";
import { Tool } from "./component/toolBar";
import { Form } from "./component/cvEditor";
import { Action } from "./component/cvAction";
import { CV } from "./component/cvPreview";
import { data } from "./sample";

function App() {
  const [personalInfor, setPersonalInfor] = useState(data.personalInfor);
  const [education, setEducation] = useState(data.education);
  const [experience, setExperience] = useState(data.experience);

  function handleAddEpx(newItem) {
    setExperience((items) => {
      return [...items, newItem];
    });
  }

  function handleUpdateExp(updatedItem) {
    setExperience((items) => {
      return items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      );
    });
  }

  function handleRemoveExp(id) {
    setExperience((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateEdu(updatedItem) {
    setEducation((items) =>
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
  }

  function handleAddEdu(newItem) {
    setEducation((items) => [...items, newItem]);
  }

  function handleRemoveEdu(id) {
    setEducation((items) => items.filter((item) => item.id !== id));
  }

  function handleChangePersonalInfor(e) {
    const { name, value } = e.target;
    setPersonalInfor((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <>
      <Tool />
      <div>
        <Action />
        <Form
          personalInfor={personalInfor}
          education={education}
          experience={experience}
          actions={{ handleChangePersonalInfor }}
          eduActions={{ handleAddEdu, handleRemoveEdu, handleUpdateEdu }}
          expActions={{ handleAddEpx, handleRemoveExp, handleUpdateExp }}
        />
      </div>
      <CV
        personalInfor={personalInfor}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default App;
