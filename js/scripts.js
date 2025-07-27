const questions = [
    // Perguntas do quiz
    {
        number: 1,
        title: "Qual é a cor favorita dela?",
        firstOption: {
            letter: "a",
            response: "Azul",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Roxo",
            correct: true,
        },
        thirdOption: {
            letter: "c",
            response: "Rosa",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Preto",
            correct: "",
        },
    },
    {
        number: 2,
        title: "Qual é a comida favorita dela?",
        firstOption: {
            letter: "a",
            response: "Estrogonofe",
            correct: true,
        },
        secondOption: {
            letter: "b",
            response: "Jeijão",
            correct: "",
        },
        thirdOption: {
            letter: "c",
            response: "Batata frita",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Carne acebolada",
            correct: "",
        },
    },
    {
        number: 3,
        title: "Qual é a data de nascimento dela?",
        firstOption: {
            letter: "a",
            response: "04/07/2005",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "14/03/2007",
            correct: "",
        },
        thirdOption: {
            letter: "c",
            response: "07/06/2006",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "08/07/2006",
            correct: true,
        },
    },
    {
        number: 4,
        title: "Qual o nome completo dela?",
        firstOption: {
            letter: "a",
            response: "Lucicleide Fernandes",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Lucicleide Fernandes da Silva",
            correct: true,
        },
        thirdOption: {
            letter: "c",
            response: "Lucicleide da Silva Fernandes",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Lucivânia Fernandes Silva",
            correct: "",
        },
    },
    {
        number: 5,
        title: "Qual é o hobbie preferido dela?",
        firstOption: {
            letter: "a",
            response: "Cantar",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Escrever",
            correct: "",
        },
        thirdOption: {
            letter: "c",
            response: "Desenhar",
            correct: true,
        },
        fourthOption: {
            letter: "d",
            response: "Dançar",
            correct: "",
        },
    },
    {
        number: 6,
        title: "Qual é a palavra mais falada de seu vocabulário?",
        firstOption: {
            letter: "a",
            response: "Te amo",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Que odio",
            correct: true,
        },
        thirdOption: {
            letter: "c",
            response: "Nojanta",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Quero morrer",
            correct: "",
        },
    },
    {
        number: 7,
        title: "Quem ela mais fala mal?",
        firstOption: {
            letter: "a",
            response: "Se mesma",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Das amigas",
            correct: "",
        },
        thirdOption: {
            letter: "c",
            response: "Do namorado",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Pessoas desconhecidas",
            correct: true,
        },
    },
    {
        number: 8,
        title: "Qual o nome da sua mãe?",
        firstOption: {
            letter: "a",
            response: "Alicia",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Maria",
            correct: "",
        },
        thirdOption: {
            letter: "c",
            response: "Sandra",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Alexandra",
            correct: true,
        },
    },
    {
        number: 9,
        title: "Qual é a idade dela?",
        firstOption: {
            letter: "a",
            response: "14",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "16",
            correct: "",
        },
        thirdOption: {
            letter: "c",
            response: "19",
            correct: true,
        },
        fourthOption: {
            letter: "d",
            response: "25",
            correct: "",
        },
    },
    {
        number: 10,
        title: "Qual o nome do seu namorado?",
        firstOption: {
            letter: "a",
            response: "Roberto",
            correct: "",
        },
        secondOption: {
            letter: "b",
            response: "Lucas",
            correct: true,
        },
        thirdOption: {
            letter: "c",
            response: "Josivaldo",
            correct: "",
        },
        fourthOption: {
            letter: "d",
            response: "Gabriel",
            correct: "",
        },
    },
];

// Elementos do DOM e variáveis para controlação de aplicação
const questionTitle = document.querySelector("#question-title");
const questionOptions = document.querySelector("#question-options");
const score = document.querySelector("#score");
const chance = document.querySelector("#chances");
const overlay = document.querySelector("#overlay");
const message = document.querySelector("#modal p");
const scoreEnd = document.querySelector("#score-end");
const restart = document.querySelector("#restart");
let scoreValue = 0;
let chanceValue = 2;
let actualQuestion = 0;
let timeAnimation;

// Monta a questão com base na variavel de controle na qual é usada para navegar na lista de questões
const montQuestion = () => {
    const question = questions[actualQuestion]; // Pega a questão atual

    questionTitle.textContent = `${question.number} - ${question.title}`; // Seta o titulo e numero de questão

    questionOptions.innerHTML = ""; // limpa as questão atual

    // Com base na função monta opição por opição
    const firstOption = montOption(question.firstOption);
    questionOptions.appendChild(firstOption);

    const secondOption = montOption(question.secondOption);
    questionOptions.appendChild(secondOption);

    const thirdOption = montOption(question.thirdOption);
    questionOptions.appendChild(thirdOption);

    const fourthOption = montOption(question.fourthOption);
    questionOptions.appendChild(fourthOption);
};

// Monta opição por opição e retorna para ser usada
const montOption = (option) => {
    // Cria um elemento no html

    const li = document.createElement("li");
    li.setAttribute("data-correct", option.correct); // Seta as opções com atributos para verificação
    li.addEventListener("click", clickOption); // Adiciona o evento de click

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = option.letter;
    li.appendChild(letter);

    const response = document.createElement("span");
    response.className = "response";
    response.textContent = option.response; // Montra as resposta
    li.appendChild(response);

    // Animação para o icone de cada opção

    let icon;

    if (li.getAttribute("data-correct")) {
        icon = montIcon("check");
    } else {
        icon = montIcon("xmark");
    }

    li.appendChild(icon);

    return li; // Retorna opição por opição já montada
};

// Montar o icone da animação
const montIcon = (icon) => {
    const div = document.createElement("div");

    div.classList.add("icon");
    div.innerHTML = `<i class="fas fa-${icon}"></i>`;

    return div;
};

// Verifica se a opição clicada é a correta e ativa as animações
const clickOption = function () {
    clearTimeout(timeAnimation); // Limpa o tempo da animação atual
    toggleOverlay(); // Mostra o elemento para evitar doble-clicks
    const correct = this.getAttribute("data-correct"); // Pega o atributo das opições
    const icon = this.querySelector(".icon"); // Pega o icone
    if (correct) {
        actualQuestion++;
        scoreValue += 10;
        chanceValue = 2;

        chance.textContent = chanceValue;
        score.textContent = scoreValue;

        icon.classList.add("animation-correct");
    } else {
        chanceValue--;

        chance.textContent = chanceValue;
        icon.classList.add("animation-incorrect");
    }

    timeAnimation = setTimeout(() => {
        checkActualStage();
        icon.className = "icon";
        toggleOverlay();
    }, 2000);
};

const checkActualStage = () => {
    if (chanceValue === 0) {
        overlay.classList.remove("hide");
        scoreEnd.textContent = scoreValue;
        showMessage("Você perdeu! Suas chances chegaram a ZERO!");
    }

    if (actualQuestion === questions.length) {
        overlay.classList.remove("hide");
        scoreEnd.textContent = scoreValue;
        showMessage(
            `Você ganhou! Parabens, você a conhece muito bem! <br /> 
            <span 
            style="color: #fa70ffff; 
            text-shadow: 0 0 5px rgba(0,0,0,.5)">
                Cuidado para não saber demais, ela é MINHA!
            </span>`
        );
    } else {
        montQuestion();
    }
};

const showMessage = (text) => {
    message.innerHTML = text;
};

const toggleOverlay = () => {
    document.querySelector("#overlay-animation").classList.toggle("hide");
};

restart.addEventListener("click", (e) => {
    actualQuestion = 0;
    scoreValue = 0;
    chanceValue = 2;

    chance.textContent = chanceValue;
    score.textContent = scoreValue;

    montQuestion();
    overlay.classList.add("hide");
});

montQuestion();
