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
