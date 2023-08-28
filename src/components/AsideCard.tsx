import { styled } from "styled-components";
import bgMobile from "../assets/bg-mobile.png";
import bgDesktop from "../assets/bg-desktop.png";
import cardFront from "../assets/card-front.png";
import cardBack from "../assets/card-back.png";
import cardLogo from "../assets/card-logo.svg";

interface Cards {
  fullName: string;
  number: string;
  date: {
    cvc: string;
    mm: string;
    yy: string;
  };
}

const AsideCard = ({ fullName, number, date }: Cards) => {
  return (
    <Aside>
      <main>
        <Back>
          <p>{date.cvc === null || date.cvc === "" ? "000" : date.cvc}</p>
        </Back>
        <Front>
          <img src={cardLogo} alt="card logo" />
          <div>
            <p>
              {number === null || number === ""
                ? "0000 0000 0000 0000"
                : number}
            </p>
            <article>
              <h3>
                {fullName === null || fullName === ""
                  ? "JANE APPLESEED"
                  : fullName}
              </h3>
              <h5>
                {date.mm === null || date.mm === "" ? "00" : date.mm}/
                {date.yy === null || date.yy === "" ? "00" : date.yy}
              </h5>
            </article>
          </div>
        </Front>
      </main>
    </Aside>
  );
};

export default AsideCard;

const Aside = styled.aside`
  display: flex;
  justify-content: center;
  main {
    position: relative;
    max-width: 55rem;
    width: 100%;
  }
  h3,
  h5 {
    font-weight: 500;
    font-size: 1.4rem;
  }
  color: white;
  background: url(${bgMobile}) no-repeat;
  background-size: 100%;
  width: 100%;
  height: 24rem;
  section {
    max-width: 34.05rem;
    width: 100%;
    min-width: 33.3rem;
  }

  @media (min-width: 768px) {
    background: url(${bgDesktop}) no-repeat;
    height: 100vh;
    width: 70%;
    background-size: 60% 100%;
  }

  @media (min-width: 1100px) {
    section {
      max-width: 44.8rem;
    }
    h3,
    h5 {
      font-size: 1.6rem;
    }
  }
`;
const Front = styled.section`
  position: absolute;
  top: 18rem;
  left: 2%;
  background: url(${cardFront}) no-repeat center;
  border-radius: 1rem;
  padding: 2rem;
  img {
    width: 6.3rem;
    margin-bottom: 4.8rem;
  }
  article {
    display: flex;
    justify-content: space-between;
    margin-top: 2.2rem;
  }
  p {
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
  }

  @media (min-width: 768px) {
    top: 14rem;
    left: 6%;
  }

  @media (min-width: 1100px) {
    padding: 3.2rem;
    top: 12rem;
    left: 2%;
    p {
      font-size: 2.4rem;
    }
    img {
      width: 8.4rem;
    }
  }
`;
const Back = styled.section`
  position: absolute;
  top: 7rem;
  right: 2%;
  background: url(${cardBack}) no-repeat;
  background-size: 100%;
  height: 20.85rem;
  p {
    font-size: 2rem;
    position: absolute;
    right: 4.4rem;
    top: 7.9rem;
  }

  @media (min-width: 768px) {
    top: 35rem;
    left: 12%;
  }

  @media (min-width: 1100px) {
    top: 38rem;
    left: 20%;
    height: 24.8rem;
    p {
      top: 10.6rem;
      right: 5.8rem;
      font-size: 2.2rem;
    }
  }
`;
