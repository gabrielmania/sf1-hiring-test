import React from "react";
import Input from "./Input";

export default function Form() {
  const [details, setDetails] = React.useState({
    username: "",
    fullName: "",
    age: null,
  });
  const [isSubmitted, setSubmitted] = React.useState(false);

  // updateDetails will be passed as a prop to the Input component
  function updateDetails(detail, value) {
    setDetails((prevValue) => {
      return { ...prevValue, [detail]: value };
    });
  }

  function handleClick(evt) {
    evt.preventDefault();
    setSubmitted(true);
  }

  function newForm() {
    setSubmitted(false);
  }

  return (
    <div>
      <h1>4. Submit a form</h1>
      <form onSubmit={handleClick}>
        {/* Render input components based on the required item to be rendered */}
        <Input
          label={"Username:"}
          inputName={"username"}
          update={updateDetails}
          submitted={isSubmitted}
          type={"text"}
        />
        <br />
        <Input
          label={"Full Name:"}
          inputName={"fullName"}
          update={updateDetails}
          submitted={isSubmitted}
          type={"text"}
        />
        <br />
        <Input
          label={"Age:"}
          inputName={"age"}
          update={updateDetails}
          submitted={isSubmitted}
          type={"number"}
        />
        <br />
        <button type="submit">Submit</button>

        {/* div will be rendered only when the form is submitted */}
        {isSubmitted && (
          <div>
            <h4>Request Sent to DB with below request data</h4>
            <ul>
              <li>Username: {details.username} </li>
              <li>Full Name: {details.fullName}</li>
              <li>Age: {details.age}</li>
            </ul>
            <button onClick={newForm}>Fillup Another Form</button>
          </div>
        )}
      </form>
    </div>
  );
}
