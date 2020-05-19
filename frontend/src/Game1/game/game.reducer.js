import { merge, dec } from "ramda";
import jwt_decode from "jwt-decode";
import levels from "../config/levels";
import React, { Component, useState, useEffect } from "react";
import { result2 } from "../../components/UserFunctions";
export const NEW_LEVEL = "level/new";
export const HIDDEN_CELL_HIDE = "hidden/hide";
export const HIDDEN_CELL_SHOW = "hidden/show";
export const FIELD_HIDE = "field/hide";
export const FIELD_SHOW = "field/show";
export const RESET_LEVEL = "level/reset";

const START_LEVEL = 0;
let rez = 0;
let email = "";
let full_name = "";
export const initialState = {
  level: START_LEVEL,
  showHidden: true,
  showField: false,
  levelConfig: levels[START_LEVEL],
};
const timesubmit = () => {
  const res = {
    level: rez,
    email: email,
    full_name: full_name,
  };

  result2(res).then((res) => {
    if (res) {
      console.log("testa");
    }
  });
};
export function GameReducer(state, action) {
  const token = localStorage.usertoken;
  const decoded = jwt_decode(token);
  email = decoded.email;
  full_name = decoded.full_name;
  switch (action.type) {
    case NEW_LEVEL:
      rez = rez + 1;
      return merge(state, {
        level: action.level,
        levelConfig: levels[action.level],
      });
    case HIDDEN_CELL_SHOW:
      return merge(state, { showHidden: true });
    case HIDDEN_CELL_HIDE:
      return merge(state, { showHidden: false });
    case FIELD_HIDE:
      return merge(state, { showField: false });
    case FIELD_SHOW:
      return merge(state, { showField: true });
    case RESET_LEVEL:
      timesubmit();
      window.alert("GAME OVER LEVEL REACHED: " + rez);
      rez = 0;
      return merge(initialState, { levelConfig: { ...levels[START_LEVEL] } });
    default:
      return state;
  }
}
