import React, { useEffect, useState } from "react";


const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if(enteredNameIsValid)
        {
            console.log("Name is valid")
        }
    }, [enteredNameIsValid])

    const nameInputChangeHandler = (event) => {
        if(event.target.value.trim()==="")
        {
            setEnteredNameIsValid(true);
        }
        setEnteredName(event.target.value);
        // setEnteredNameIsValid(true)
    }
    const nameInputBlurHandler=(event)=>
    {
        setEnteredNameTouched(true);
        if(enteredName.trim()==="")
        {
            setEnteredNameIsValid(false);
            return;
        }
    }
    const formSubmitissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if(enteredName.trim()==="")
        {
            setEnteredNameIsValid(false);
            return;
        }
        console.log(enteredName);
        // setEnteredName("");
    }

    const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsValid ? "form-control invalid" : "form-control";
    return (
    <form onSubmit={formSubmitissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
      </div>
      {nameInputIsValid&& <p>Name cannot be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
