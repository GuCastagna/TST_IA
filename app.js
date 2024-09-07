function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Imprime a seção no console para verificar se foi selecionada corretamente
  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  //let tags = "";

  //Se o campoPesquisa for um vazio.
  if(campoPesquisa ==""){
    section.innerHTML = "<p>Por favor, escreva algo na pesquisa que esteja relacionado a Segurança do Trabalho.</p>";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    //tags = dado.tags.toLowerCase();
    if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)/*||tags.includes(campoPesquisa)*/){
        // Cria um novo elemento div para cada dado e adiciona as informações
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <P>
            <a href="${dado.link}" target="_blank">INFORMAÇÕES ADICIONAIS</a>
          </P>
        </div>
      `;
    }
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}
//console.log(dados);
