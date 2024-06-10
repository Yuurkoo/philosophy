import Title from "../../component/title";
import "./index.css";
import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../component/toggle/Toggle";

export default function Mode() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className="settings">
      <Title>Змінити тему</Title>

      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        ></Toggle>
        <h1 className="title">Hello world!</h1>
        <div className="box">
          <h2>This is a box</h2>
        </div>
      </div>
    </div>
  );
}
