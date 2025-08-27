let perguntas = [
  {
    pergunta: "Qual é a principal atividade econômica do campo?",
    opcoes: ["Indústria", "Comércio", "Agricultura", "Turismo"],
    resposta: 2
  },
  {
    pergunta: "Qual desses produtos vem principalmente do campo?",
    opcoes: ["Camisetas", "Computadores", "Arroz", "Carros"],
    resposta: 2
  },
  {
    pergunta: "O que é o Agrinho?",
    opcoes: ["Um projeto para apoiar a educação", "Uma marca de roupas", "Uma feira de tecnologia", "Um tipo de planta"],
    resposta: 0
  },
  {
    pergunta: "Qual a principal diferença entre a vida na cidade e no campo?",
    opcoes: ["Mais carros na cidade", "Mais espaço e natureza no campo", "Maior número de pessoas no campo", "Mais tecnologia no campo"],
    resposta: 1
  },
  {
    pergunta: "Qual alimento não é cultivado no campo?",
    opcoes: ["Cenoura", "Milho", "Pão", "Feijão"],
    resposta: 2
  },
  {
    pergunta: "Como a tecnologia ajuda o campo?",
    opcoes: ["Aumenta a produção agrícola", "Diminui o trabalho no campo", "Traz mais conforto", "Todas as alternativas"],
    resposta: 3
  },
  {
    pergunta: "O que é uma lavoura?",
    opcoes: ["Uma cidade agrícola", "Uma plantação", "Uma casa no campo", "Uma máquina usada no campo"],
    resposta: 1
  }
];

let perguntaAtual = 0;
let respostaCorreta = false;
let score = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  // Exibir a pergunta
  textSize(20);
  text("Pergunta " + (perguntaAtual + 1), width / 2, 40);
  textSize(16);
  text(perguntas[perguntaAtual].pergunta, width / 2, 100);

  // Exibir as opções
  for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
    fill(200);
    rect(50, 150 + i * 50, 300, 40);
    fill(0);
    text(perguntas[perguntaAtual].opcoes[i], width / 2, 170 + i * 50);
  }

  // Se a resposta estiver correta, mostrar um feedback
  if (respostaCorreta) {
    fill(0, 255, 0);
    textSize(20);
    text("Resposta Correta!", width / 2, height - 50);
  }
  
  // Exibir pontuação
  textSize(16);
  fill(0);
  text("Pontuação: " + score, width / 2, height - 20);
}

function mousePressed() {
  for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
    // Verificar se o mouse está dentro de uma opção
    if (mouseX > 50 && mouseX < 350 && mouseY > 150 + i * 50 && mouseY < 190 + i * 50) {
      // Verificar se a resposta é correta
      if (i === perguntas[perguntaAtual].resposta) {
        respostaCorreta = true;
        score++;
      } else {
        respostaCorreta = false;
      }

      // Avançar para a próxima pergunta após 1 segundo
      setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual >= perguntas.length) {
          perguntaAtual = 0;
          score = 0;  // Resetar o score
        }
        respostaCorreta = false;
      }, 1000);
    }
  }
}
