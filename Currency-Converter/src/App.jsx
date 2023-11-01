import { useState } from "react";
import { InputBox } from "./components";
import useCurrency from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const CurrencyInfo = useCurrency(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };
  return (
    <>
      <h1 className="text-3xl bg-orange-500">Currency APP</h1>
    </>
  );
}

export default App;
