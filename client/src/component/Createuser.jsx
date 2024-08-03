import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Createuser = () => {
  let [email, setEmail] = useState("");
  let [date, setDate] = useState("");
  let [amount, setAmount] = useState("");
  let [category, setCate] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let submitData = () => {
    let payload = {
      email: email,
      date: date,
      amount: amount,
      category: category,
      password: password,
    };
    console.log(payload);

    axios
      .post("http://localhost:4000/submit", payload)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch(() => {
        console.log("data not send");
      });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: 'url(../Assets/background11.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>REGISTERATION FORM</h1>
      <table
        style={{
          width: "45%",
          height: "60%",
          border: "2px solid black",
          boxShadow: "0 0 10px black",
        }}
      >
        <tr>
          <td>Email</td>
          <td>
            :{" "}
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Date</td>
          <td>
            :{" "}
            <input
              type="text"
              placeholder="Date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Amount</td>
          <td>
            :{" "}
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Category</td>
          <td>
            :{" "}
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setCate(e.target.value);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>Password</td>
          <td>
            :{" "}
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            Already register please <Link to="/login">Login</Link>
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button onClick={submitData}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Createuser;
