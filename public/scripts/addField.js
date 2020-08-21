//Procurar o botao
document
  .querySelector("#add-time")
  //quando clicar o botao
  .addEventListener("click", cloneField);

//executar uma acao
function cloneField() {
  //duplicar campos. que campo?
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true); //boolean

  //limpar os campos
  const fields = newFieldContainer.querySelectorAll("input");
  //limpar cada campo
  fields.forEach(function (field) {
    fields.value = "";
  });

  //clonar paginas. Onde?
  document.querySelector("#schedule-item").appendChild(newFieldContainer);
}
