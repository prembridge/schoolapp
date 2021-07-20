import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function Newuserlogin(props) {
  let Cmp = props.Cmp;
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("name")) {
      history.push("/Newuserlogin");
    }
  });
  return (
    <div>
      <Cmp />
    </div>
  );
}
export default Newuserlogin;
