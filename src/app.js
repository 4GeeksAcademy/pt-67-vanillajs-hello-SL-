/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird", "Voldemort"];
let action = ["ate", "peed", "crushed", "broke", "curse"];
let what = ["my homework", "my phone", "the car", "my pen"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "after dinner"
];

window.onload = function ExcuseGenerator() {
  let randomwho = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let randomwhat = what[Math.floor(Math.random() * what.length)];
  let randomwhen = when[Math.floor(Math.random() * when.length)];
  const excuse = `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
  document.getElementById("excuse").innerHTML = excuse;
};
