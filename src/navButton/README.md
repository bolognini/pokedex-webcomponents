# greg-nav-button

Renderiza um botão de voltar ou seguir com ou sem texto de acordo com os atributos recebidos.

## Como funciona

Este web component contém dentro de seu Shadow DOM um `<button>` com um SVG e um `<slot>` para renderizar o texto recebido. Ao criar um `<greg-nav-button text='Texto'></greg-nav-button>`, o valor do atributo `text` irá automaticamente criar um `<slot>` e ocupar seu espaço, como mostra o exemplo abaixo.

```html
<greg-nav-button text='Texto'>
  #shadow-root (open)
  <style>...</style>
  <div class='holder'>
    <button>
      <svg>...</svg>
      <slot>Texto</slot>
    </button>
  </div>
</greg-nav-button>
```

Os atributos do web component também controlam o comportamento dos elementos dentro do Shadow DOM. Ou seja, se for passado o atributo `disabled` para o componente, este também será adicionado à tag `<button>`, como no exemplo abaixo. No entanto, alguns atributos que alteram apenas a estilização não são replicados no botão.

```html
<greg-nav-button disabled>
  #shadow-root (open)
  <style>...</style>
  <button disabled>
    <svg>...</svg>
  </button>
</greg-nav-button>
```

## Utilização

```html
  //NavButton Default
  <greg-nav-button />

  //NavButton com tema escuro
  <greg-nav-button dark />
  
  //NavButton grande
  <greg-nav-button large />
  
  //NavButton desabilitado
  <greg-nav-button disabled />

  //NavButton com outra posição de ícone
  <greg-nav-button position />
  
  //NavButton com texto
  <greg-nav-button text='Texto' />
```

## Atributo com valor

Este componente possui apenas um atributo que recebe um valor.

| Nome      | Tipo       | Valores               | Descrição                                           |
| --------- |:----------:|:---------------------:|:---------------------------------------------------:|
| text      |  string    |    Qualquer string    | Adiciona um slot com a string passada pelo atributo |

## Atributos sem valor

Estes atributos do componente não recebem valor. Apenas a presença do atributo no componente é o suficiente para o comportamento esperado.

| Nome      | Tipo  | Valores | Descrição                                  |
| --------- |:-----:|:-------:|:------------------------------------------:|
| large     |   -   |    -    | Aumenta o tamanho do componente            |
| dark      |   -   |    -    | Adiciona o tema escuro ao componente       |
| disabled  |   -   |    -    | Habilita ou desabilita o botão             |
| position  |   -   |    -    | Espelha a posição do SVG do botão          |