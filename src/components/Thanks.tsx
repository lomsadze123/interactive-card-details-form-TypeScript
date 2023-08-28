import { styled } from "styled-components";
import complete from "../assets/complete.svg";

const Thanks = () => {
  return (
    <Div>
      <img src={complete} alt="complete icon" />
      <h2>thank you!</h2>
      <p>We've added your card details</p>
      <form>
        <button>Continue</button>
      </form>
    </Div>
  );
};

export default Thanks;

const Div = styled.div`
  text-align: center;

  h2,
  p {
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
  h2 {
    font-size: 2.8rem;
    margin-top: 2.8rem;
  }
  p {
    font-size: 1.6rem;
    margin: 1rem 0 3rem 0;
    opacity: 0.8;
    text-transform: none;
  }
  button {
    color: white;
    background-color: hsl(278, 68%, 11%);
    border: 0;
    border-radius: 0.6rem;
    font-size: 1.8rem;
    padding: 1.5rem 0;
    width: 90%;
    cursor: pointer;
  }
  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  img {
    max-width: 8rem;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    min-width: 40rem;
  }
`;
