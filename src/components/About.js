import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <center>
        <h1>This is the About section page</h1>
      </center>
      <UserClass name={"Mohan Ravi Teja"} age={23} />
    </div>
  );
};

export default About;
