document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeColorBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
//for (let i = 0; i < 6; i++)

//Cette boucle s’exécute 6 fois, car une couleur hexadécimale contient 6 chiffres ou lettres.
//Math.random() renvoie un nombre entre 0 et 1
//Math.floor() arrondit ce nombre vers le bas pour obtenir un entier entre 0 et 15.
//letters[...]On utilise cet entier comme indice pour choisir une lettre dans la chaîne "0123456789ABCDEF".