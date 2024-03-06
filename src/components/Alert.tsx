import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface AlertTypes {
  message: string;
  type?: string;
}

function Alert(props: AlertTypes) {
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  .home {
    background-color: green;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  .error {
    background-color: red;
  }

  @media only screen and (max-width: 1100px) {
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    top: 5%;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
