// Defina uma lista de palavras
var words = ["gato", "cachorro", "elefante", "leão", "girafa"];

// Escolha aleatoriamente uma palavra da lista
var chosenWord = words[Math.floor(Math.random() * words.length)];

// Crie um array vazio para guardar as letras adivinhadas
var guessedLetters = [];

// Função para verificar se a palavra foi completada
function checkCompletion() {
  var hiddenWord = "";
  for (var i = 0; i < chosenWord.length; i++) {
    if (guessedLetters.includes(chosenWord[i])) {
      hiddenWord += chosenWord[i];
    } else {
      hiddenWord += "_";
    }
  }
  document.getElementById("word").innerHTML = hiddenWord;

  if (!hiddenWord.includes("_")) {
    openModal();
    resetGame();
  }
}

// Função para abrir o modal
function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Função para redefinir o jogo
function resetGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  document.getElementById("guess").value = "";
  checkCompletion();
}

// Listener para o botão de fechar do modal
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", closeModal);

// Listener para a tecla "Enter" pressionada
document.getElementById("guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var guess = document.getElementById("guess").value.toLowerCase();

    if (guess.length === 1) {
      if (guessedLetters.includes(guess)) {
        document.getElementById("message").innerHTML =
          "Essa letra já foi adivinhada. Tente outra.";
      } else {
        guessedLetters.push(guess);
        checkCompletion();
        document.getElementById("guess").value = "";
        document.getElementById("message").innerHTML = "";
      }
    } else if (guess.length === chosenWord.length) {
      if (guess === chosenWord) {
        guessedLetters = guess.split("");
        checkCompletion();
      } else {
        document.getElementById("message").innerHTML =
          "Palavra incorreta. Tente novamente.";
      }
    } else {
      document.getElementById("message").innerHTML =
        "Insira uma única letra ou a palavra completa.";
    }
  }
});

// Listener para o botão de enviar
document.getElementById("submit").addEventListener("click", function () {
  var guess = document.getElementById("guess").value.toLowerCase();

  if (guess.length === 1) {
    if (guessedLetters.includes(guess)) {
      document.getElementById("message").innerHTML =
        "Essa letra já foi adivinhada. Tente outra.";
    } else {
      guessedLetters.push(guess);
      checkCompletion();
      document.getElementById("guess").value = "";
      document.getElementById("message").innerHTML = "";
    }
  } else if (guess.length === chosenWord.length) {
    if (guess === chosenWord) {
      guessedLetters = guess.split("");
      checkCompletion();
    } else {
      document.getElementById("message").innerHTML =
        "Palavra incorreta. Tente novamente.";
    }
  } else {
    document.getElementById("message").innerHTML =
      "Insira uma única letra ou a palavra completa.";
  }
});

// Inicialize a palavra na tela
checkCompletion();
