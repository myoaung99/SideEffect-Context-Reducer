import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // settimeout တွေက key down တစ်ခုချင်းစီအတွက် stack ဖြစ်သွားတယ်။ အဲ့တော့ အများကြီး ပြုံစစ်သလိုဖြစ်နေတယ်

  // ဘာလို့ နောက်ဆုံး setTimeout ပဲ ကျန်တာလဲဆိုတော့ useEffect ကို execute လုပ်တဲ့ order ကြောင့်
  // အရင်ဆုံး load လုပ်တဲ့အခါ react က ပထမဆုံးအကြိမ် useEffect ထဲက function ကို run လိုက်တယ်
  // useEffect ရဲ့ depencies ပြောင်းသွားလို့မဟုတ်ပဲ react က run လိုက်တာဖြစ်လို့ return မပြန်စေဘူး
  // depencies ချိန်းမှ useEffect ကြီး တစ်ခုလုံးကို run စေတာကြောင့် အောက်က clean up function ကို run စေတယ်
  // အဲ့တော့ user key stroke တချက်လုပ်လိုက်ရင် react run ထားခဲ့တဲ့ setTimeout ကို clear လုပ်တယ်
  // ခုချက်ချင်း user ရိုက်ခဲ့တဲ့ setTimeout ကကျန်နေခဲ့တယ်။ ဒီနည်းနဲ့ နောက်ဆုံး user ရိုက်ပြီးတော့ time out မှ side effect ဖြစ်စေတဲ့ code ကို run စေတယ်

  // component mount ဖြစ်ရင် useEffect function ကို ပထမဆုံး run တယ်
  // depencies ချိန်းလို့ နောက်တခါထပ် run ဖြစ်ရင် clean up function return ကို အရင် run တယ်
  useEffect(() => {
    const idendifier = setTimeout(() => {
      console.log("Checking Form Validaty.");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    // This is CLEAN UP function
    //
    return () => {
      clearTimeout(idendifier);
      console.log("clean up");
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
