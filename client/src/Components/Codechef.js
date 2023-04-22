import {React,useState,useEffect} from "react";

const Codechef = (props) => {
  const [user, setUser] = useState("");
  const handleProps = () => {
    setUser(props.user);
  };
  useEffect(() => {
    handleProps();
  }, []);
  return(
    <>
      <h1>{user}</h1>
    </>
  );
};

export default Codechef;
