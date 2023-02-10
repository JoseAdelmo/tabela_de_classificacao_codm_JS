var hunterbr1234 = {
  nome: "HUNTERBR1234",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var paulo = {
  nome: "PAULO",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var rafa = {
  nome: "RAFA",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var gui = {
  nome: "GUI",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
          <tr>
          <td><img src="https://www.callofduty.com/content/dam/atvi/callofduty/mobile/home/characters/characters-ghost.jpg"></td>
          <td>${hunterbr1234.nome}</td>
          <td>${hunterbr1234.vitoria}</td>
          <td>${hunterbr1234.empate}</td>
          <td>${hunterbr1234.derrota}</td>
          <td>${hunterbr1234.pontos}</td>
          <td><button onClick="adicionarVitoria(hunterbr1234)">+ Kill</button></td>
          <td><button onClick="adicionarEmpate(hunterbr1234)">+ Assist</button></td>
          <td><button onClick="adicionarDerrota(hunterbr1234)">+ Death</button></td>
        </tr>
        
        <tr>
         <td><img src="https://www.callofduty.com/content/dam/atvi/callofduty/mobile/home/characters/characters-david-mason.jpg"></td>
          <td>${paulo.nome}</td>
          <td>${paulo.vitoria}</td>
          <td>${paulo.empate}</td>
          <td>${paulo.derrota}</td>
          <td>${paulo.pontos}</td>
          <td><button onClick="adicionarVitoria(paulo)">+ Kill</button></td>
          <td><button onClick="adicionarEmpate(paulo)">+ Assist</button></td>
          <td><button onClick="adicionarDerrota(paulo)">+ Death</button></td>
        </tr>
        
        <tr>
          <td><img src="https://static.tvtropes.org/pmwiki/pub/images/fdd83e29d45b1a5317cc39bd90ac9cdf.jpg"></td>
          <td>${rafa.nome}</td>
          <td>${rafa.vitoria}</td>
          <td>${rafa.empate}</td>
          <td>${rafa.derrota}</td>
          <td>${rafa.pontos}</td>
          <td><button onClick="adicionarVitoria(rafa)">+ Kill</button></td>
          <td><button onClick="adicionarEmpate(rafa)">+ Assist</button></td>
          <td><button onClick="adicionarDerrota(rafa)">+ Death</button></td>
        </tr>
        
        <tr>
          <td><img src="https://www.pngitem.com/pimgs/m/288-2885451_cod-modern-warfare-new-hd-png-download.png"></td>
          <td>${gui.nome}</td>
          <td>${gui.vitoria}</td>
          <td>${gui.empate}</td>
          <td>${gui.derrota}</td>
          <td>${gui.pontos}</td>
          <td><button onClick="adicionarVitoria(gui)">+ Kill</button></td>
          <td><button onClick="adicionarEmpate(gui)">+ Assist </button></td>
          <td><button onClick="adicionarDerrota(gui)">+ Death</button></td>
        </tr>
  `;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 8;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}