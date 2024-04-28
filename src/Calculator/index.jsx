/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";

const Calculator = (props) => {
  const { getSimpleInterest } = props;
  
  const [principal, setPrincipal] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");

  const updatePrincipal = (e) => setPrincipal(e.target.value);
  const updateTime = (e) => setTime(e.target.value);
  const updateInterset = (e) => setInterest(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    getSimpleInterest({ principal, time, interest });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <h1>Simple Interest Calculator</h1>
      <input
        name="principal"
        type="number"
        value={principal}
        onChange={updatePrincipal}
        placeholder="Principal"
      />
      <input
        name="rate"
        type="number"
        value={interest}
        onChange={updateInterset}
        placeholder="Rate (%)"
      />
      <input
        name="time"
        type="number"
        value={time}
        onChange={updateTime}
        placeholder="Time (years)"
      />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Calculator;
