import React from "react";
import styled from "styled-components";
// import CV from "../../assets/Hani Darwisha - CV.pdf";
import CV from "../../assets/Hani Darwisha - CV - IT.pdf";


const ButtonThingy = () => {
  return (
    <StyledWrapper>
      <a href={CV} target="_blank" rel="noopener noreferrer">
        <button className="box">
          <p className="text-button">Download CV</p>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .box {
  position: relative;
  width: 140px;
  height: 55px;
  overflow: hidden;
  border: none;
  background-color: var(--color-primary);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top-left-radius: 20px;
  cursor: pointer;
  border-bottom-right-radius: 20px;
  box-shadow: 0 0 10px rgb(104, 134, 218);
}

.box::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 200px;
  margin-top: -92px;
  background: linear-gradient(#00ccff,#d400d4);
  animation: amm 4s linear infinite;
}

@keyframes amm {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.text-button {
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 1;
}

.box::after {
  content: "";
  position: absolute;
  inset: 4px;
  background-color: var(--color-primary);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
`;

export default ButtonThingy;
