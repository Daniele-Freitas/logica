const clickSound = new Audio('click.mp3');

const characters = {
    caitlyn: {
        name: "Caitlyn",
        description: "A atenta xerife de Piltover que busca justiça acima de tudo.",
        img: "/img/Caitlyn_50.jpg",
        story: [
            {
                text: "Relatos de roubos misteriosos surgem em Piltover. (p)",
                expression: "p → q",
                image: "/img/caitlyn-etapa1.jpg",
                proposition: "p",
                options: [
                    { text: "Investigar o mercado (p)", nextStep: 1, values: { p: true } },
                    { text: "Ignorar e visitar o laboratório (¬p)", nextStep: 1, values: { p: false } }
                ]
            },
            {
                text: "Você encontra uma pista ou nada. (q ∧ r)",
                expression: "q ∧ r",
                image: "caitlyn-etapa2.jpg",
                proposition: "q",
                options: [
                    { text: "Seguir até a casa (r)", nextStep: 2, values: { q: true, r: true } },
                    { text: "Notificar guardas (¬r)", nextStep: 2, values: { q: true, r: false } }
                ]
            },
            {
                text: "Confronto final com o culpado. (p ∧ q ∧ r)",
                expression: "p ∧ q ∧ r",
                image: "caitlyn-etapa3.jpg",
                isEnding: true
            }
        ]
    },

    heimerdinger: {
        name: "Heimerdinger",
        description: "O gênio inventor de Piltover, sempre guiado pela razão.",
        img: "/img/Heimerdinger_33.jpg",
        story: [
            {
                text: "Você projeta um protótipo de segurança que pode colocar a segurança de todos em risco. O que você faz em seguida?",
                expression: "p ʌ q",
                image: "heimer-etapa1.jpg",
                proposition: "p",
                options: [
                    { text: "Não observa impulsivamente e resolve testar sozinho sem contar para ninguém (p ʌ q)", nextStep: 1, values: { p: true } },
                    { text: "Observa cuidadosamente e conta para Caitlyn (¬p ʌ ¬q)", nextStep: 1, values: { p: false } }
                ]
            },
            {
                text: "Falha inesperada. (¬p → q)",
                expression: "¬p → q",
                image: "heimer-etapa2.jpg",
                proposition: "q",
                options: [
                    { text: "Chamar Caitlyn (q)", nextStep: 2, values: { q: true } },
                    { text: "Tentar sozinho (¬q)", nextStep: 2, values: { q: false } }
                ]
            },
            {
                text: "Reparos finais. (p ∨ q) ∧ r",
                expression: "(p ∨ q) ∧ r",
                image: "heimer-etapa3.jpg",
                proposition: "r",
                options: [
                    { text: "Implementar melhorias (r)", nextStep: 3, values: { r: true } },
                    { text: "Encerrar projeto (¬r)", nextStep: 3, values: { r: false } }
                ]
            },
            {
                text: "Resultados da invenção. ((p ∨ q) ∧ r)",
                expression: "(p ∨ q) ∧ r",
                image: "heimer-final.jpg",
                isEnding: true
            }
        ]
    },

    ekko: {
        name: "Ekko",
        description: "Jovem revolucionário de Zaun com domínio sobre o tempo.",
        img: "/img/274px-Ekko_Arcane_3_Render.webp",
        story: [
            {
                text: "Zaun está prestes a colapsar. (p ∧ q)",
                expression: "p ∧ q",
                image: "ekko-etapa1.jpg",
                proposition: "p",
                options: [
                    { text: "Voltar no tempo (p)", nextStep: 1, values: { p: true } },
                    { text: "Confrontar direto (¬p)", nextStep: 1, values: { p: false } }
                ]
            },
            {
                text: "Escolha entre aliados. (p → r)",
                expression: "p → r",
                image: "ekko-etapa2.jpg",
                proposition: "r",
                options: [
                    { text: "Chamar aliados (r)", nextStep: 2, values: { r: true, q: true } },
                    { text: "Ir sozinho (¬r)", nextStep: 2, values: { r: false, q: false } }
                ]
            },
            {
                text: "Desfecho do conflito. (p ∧ r)",
                expression: "p ∧ r",
                image: "ekko-etapa3.jpg",
                isEnding: true
            }
        ]
    }
};

let currentStep = 0;
let chosenCharacter = null;
let logicState = {};

function displayCharacterSelection() {
    const container = document.getElementById("character-selection");
    container.innerHTML = "";
    Object.keys(characters).forEach(key => {
        const c = characters[key];
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = `
            <img src="${c.img}" alt="${c.name}">
            <h2>${c.name}</h2>
            <p>${c.description}</p>
        `;
        card.onclick = () => {
            playClick();
            startGame(key);
        };
        container.appendChild(card);
    });
}

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function startGame(characterKey) {
    chosenCharacter = characters[characterKey];
    document.getElementById("welcome-message").style.display = "none";
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("story-section").style.display = "grid";
    currentStep = 0;
    logicState = {};
    showStory();
}

function showStory() {
    const storyText = document.getElementById("story-text");
    const options = document.getElementById("options");
    const truthBody = document.getElementById("truth-body");
    const truthTable = document.getElementById("truth-table");
    const step = chosenCharacter.story[currentStep];

    storyText.innerHTML = `
        <strong>Etapa ${currentStep + 1}:</strong> ${step.text}
        <br><br><img src="${step.image}" alt="Etapa" style="width: 100%; max-width: 500px; border-radius: 10px; margin-top: 15px;">
    `;
    options.innerHTML = "";

    if (step.isEnding) {
        showEnding();
        return;
    }

    step.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("option-button");
        btn.textContent = option.text;
        btn.onclick = () => {
            playClick();
            logicState = { ...logicState, ...option.values };
            nextStep(option.nextStep);
        };
        options.appendChild(btn);
    });

    truthTable.style.display = "flex";
    truthBody.innerHTML = "";
    chosenCharacter.story.forEach((s, i) => {
        if (!s.proposition && !s.expression) return;
        const tr = document.createElement("tr");
        const expr = s.expression || `Etapa ${i + 1}`;
        let val = "-";
        if (s.proposition && logicState.hasOwnProperty(s.proposition)) {
            val = logicState[s.proposition] ? "Verdadeiro" : "Falso";
        } else if (i < currentStep) {
            val = "?";
        }
        tr.innerHTML = `<td>${expr}</td><td>${val}</td>`;
        truthBody.appendChild(tr);
    });
}

function nextStep(stepIndex) {
    currentStep = stepIndex;
    showStory();
}

function showEnding() {
    const storyText = document.getElementById("story-text");
    const options = document.getElementById("options");
    options.innerHTML = "";

    const values = Object.values(logicState);
    const countTrue = values.filter(v => v).length;

    let result = "ruim";
    if (countTrue === values.length) result = "bom";
    else if (countTrue >= values.length / 2) result = "neutro";

    const endings = {
        bom: {
            text: "Você foi brilhante em suas decisões. Um futuro melhor foi garantido.",
            image: "final-bom.jpg"
        },
        neutro: {
            text: "Nem tudo deu certo... mas você segurou o pior.",
            image: "final-neutro.jpg"
        },
        ruim: {
            text: "O caos se espalhou. Suas ações não bastaram.",
            image: "final-ruim.jpg"
        }
    };

    const ending = endings[result];

    storyText.innerHTML = `
        <h2>Final ${result.toUpperCase()}</h2>
        <p>${ending.text}</p>
        <img src="${ending.image}" alt="Final" style="width: 100%; max-width: 500px; border-radius: 15px; margin-top: 20px;">
    `;
}

window.onload = () => displayCharacterSelection();
