import React from "react";
import { supabase } from "./supabaseClient";
import { useState } from "react";

function Login() {
  let [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    supabase.auth.signIn({ email: email }).then(function () {
      console.log("Log the user in using Supabase...");
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="email" value={email} onChange={(e) => onChange(e)} />
      <button>Login</button>
    </form>
  );
}

export default Login;
