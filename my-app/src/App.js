import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // empty dependancy က စစချင်းတစ်ခါပဲ run တယ်၊ နောက်ထပ် page reloade/ refresh ဖြစ်သွားမှ ထပ် run တယ်
  // refresh ဖြစ်သွားတိုင်း user loggin ဝင်ထားလားဆိုတာ localStroage ထဲဝင်စစ်တယ် ဝင်ထားတယ်ဆိုရင် manual loggin ဝင်ခဲ့သလိုမျိုး loggin ဝင်နေတဲ့ state ကို ရောက်အောင် ပို့ပေးတယ်
  useEffect(() => {
    console.log("Runned useEffect");
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (userLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
