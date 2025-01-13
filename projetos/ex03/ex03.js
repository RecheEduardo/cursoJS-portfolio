function contar() {
  let inicio = Number(document.getElementById("comeco").value);
  let final = Number(document.getElementById("fim").value);
  let intervalo = Number(document.getElementById("intervalo").value);
  let resultado = document.getElementById("detect");

  if (final == 0 || intervalo <= 0) {
    window.alert("Valores Inválidos");
    return;
  } else {
    resultado.style.padding = "10px";
    resultado.innerHTML = "";

    for (let c = inicio; c <= final; c += intervalo) {
      resultado.innerHTML += `<span class='ctngnumber'>${c} 👉</span>`;
    }
    resultado.innerHTML += `<span class='ctngnumber'>🏁</span>`;
  }
}
