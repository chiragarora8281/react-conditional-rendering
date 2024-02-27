/* eslint-disable react/prop-types */
const User = ({ id, name, salary, company, age, role }) => {
  switch (role) {
    case "admin":
      return (
        <section style={{ background: "#333", color: "#fff", padding: "10px"}}>
          <h1>ADMIN PANEL</h1>
          <h2>Name: {name} </h2>
          <p>Age: {age} </p>
          <p>Role: {role}</p>
          <p>Salary: {salary}</p>
          <p>Company: {company}</p>
        </section>
      );
    case "user": 
      return (
        <section style={{ background: "#fff", color: "#111", padding: "10px" }}>
          <h1>USER PANEL</h1>
          <h2>Name: {name} </h2>
          <p>Age: {age} </p>
          <p>Role: {role}</p>
          <p>Salary: {salary}</p>
          <p>Company: {company}</p>
        </section>
      );
    default:
      return (
        <section style={{ background: "fff", color: "blue", padding: "10px" }}>
          <h1>Default panel</h1>
          NO user found
        </section>
      );
  }
};

export default User;
