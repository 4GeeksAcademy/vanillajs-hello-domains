/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".es", ".uy", ".ve", ".ar", ".co"];
  let dominios = [];

  pronoun.forEach(comienzo => {
    adj.forEach(medio => {
      noun.forEach(final => {
        ext.forEach(exten => {
          dominios.push(`${comienzo}${medio}${final}${exten}`);
        });
      });
    });
  });

  let elementos = dominios.map(dominio => {
    return `<li class="alert alert-warning">` + dominio + `</li>`;
  });

  document.getElementById("listadominios").innerHTML = elementos.join(" ");
};
