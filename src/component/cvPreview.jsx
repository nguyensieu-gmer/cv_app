export function CV({ personalInfor, education, experience }) {
  let { name, address, email, phone } = personalInfor;
  return (
    <main>
      <header>
        <h1>{name}</h1>
        <div>
          <h2>{address}</h2>
          <h2>{email}</h2>
          <h2>{phone}</h2>
        </div>
        <h3>Education</h3>
        <ul>
          {education.map((item) => {
            return item.visible && <EduItem key={item.id} {...item} />;
          })}
        </ul>
        <h3>Experience</h3>
        <ul>
          {experience.map((item) => {
            return item.visible && <ExpItem key={item.id} {...item} />;
          })}
        </ul>
      </header>
    </main>
  );
}

function EduItem({ name, from, to, address, major }) {
  return (
    <li>
      <p>
        {from} {to.trim() !== "" ? "-" : ""} {to}
      </p>
      <p>{name}</p>
      <p>{address}</p>
      <p>{major}</p>
    </li>
  );
}

function ExpItem({ name, from, to, positionTitle, location }) {
  return (
    <li>
      <p>
        {from} {to.trim() !== "" ? "-" : ""} {to}
      </p>
      <p>{name}</p>
      <p>{location}</p>
      <p>{positionTitle}</p>
    </li>
  );
}
