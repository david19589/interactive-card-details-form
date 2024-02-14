/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import Styles from "./Body.module.css";
import doneImg from "/src/assets/icon-complete.svg";

const Body = (props) => {
  const {
    name,
    number,
    month,
    year,
    cvc,
    setName,
    setNumber,
    setMonth,
    setYear,
    setCvc,
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [isNameValid, setIsNameValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isMonthValid, setIsMonthValid] = useState(false);
  const [isYearValid, setIsYearValid] = useState(false);
  const [isCvcValid, setIsCvcValid] = useState(false);

  const onSubmit = (data) => console.log(data);

  const clearErrorMessage = (fieldName) => {
    setError(fieldName, { message: "" });
  };

  function handleFormSubmit() {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const numberRegex = /^[0-9]+$/;
    let isNameValid = name.match(nameRegex);
    let isNumberValid = number.length === 16 && number.match(numberRegex);
    let isMonthValid = month.length === 2 && month.match(numberRegex);
    let isYearValid = year.length === 2 && year.match(numberRegex);
    let isCvcValid = cvc.length === 3 && cvc.match(numberRegex);
    if (
      isNameValid &&
      isNumberValid &&
      isMonthValid &&
      isYearValid &&
      isCvcValid
    ) {
      displayNone();
    }
    setIsNameValid(!isNameValid);
    setIsNumberValid(!isNumberValid);
    setIsMonthValid(!isMonthValid);
    setIsYearValid(!isYearValid);
    setIsCvcValid(!isCvcValid);
  }

  const displayNone = () => {
    displayRef.current.style.display = "none";
    displayRef2.current.style.display = "flex";
  };
  const displayRef = useRef(null);
  const displayRef2 = useRef(null);

  return (
    <FormProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div ref={displayRef} className={Styles.firstBodyDiv}>
          <div className={Styles.name_InputDiv}>
            <h1 className={Styles.cardHolderName}>Cardholder Name</h1>
            <input
              {...register("name", {
                required: "Can't be blank",
                pattern: {
                  value: /\b([a-z]+)\b/gi,
                  message: "Invalid type",
                },
              })}
              className={
                isNameValid ? Styles.changedNameInput : Styles.nameInput
              }
              onChange={(e) => {
                clearErrorMessage("name");
                setName(e.target.value);
                setIsNameValid(false);
              }}
              type="text"
              placeholder="e.g. Jane Appleseed"
              name="name"
              maxLength={30}
            />
            <h1 className={Styles.error1}>{errors.name?.message}</h1>
          </div>
          <div className={Styles.number_InputDiv}>
            <h1 className={Styles.cardNumber}>Card Number</h1>
            <input
              {...register("number", {
                required: "Can't be blank",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid type",
                },
                minLength: {
                  value: 16,
                  message: "Minimum 16 numbers required",
                },
              })}
              className={
                isNumberValid
                  ? Styles.changedCardNumberInput
                  : Styles.cardNumberInput
              }
              onChange={(e) => {
                clearErrorMessage("number");
                setNumber(e.target.value);
                setIsNumberValid(false);
              }}
              type="tel"
              placeholder="e.g. 1234 5678 9123 0000"
              name="number"
              maxLength={16}
            />
            <h1 className={Styles.error2}>{errors.number?.message}</h1>
          </div>
          <div className={Styles.date_CVC}>
            <div className={Styles.input3_4}>
              <h1 className={Styles.date}>Exp. Date (MM/YY)</h1>
              <div className={Styles.mm_yyDiv}>
                <input
                  {...register("mm", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid type",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum 2 numbers required",
                    },
                  })}
                  className={
                    isMonthValid ? Styles.changedMmInput : Styles.mmInput
                  }
                  onChange={(e) => {
                    clearErrorMessage("mm");
                    setMonth(e.target.value);
                    setIsMonthValid(false);
                  }}
                  type="tel"
                  placeholder="MM"
                  name="mm"
                  maxLength={2}
                />
                <h1 className={Styles.error3}>{errors.mm?.message}</h1>
                <input
                  {...register("yy", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid type",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum 2 numbers required",
                    },
                  })}
                  className={
                    isYearValid ? Styles.changedYyInput : Styles.yyInput
                  }
                  onChange={(e) => {
                    clearErrorMessage("yy");
                    setYear(e.target.value);
                    setIsYearValid(false);
                  }}
                  type="tel"
                  placeholder="YY"
                  id="yy"
                  maxLength={2}
                />
                <h1 className={Styles.error4}>{errors.yy?.message}</h1>
              </div>
            </div>
            <div className={Styles.input5}>
              <h1 className={Styles.cvc}>CVC</h1>
              <input
                {...register("cvc", {
                  required: "Can't be blank",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Invalid type",
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum 3 numbers required",
                  },
                })}
                className={
                  isCvcValid ? Styles.changedCvcInput : Styles.cvcInput
                }
                onChange={(e) => {
                  clearErrorMessage("cvc");
                  setCvc(e.target.value);
                  setIsCvcValid(false);
                }}
                type="tel"
                placeholder="e.g. 123"
                name="cvc"
                maxLength={3}
              />
              <h1 className={Styles.error5}>{errors.cvc?.message}</h1>
            </div>
          </div>
          <button
            onClick={() => {
              handleFormSubmit();
            }}
            className={Styles.button}
            type="submit"
          >
            Confirm
          </button>
        </div>
        <div ref={displayRef2} className={Styles.secondBodyDiv}>
          <img className={Styles.doneImg} src={doneImg} alt="done" />
          <h1 className={Styles.gratitude}>THANK YOU!</h1>
          <span className={Styles.cardAdded}>
            We’ve added your card details
          </span>
          <button onClick={props.resetForm} className={Styles.secondButton}>
            Continue
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Body;
