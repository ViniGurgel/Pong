//variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raqueteplayer1

let xRaquete = 5;
let yRaquete =150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente =150;
let comprimentoRaqueteOponente = 10;
let alturaRaqueteOponente = 90;
let velocidadeYOponente;

//placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha= loadSound ("trilha.mp3");
  ponto= loadSound ("ponto.mp3");
  raquetada= loadSound ("raquetada.mp3")
}

let colidiu = false

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  raquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  //verificaColisaoRaquete();
  verificaColisaoRaquete (xRaquete, yRaquete);
  raquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
  

  }
      
function raquete (x,y) {
  
  rect( x, y, comprimentoRaquete , alturaRaquete)
  

}
function raqueteOponente () {
  
  rect( xRaqueteOponente, yRaqueteOponente, comprimentoRaqueteOponente , alturaRaqueteOponente)
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width || 
      xBolinha - raio < 0 )
  velocidadeXBolinha *=-1;
  
  
  if (yBolinha + raio > height || yBolinha -raio < 0)
    velocidadeYBolinha *=-1
}

function movimentaMinhaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
}
}

  function verificaColisaoRaquete(){
    if  (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
      velocidadeXBolinha *=-1
      raquetada.play();
    }
  }

function verificaColisaoRaquete (x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha , yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *=-1
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  } 
}

function incluiPlacar (){
  stroke (255)
  textAlign(CENTER)
  textSize (20);
  fill(color(0,255,127))
  rect(130, 08, 40, 22);
  fill(255)
  text(meusPontos, 150, 26)
  fill(color(0,255,127))
  rect(430, 08, 40, 22)
  fill(255)
  text(pontosOponente, 450, 26)
}

function marcaPonto(){
  if (xBolinha >590){
    meusPontos +=1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente +=1
    ponto.play();
  }
  

}