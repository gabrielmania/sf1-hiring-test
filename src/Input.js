import React from "react";

export default function Input(props) {
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    // props.update will update the details in the Form components
    props.update(props.inputName, inputText);
  }, [inputText]);

  function handleChange(evt) {
    setInputText(evt.target.value);
  }

  return (
    <div>
      <label>
        {props.label}
        <input
          onChange={handleChange}
          name={props.inputName}
          value={inputText}
          // Will disable the input when the form is submitted
          disabled={props.submitted}
          type={props.type}
          required
        />
      </label>
    </div>
  );
}
