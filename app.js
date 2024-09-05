function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime a seção no console para verificar se foi selecionada corretamente
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
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

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}
//console.log(dados);


