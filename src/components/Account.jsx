import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import './index.css'

const Account = () => {
  const accountDetails = useSelector((state) => {
    return state;
  });
  console.log(accountDetails);
  return (
    <div>
      <h2>Account Information</h2>
      <table>
        <thead>
          <tr>
            <th>Balance</th>
            <th>Full Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{accountDetails.balance}</td>
            <td>{accountDetails.name}</td>
            <td>{accountDetails.mobile}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Account;
