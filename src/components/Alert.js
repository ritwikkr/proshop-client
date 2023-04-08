import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Alert(props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  const { type, message } = props;

  return (
    <Wrapper>
      <div className={`${type} home `} role="alert">
        {message}
      </div>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  width: 400px;
  height: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  .home {
    background-color: rgb(202, 229, 245);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error {
    background-color: red;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
