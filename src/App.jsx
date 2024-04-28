import { useState } from "react";
import Calculator from "./Calculator";

import "./App.css";

const App = () => {
  const [response, setResponse] = useState({
    isLoading: true,
    simpleInterest: "",
    error: "",
  });

  const onSuccess = (simpleInterest) =>
    setResponse((prev) => ({
      ...prev,
      simpleInterest: simpleInterest,
      isLoading: false,
    }));

  const onFailure = (error) =>
    setResponse((prev) => ({ ...prev, error: error, isLoading: false }));

  const getSimpleInterest = async (formDetails) => {
    setResponse((prev) => ({
      ...prev,
      isLoading: true,
      simpleInterest: "",
      error: "",
    }));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    };

    const response = await fetch(
      "https://sic-backend-42en.onrender.com/calculate",
      options
    );

    const data = await response.json();

    if (response.ok) onSuccess(data.simpleInterest);
    else onFailure(data.error);
  };

  return (
    <div>
      <Calculator getSimpleInterest={getSimpleInterest} />

      <div
        className={`result-conatiner ${
          response.isLoading ? "" : "show-result"
        }`}
      >
        {response.error && <p className="error">{response.error}</p>}
        {response.simpleInterest !== "" && (
          <p className="result">
            &#8377;{response.simpleInterest}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
