//* Copyright Reg. year
let copyright = document.getElementById(`copyright`);
let spanYear = document.createElement("span");
spanYear.innerText = new Date().getFullYear();
copyright.appendChild(spanYear);
