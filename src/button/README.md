# greg-button

Renderiza um botão de acordo com os atributos selecionados.

## Como funciona

Este web component contém dentro de seu Shadow DOM um `<button>` com um `<slot>` para renderizar o texto recebido. Ao criar um `<greg-button>Texto</greg-button>`, a string irá automaticamente ocupar o espaço do `<slot>`, como mostra o exemplo abaixo.

```html
<greg-button>
  #shadow-root (open)
  <style>...</style>
  <button>
    <slot>Texto</slot>
  </button>
</greg-button>
```

Os atributos do web component também controlam o comportamento dos elementos dentro do Shadow DOM. Ou seja, se for passado o atributo `disabled` para o componente, este também será adicionado à tag `<button>`, como no exemplo abaixo. No entanto, alguns atributos que alteram apenas a estilização não são replicados no botão.

```html
<greg-button disabled>
  #shadow-root (open)
  <style>...</style>
  <button disabled>
    <slot>Texto</slot>
  </button>
</greg-button>
```

## Utilização

```html
  //Botão primário
  <greg-button>Primary</greg-button>

  //Botão secundário
  <greg-button secondary>Secondary Layout</greg-button>
  
  //Botão pequeno
  <greg-button small>Small Button</greg-button>
  
  //Botão desabilitado
  <greg-button disabled>Disabled</greg-button>
  
  //Botão Dark Mode
  <greg-button dark>Dark</greg-button>
  
  //Botão com loading
  <greg-button loading>Fetching...</greg-button>
```

## Atributos

Todos os atributos deste componente não recebem valor. Apenas a presença do atributo no componente é o suficiente para o comportamento esperado.

| Nome      | Tipo  | Valores | Descrição                                  |
| --------- |:-----:|:-------:|:------------------------------------------:|
| small     |   -   |    -    | Diminui o tamanho do botão                 |
| loading   |   -   |    -    | Adiciona um loading ao botão               |
| dark      |   -   |    -    | Adiciona o tema escuro ao componente       |
| disabled  |   -   |    -    | Habilita ou desabilita o botão             |
| secondary |   -   |    -    | Modifica o layout do botão para secundário |