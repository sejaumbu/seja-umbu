# Umbu Front-End

## Descrição
Este é o repositório do front-end para a plataforma Umbu. O projeto utiliza React.JS e CSS para criar uma plataforma acessivel.
## Boas Práticas de Codificação

### Padrões de Codificação
- Nomeie os componentes com a primeira letra maiúscula (ex.: Componente.jsx).
- Utilize o padrão camelCase para nomear variáveis.

### Estrutura de Diretórios
Organizamos nosso projeto da seguinte maneira:
- `src/pages`: Contém as páginas da plataforma.
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
