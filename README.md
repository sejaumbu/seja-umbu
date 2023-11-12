# Umbu Front-End

## Descrição
Este é o repositório do front-end para a plataforma Umbu. O projeto utiliza React.JS e CSS para criar uma plataforma acessivel.
## Boas Práticas de Codificação

### Padrões de Codificação
- Nomeie os componentes com a primeira letra maiúscula (ex.: Componente.jsx).
- Utilize o padrão camelCase para nomear variáveis e arquivos que não sejam componentes

### Estrutura de Diretórios
Organizamos nosso projeto da seguinte maneira:
- `src/pages`: Contém as páginas da plataforma - Cada página do projeto, será uma pasta dentro de pages (Como por exemplo UMCHAT)
  - Exemplo: `pages/perfil.pasta/perfil.jsx`.
Dentro das páginas, chame os componentes que compõem a página, como mostrado no exemplo a seguir:

```jsx
function perfil() {
  return (
    <div>
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </div>
  );
}
### Como subir pra uma branch

git checkout -b implementacao-barraLateral: 
  Este comando cria uma nova branch chamada 'implementacao-barraLateral' e muda para ela. Uma branch no Git é uma ramificação independente do código, permitindo o desenvolvimento separado de diferentes recursos ou correções de bugs.

git branch: Exibe todas as branches presentes no repositório. O asterisco (*) indica a branch atual, que agora é 'implementacao-barraLateral'.

git checkout (nome da branch) 
  ex: git checkout main: Muda para a branch ''. Este comando é utilizado para alternar entre branches.

git add .: Adiciona todas as mudanças nos arquivos do diretório atual para a área de preparação (staging area). Essas mudanças serão incluídas no próximo commit.

git commit -m "adc: barraLateral branch": Realiza um commit com uma mensagem explicativa. O -m é utilizado para incluir a mensagem de commit diretamente na linha de comando. 

####CASO SEJA SEU PRIMEIRO COMMIT NA BRANCH CRIADA

git push -u origin (nome da branch) : Envia as mudanças para o repositório remoto (no GitHub, no caso) na branch. O -u é usado para configurar a branch remota como a branch upstream, o que facilita futuros pushes e pulls desta branch.  

####Depois de fazer o primeiro commit na branch
  use apenas o git push, que irá subir para o git.

Após feito isso, irá aparecer um link no terminal durante o exemplo este apareceu (https://github.com/sejaumbu/umbu-front-end/pull/new/implementacao-barraLateral) 

Entre no link e descreva no titulo o que foi feito, após isso, na lateral direita irá aparecer a request, você deve selecionar alguem para revisar seu codigo antes de mergear.

Apenas sob ordens vocês podem mergear o codigo, para não gerar conflitos no repositorio.