
const characters = {
    caitlyn: {
        name: "Caitlyn",
        description: "A agente de Piltover que busca justiça mesmo contra o sistema.",
        img: "Caitlyn_50.jpg",
        story: [
            {
                text: "Etapa 1 - O Incidente na ponte: Uma explosão suspeita ocorreu entre Piltover e Zaun.",
                expression: "Define p",
                image: "caitlyn-etapa1.jpg",
                proposition: "p",
                options: [
                    { text: "Investiga por conta própria e vai até Zaun (p)", nextStep: 1, values: { p: true } },
                    { text: "Fica em Piltover e tenta convencer o conselho (¬p)", nextStep: 1, values: { p: false } }
                ]
            },
            {
                text: "Etapa 2 – A Aliança com Vi: Caitlyn encontra Vi presa e precisa decidir.",
                expression: "Define q",
                image: "caitlyn-etapa-2.png",
                proposition: "q",
                options: [
                    { text: "Liberta Vi para ajudar (q)", nextStep: 2, values: { q: true } },
                    { text: "Não envolve Vi na missão (¬q)", nextStep: 2, values: { q: false } }
                ]
            },
            {
                text: "Etapa 3 – Confronto com Jinx: Um momento decisivo com a explosiva irmã de Vi.",
                expression: "Define r",
                image: "caitlyn-etapa-3.jpg",
                proposition: "r",
                options: [
                    { text: "Atira para impedir Jinx (r)", nextStep: 3, values: { r: true } },
                    { text: "Tenta persuadir Jinx (¬r)", nextStep: 3, values: { r: false } }
                ]
            },
            {
                text: "Final baseado em (p <-> q) ^ r",
                expression: "(p <-> q) ^ r",
                image: "caitlyn-final.jpg",
                isEnding: true
            }
        ],
        endings: {
            bom: {
                text: "Caitlyn confia em Vi e impede Jinx. Piltover e Zaun iniciam uma nova era de cooperação.",
                image: "caitlyn-final-bom.jpg"
            },
            ruim: {
                text: "Caitlyn hesita. Jinx explode o local e Caitlyn é culpada. Piltover mergulha no caos.",
                image: "caitlyn-final-ruim.webp"
            },
            neutro: {
                text: "Caitlyn age de forma incoerente. Jinx escapa. A justiça nunca chega.",
                image: "caitlyn-final-neutro.jpg"
            }
        }
    },

    ekko: {
        name: "Ekko",
        description: "Jovem de Zaun com domínio sobre o tempo e sede de justiça.",
        img: "274px-Ekko_Arcane_3_Render.webp",
        story: [
            {
                text: "Etapa 1 – Shimmer no Mercado: Ekko descobre tráfico no mercado de Zaun.",
                expression: "Define p",
                image: "ekko-etapa1.jpg",
                proposition: "p",
                options: [
                    { text: "Ataca os traficantes (p)", nextStep: 1, values: { p: true } },
                    { text: "Evita confronto direto (¬p)", nextStep: 1, values: { p: false } }
                ]
            },
            {
                text: "Etapa 2 – A Criança Perdida: Ekko encontra uma criança ferida.",
                expression: "Define q",
                image: "ekko-etapa2.jpg",
                proposition: "q",
                options: [
                    { text: "Salva a criança (q)", nextStep: 2, values: { q: true } },
                    { text: "Continua a missão (¬q)", nextStep: 2, values: { q: false } }
                ]
            },
            {
                text: "Etapa 3 – Confronto com Silco: Ekko confronta o responsável pelo shimmer.",
                expression: "Define r",
                image: "ekko-etapa3.jpg",
                proposition: "r",
                options: [
                    { text: "Captura Silco (r)", nextStep: 3, values: { r: true } },
                    { text: "Mata Silco (¬r)", nextStep: 3, values: { r: false } }
                ]
            },
            {
                text: "Final baseado em (p ∨ q) → r",
                expression: "(p ∨ q) → r",
                image: "ekko-final.jpg",
                isEnding: true
            }
        ],
        endings: {
            bom: {
                text: "Ekko salva Zaun com compaixão. Ele inspira uma nova geração de heróis.",
                image: "ekko-final-bom.jpg"
            },
            ruim: {
                text: "Ekko mata Silco. Uma nova onda de violência começa. O ciclo se repete.",
                image: "ekko-final-ruim.jpg"
            },
            neutro: {
                text: "Ekko falha em agir. Zaun continua oprimida, esperando outro herói.",
                image: "ekko-final-neutro.png"
            }
        }
    },

    heimerdinger: {
        name: "Heimerdinger",
        description: "Inventor cauteloso e defensor da ciência ética.",
        img: "Heimerdinger_33.jpg",
        story: [
            {
                text: "Etapa 1 – O Conselho Dividido: Jayce quer militarizar a hextec.",
                expression: "Define p",
                image: "heimer-etapa1.webp",
                proposition: "p",
                options: [
                    { text: "Vota contra o uso militar (p)", nextStep: 1, values: { p: true } },
                    { text: "Aceita o uso militar da hextec (¬p)", nextStep: 1, values: { p: false } }
                ]
            },
            {
                text: "Etapa 2 – Vozes de Zaun: Jovens pedem apoio para seus projetos.",
                expression: "Define q",
                image: "heimer-etapa2.webp",
                proposition: "q",
                options: [
                    { text: "Apoia os projetos (q)", nextStep: 2, values: { q: true } },
                    { text: "Não se envolve diretamente (¬q)", nextStep: 2, values: { q: false } }
                ]
            },
            {
                text: "Etapa 3 – A Máquina da Paz: Viktor quer ativar um núcleo instável.",
                expression: "Define r",
                image: "heimer-etapa3.webp",
                proposition: "r",
                options: [
                    { text: "Permite a ativação (r)", nextStep: 3, values: { r: true } },
                    { text: "Interrompe a ativação (¬r)", nextStep: 3, values: { r: false } }
                ]
            },
            {
                text: "Final baseado em (p ∧ q) ↔ r",
                expression: "(p ∧ q) ↔ r",
                image: "heimer-final.jpg",
                isEnding: true
            }
        ],
        endings: {
            bom: {
                text: "Heimerdinger lidera Piltover com empatia. Viktor estabiliza o núcleo com sucesso.",
                image: "heimer-final-bom.jpg"
            },
            ruim: {
                text: "O caos científico se instala. Viktor morre ou o núcleo colapsa. Heimerdinger é afastado.",
                image: "heimer-final-ruim.jpg"
            },
            neutro: {
                text: "Heimerdinger evita riscos, mas a cidade segue dividida. Um equilíbrio frágil persiste.",
                image: "heimer-final-neutro.png"
            }
        }
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
            startGame(key);
        };
        container.appendChild(card);
    });
}



function startGame(characterKey) {
    chosenCharacter = characters[characterKey];
    document.getElementById("welcome-message").style.display = "none";
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("story-section").style.display = "grid";


    const storySection = document.getElementById("story-section");

    // Verifica a altura da janela (viewport)
    const screenWidth = window.innerWidth;

    // Aplica display com base na altura da tela
    if (screenWidth < 500) {
        storySection.style.display = "flex";
    }

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
        <br><br><img src="${step.image}" alt="Etapa" style="width: 100%;max-height:300px; max-width: 500px; border-radius: 10px;">
    `;
    options.innerHTML = "";

    if (step.isEnding) {
        showTruthTable();
        showEnding();
        return;
    }

    step.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("option-button");
        btn.textContent = option.text;
        btn.onclick = () => {
            logicState = { ...logicState, ...option.values };
            nextStep(option.nextStep);
        };
        options.appendChild(btn);
    });

    truthTable.style.display = "flex";
    showTruthTable();
}

function showTruthTable() {
    const truthBody = document.getElementById("truth-body");
    truthBody.innerHTML = "";

    chosenCharacter.story.forEach((s) => {
        if (!s.expression) return;

        const tr = document.createElement("tr");
        const expr = s.expression;
        let val = "-";

        if (s.proposition) {
            val = logicState.hasOwnProperty(s.proposition)
                ? (logicState[s.proposition] ? "Verdadeiro" : "Falso")
                : "-";
        } else if (s.isEnding) {
            const p = logicState.p;
            const q = logicState.q;
            const r = logicState.r;

            if (p !== undefined && q !== undefined && r !== undefined) {
                if (chosenCharacter.name === "Caitlyn") {
                    const bicond = (p === q);
                    val = (bicond && r) ? "Verdadeiro" : "Falso";
                } else if (chosenCharacter.name === "Ekko") {
                    const disj = p || q;
                    val = (!disj || r) ? "Verdadeiro" : "Falso";
                } else if (chosenCharacter.name === "Heimerdinger") {
                    const conj = p && q;
                    val = (conj === r) ? "Verdadeiro" : "Falso";
                }
            }
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

    const ending = chosenCharacter.endings[result];

    storyText.innerHTML = `
        <h2>Final ${result.toUpperCase()}</h2>
        <p>${ending.text}</p>
        <img src="${ending.image}" alt="Final" style="width: 100%;max-height:300px; max-width: 500px; border-radius: 15px; margin-top: 20px;">
    `;

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Jogar novamente";
    restartBtn.classList.add("option-button");
    restartBtn.addEventListener("click", restartGame);
    options.appendChild(restartBtn);

    showTruthTable();
}

function restartGame() {
    document.getElementById("story-section").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("character-selection").style.display = "flex";
    currentStep = 0;
    chosenCharacter = null;
    logicState = {};
    displayCharacterSelection(); // <== isso realmente recria os cards
}
window.onload = () => displayCharacterSelection();
