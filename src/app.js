/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Get main Div
  let mainDiv = document.getElementById("main");

  //Simbols and Numbers Cards
  let simbols = ["♠", "♣", "♥", "♦"];
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  //Get Simbol with forEach loop
  let getSimbol = arr => {
    let result;
    let numberRandom = parseInt(Math.random() * arr.length);
    arr.forEach((simbol, i) => {
      if (i == numberRandom) {
        result = simbol;
      }
    });
    return result;
  };

  //Get Number card with forEach loop
  let getCard = arr => {
    let result;
    let numberRandom = parseInt(Math.random() * arr.length);
    arr.forEach((card, i) => {
      if (i == numberRandom) {
        result = card;
      }
    });
    return result;
  };

  //Create card with function getSimbol() and getCard()
  let createCard = (simbol, card) => {
    //Create elements
    let createCardLayout = document.createElement("div");
    let createSpanTop = document.createElement("span");
    let createTextCard = document.createElement("p");
    let createSpanBotton = document.createElement("span");

    //Set styles by class wiht classList
    createCardLayout.classList.add(
      "card",
      "d-flex",
      "flex-column",
      "justify-content-between"
    );
    createSpanTop.classList.add(
      "d-flex",
      "flex-row",
      "justify-content-start",
      "simbol"
    );
    createTextCard.classList.add(
      "d-flex",
      "flex-row",
      "justify-content-center",
      "card-number"
    );
    createSpanBotton.classList.add(
      "d-flex",
      "flex-row",
      "justify-content-end",
      "simbol"
    );

    //Validation if the simbol is the red color
    if (simbol == "♥" || simbol == "♦") {
      createTextCard.classList.add("red");
      createSpanBotton.classList.add("red");
      createSpanTop.classList.add("red");
    }

    //Push text inside HTML
    createSpanTop.innerHTML = simbol;
    createTextCard.innerHTML = card;
    createSpanBotton.innerHTML = simbol;

    //Add Elements of the node createCardLayout
    createCardLayout.appendChild(createSpanTop);
    createCardLayout.appendChild(createTextCard);
    createCardLayout.appendChild(createSpanBotton);

    //Return component
    return mainDiv.appendChild(createCardLayout);
  };

  //Called main function
  createCard(getSimbol(simbols), getCard(cards));
};
