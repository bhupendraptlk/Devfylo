import {React,useState,useEffect} from "react";

const Hackerrank = (props) => {
  const [user, setUser] = useState("");
  const handleProps = () => {
    setUser(props.user);
  };
  useEffect(() => {
    handleProps();
  }, []);
  return(
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default Hackerrank;
