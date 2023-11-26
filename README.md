<h1>Umbu Front-End</h1>

  <h2>Descrição</h2>
  <p>Este é o repositório do front-end para a plataforma Umbu. O projeto utiliza React.JS e CSS para criar uma plataforma acessível.</p>

  <h2>Boas Práticas de Codificação</h2>

  <h3>Padrões de Codificação</h3>
  <ul>
    <li>Nomeie os componentes com a primeira letra maiúscula (ex.: Componente.jsx).</li>
    <li>Utilize o padrão camelCase para nomear variáveis e arquivos que não sejam componentes.</li>
  </ul>

  <h3>Estrutura de Diretórios</h3>
  <p>Organizamos nosso projeto da seguinte maneira:</p>
  <ul>
    <li><code>src/pages</code>: Contém as páginas da plataforma. Cada página do projeto será uma pasta dentro de pages (Como por exemplo UMCHAT).</li>
    <li>Exemplo: <code>pages/perfil.pasta/perfil.jsx</code>.</li>
  </ul>
  <p>Dentro das páginas, chame os componentes que compõem a página, como mostrado no exemplo a seguir:</p>

  <pre>
    <code>
function perfil() {
  return (
    &lt;div&gt;
      &lt;Componente1 /&gt;
      &lt;Componente2 /&gt;
      &lt;Componente3 /&gt;
    &lt;/div&gt;
  );
}
    </code>
  </pre>

  <h2>Como Criar/subir pra uma branch</h2>

  <p><code>git checkout -b implementacao-barraLateral:</code> Este comando cria uma nova branch chamada 'implementacao-barraLateral' e muda para ela. Uma branch no Git é uma ramificação independente do código, permitindo o desenvolvimento separado de diferentes recursos ou correções de bugs.</p>

  <p><code>git branch:</code> Exibe todas as branches presentes no repositório. O asterisco (*) indica a branch atual, que agora é 'implementacao-barraLateral'.</p>

  <p><code>git checkout (nome da branch)</code> ex: <code>git checkout main:</code> Muda para a branch ''. Este comando é utilizado para alternar entre branches.</p>

  <p><code>git add .:</code> Adiciona todas as mudanças nos arquivos do diretório atual para a área de preparação (staging area). Essas mudanças serão incluídas no próximo commit.</p>

  <p><code>git commit -m "adc: barraLateral branch":</code> Realiza um commit com uma mensagem explicativa. O -m é utilizado para incluir a mensagem de commit diretamente na linha de comando.</p>

  <h3>Caso seja seu primeiro commit na branch criada</h3>

  <p><code>git push -u origin (nome da branch):</code> Envia as mudanças para o repositório remoto (no GitHub, no caso) na branch. O -u é usado para configurar a branch remota como a branch upstream, o que     facilita futuros pushes e pulls desta branch.</p>

  <h3>Depois de fazer o primeiro commit na branch</h3>

  <p>Use apenas o <code>git push</code>, que irá subir para o git.</p>
  <p><code>git pull </code>Outro comando muito importante, caso a versão atualizada do seu codigo esteja no github invés do seu computador, dê um  pra sincronizar o que foi modificado</p>

  <p>Após feito isso, irá aparecer um link no terminal durante o exemplo este apareceu (<a href="https://github.com/sejaumbu/umbu-front-end/pull/new/implementacao-barraLateral">https://github.com/sejaumbu/umbu-front-end/pull/new/implementacao-barraLateral</a>)</p>

  <p>Entre no link e descreva no título o que foi feito, após isso, na lateral direita irá aparecer a request, você deve selecionar alguém para revisar seu código antes de mergear.</p>

  <p>Apenas sob ordens vocês podem mergear o código, para não gerar conflitos no repositório.</p>

  <hr>
<h2> Como atualizar a versão no meu computador para a versão mais recente no repositório?</h2>

<h3> Depende do que você quer fazer: </h3>

<h5>Terminou sua branch e vai começar outra branch do projeto? </h5>
<p> Acesse a main do projeto para atualizar tudo que foi modificado:</p>
<p><code> git checkout main</code></p>
<p> Atualize a sua versão no seu desktop:</p>
<p><code> git pull </code></p>

<h5> Quer dar um UPDATE na sua branch </h5>
<p> Se você deseja atualizar a sua branch com as últimas modificações da branch principal (main) ou de outra branch, siga os passos abaixo:</p>

<p> Certifique-se de estar na sua branch local:</p>
<p><code> git checkout SUA_BRANCH </code></p>
<p> Substitua "SUA_BRANCH" pelo nome da sua branch.</p>

<p> Em seguida, faça o rebase da sua branch com a branch principal para incorporar as alterações mais recentes:</p>
<p><code> git rebase main </code></p>
<p> Isso aplicará suas alterações locais sobre as alterações mais recentes da branch principal.</p>

<p> Se houver conflitos durante o rebase, o Git irá notificá-lo. Resolva os conflitos manualmente e, em seguida, continue o rebase:</p>
<p><code> git rebase --continue </code></p>

<p> Após concluir o rebase, você pode atualizar o repositório remoto com suas alterações:</p>
<p><code> git push origin SUA_BRANCH </code></p>

<p> Isso atualizará a sua branch remota no repositório.</p>

<h3> Lembre-se: </h3>
<p> - Sempre certifique-se de ter commitado ou descartado suas alterações locais antes de realizar o rebase.</p>
<p> - O rebase reescreve o histórico de commits, então use-o com cuidado, especialmente se já tiver compartilhado seu código.</p>
<p> - Mantenha-se atualizado com as práticas de colaboração do projeto, pois podem haver variações dependendo das diretrizes da equipe.</p>
