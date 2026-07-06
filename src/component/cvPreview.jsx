import "../style/cvPreview.css";

export function CV({ personalInfor, education, experience }) {
  let { name, address, email, phone } = personalInfor;
  return (
    <main className="cv">
      <header className="cvHead">
        <h1 className="cvName">{name}</h1>
        <div className="cvContact">
          <div>
            <i class="ri-mail-fill"></i>
            <span>{email}</span>
          </div>
          <div>
            <i class="ri-contacts-book-2-fill"></i>
            <span>{phone}</span>
          </div>
          <div>
            <i class="ri-map-pin-2-fill"></i>
            <span>{address}</span>
          </div>
        </div>
      </header>
      <section className="cvContent">
        {education.length !== 0 && <h3 className="cvTitle">Education</h3>}
        <ul className="cvList">
          {education.map((item) => {
            return item.visible && <EduItem key={item.id} {...item} />;
          })}
        </ul>
        {experience.length !== 0 && <h3 className="cvTitle">Experience</h3>}
        <ul className="cvList">
          {experience.map((item) => {
            return item.visible && <ExpItem key={item.id} {...item} />;
          })}
        </ul>
      </section>
    </main>
  );
}

function EduItem({ name, from, to, address, major }) {
  return (
    <li>
      <p>
        {from} {to.trim() !== "" ? "-" : ""} {to}
      </p>
      <p className="organize">{name}</p>
      <p>{address}</p>
      <p>{major}</p>
    </li>
  );
}

function ExpItem({ name, from, to, positionTitle, location, desciption }) {
  return (
    <li>
      <p>
        {from} {to.trim() !== "" ? "-" : ""} {to}
      </p>
      <p className="organize">{name}</p>
      <p>{location}</p>
      <p>{positionTitle}</p>
      <p className="cvDesciption">{desciption}</p>
    </li>
  );
}
