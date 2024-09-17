let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".es", ".uy", ".ve", ".ar", ".co"];
pronoun.forEach((comienzo) => {
  adj.forEach((medio) => {
    noun.forEach((final) => {
      ext.forEach((exten) => {
        let dominios = `${comienzo}${medio}${final}${exten}`;
        console.log(dominios);
      });
    });
  });
});
