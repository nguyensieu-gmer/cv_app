export function Form({ personalInfor, education, experience }) {
  const { name, email, address, phone } = personalInfor;
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="userName">Name:</label>
          <input name="name" type="text" value={name} id="userName" />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input type="email" name="email" id="userEmail" value={email} />
        </div>
        <div>
          <label htmlFor="userTel">Phone:</label>
          <input type="tel" name="phone" id="userTel" value={phone} />
        </div>
        <div>
          <label htmlFor="userLocal">Address</label>
          <input name="address" type="text" value={address} id="userLocal" />
        </div>
      </form>
      <div>Education</div>
      <ul>
        {education.map((item) => {
          return <EduItem key={item.id} {...item} />;
        })}
      </ul>
      <div>add education</div>
      <div>Experience</div>
      <ul>
        {experience.map((item) => {
          return <ExpItem key={item.id} {...item} />;
        })}
      </ul>
      <div>add experience</div>
    </div>
  );
}

function EduItem({ name }) {
  return <li>{name}</li>;
}

function ExpItem({ name }) {
  return <li>{name}</li>;
}
