import { useState } from "react";
import { styled } from "styled-components";
import AsideCard from "./AsideCard";
import Thanks from "./Thanks";
import { UseFormRegister, useForm } from "react-hook-form";

type Values = {
  [x: string]: string;
};

interface Cards {
  handleSubmit: () => void;
  setNumber: (value: string) => void;
  setName: (value: string) => void;
  handleDate: (value: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<Values>;
  errors?: Record<string, any>;
  fullName: string;
  number: string;
  mm: string;
  yy: string;
  cvc: string;
}
const FormComponent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [fullName, setName] = useState("");
  const [number, setNumber] = useState("");
  const [active, setActive] = useState(true);
  const [date, setDate] = useState({ mm: "", yy: "", cvc: "" });

  const onSubmit = () => {
    if (
      number.length === 19 &&
      parseFloat(date.mm) <= 12 &&
      date.yy.length <= 2 &&
      date.cvc.length > 2 &&
      date.cvc.length <= 4
    ) {
      setActive(!active);
    }
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDate(() => ({
      ...date,
      [id]: value,
    }));
  };

  return (
    <>
      <AsideCard fullName={fullName} number={number} date={date} />
      {active ? (
        <Card
          handleSubmit={handleSubmit(onSubmit)}
          setNumber={setNumber}
          setName={setName}
          handleDate={handleDate}
          register={register}
          errors={errors}
          number={number}
          fullName={fullName}
          mm={date.mm}
          yy={date.yy}
          cvc={date.cvc}
        />
      ) : (
        <Thanks />
      )}
    </>
  );
};

export default FormComponent;

interface About {
  about: boolean;
}

const Card = ({
  handleSubmit,
  setNumber,
  setName,
  handleDate,
  register,
  errors,
  number,
  fullName,
  mm,
  yy,
  cvc,
}: Cards) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Cardholder Name</label> <br />
        <Input
          about={
            errors?.fullName?.type === "required" && !fullName.includes(" ")
          }
          type="text"
          placeholder="e.g. Jane Appleseed"
          id="name"
          {...register("fullName", {
            required: true,
          })}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.fullName?.type === "required" && !fullName.includes(" ") ? (
          <p>Enter valid name</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="number">Card Number</label> <br />
        <Input
          maxLength={16}
          about={
            errors?.number?.type === "required" ||
            (number.length !== 19 && number !== "")
          }
          type="text"
          inputMode="numeric"
          pattern="\d*"
          placeholder="e.g. 1234 5678 9123 0000"
          id="number"
          {...register("number", {
            required: true,
          })}
          onChange={(e) => {
            const target = e.target.value;
            if (target.length <= 16) {
              const spacedNumber = target.replace(/(\d{4})(?=\d)/g, "$1 "); // add spaces after 4 digits
              setNumber(spacedNumber);
            }
          }}
        />
        {errors?.number?.type === "required" ||
        (number.length !== 19 && number !== "") ? (
          <p>Enter 16 digits</p>
        ) : null}
      </div>

      <div>
        <div className="date">
          <div className="small">
            <label htmlFor="mm">Exp. Date (MM/YY)</label> <br />
            <div>
              <div className="flex">
                <Input
                  about={errors?.mm || parseFloat(mm) > 12}
                  type="number"
                  id="mm"
                  placeholder="MM"
                  {...register("mm", { required: true })}
                  onChange={handleDate}
                />{" "}
                {errors?.mm || parseFloat(mm) > 12 ? <p>Invalid mm</p> : null}
              </div>
              <div className="flex">
                <Input
                  about={errors?.yy || yy.length >= 3}
                  type="number"
                  placeholder="YY"
                  {...register("yy", { required: true })}
                  onChange={handleDate}
                  id="yy"
                />
                {errors?.yy || yy.length >= 3 ? <p>Invalid yy</p> : null}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="cvc">CVC</label> <br />
            <Input
              about={
                errors?.cvc ||
                ((cvc.length <= 2 || cvc.length > 4) && cvc !== "")
              }
              type="number"
              id="cvc"
              placeholder="e.g 123"
              {...register("cvc", { required: true })}
              onChange={handleDate}
            />
            {errors?.cvc ||
            ((cvc.length <= 2 || cvc.length > 4) && cvc !== "") ? (
              <p>Enter valid CVC</p>
            ) : null}
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  padding: 0 3.2rem;
  .date {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  label {
    font-size: 1.5rem;
    color: hsl(278, 68%, 11%);
    font-weight: 500;
  }
  input {
    width: 100%;
    padding: 1.3rem;
    border-radius: 0.7rem;
    margin: 1.2rem 0;
    outline: 0;
  }
  input::placeholder {
    font-weight: 500;
    font-size: 1.4rem;
    opacity: 0.7;
    letter-spacing: 0.02rem;
  }
  .small input {
    max-width: 16rem;
    width: 50%;
  }
  .small div {
    display: flex;
    gap: 1rem;
  }
  div:last-child {
    width: 100%;
  }
  button {
    width: 100%;
    background-color: hsl(278, 68%, 11%);
    padding: 1.5rem 0;
    color: white;
    border: 0;
    border-radius: 0.6rem;
    font-size: 1.8rem;
    margin-top: 2.6rem;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  p {
    text-transform: none;
    margin: -0.5rem 0 1rem 0;
    color: hsl(0, 100%, 66%);
    font-size: 1.3rem;
    font-weight: 500;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 0 !important;
    input {
      width: 100%;
    }
    p {
      margin-top: -0.5rem;
    }
  }

  @media (min-width: 768px) {
    padding: 0 1.5rem 0 0;
    width: 70%;
    max-width: 50rem;

    input:focus {
      border: 0.1rem solid #854dff;
    }
    button:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;
const Input = styled.input<About>`
  border: ${(props) =>
    props.about
      ? "0.1rem solid hsl(0, 100%, 66%)"
      : "0.1rem solid hsl(279, 6%, 55%)"};
`;
