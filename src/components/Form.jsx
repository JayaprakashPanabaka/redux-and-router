import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../bankStore/store";

const Form = () => {
  const dispatcher = useDispatch();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState(null);

  // console.log(ACTIONS);

  const handleDeposit = () => {
    dispatcher({ type: ACTIONS.DEPOSIT, payload: amount });
    setAmount("");
  };

  const handleWithdraw = () => {
    dispatcher({ type: ACTIONS.WITHDRAW, payload: amount });
  };

  const handleName = () => {
    dispatcher({ type: ACTIONS.NAME, payload: name });
    setName("");
  };

  const handleContact = () => {
    dispatcher({ type: ACTIONS.MOBILE, payload: contact });
    setContact("");
  };

  return (
    <div>
      <h2>Enter Details</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter Amount"
        />
        <button onClick={handleDeposit}>
            Deposit
        </button>
        <button onClick={handleWithdraw}>
            Withdraw
        </button>
      </div>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
        />
        <button onClick={handleName}>
            Update Name
        </button>
      </div>

      <div>
        <input
          type="number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Contact Number"
        />
        <button onClick={handleContact}>
            Update Contact
        </button>
      </div>
    </div>
  );
};

export default Form;
