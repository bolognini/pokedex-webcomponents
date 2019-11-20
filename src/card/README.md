# pokedex-card

Renderiza um card de acordo com os atributos recebidos de um determinado Pokémon.

## Como funciona

Este web component contém dentro de seu Shadow DOM três `<slot>` para receber o nome e os dois tipos do Pokémon. A string recebida do nome do Pokémon irá automaticamente ocupar o espaço do elemento `<slot>`, como mostra o exemplo abaixo. Porém os slots que recebem os tipos do Pokémon necessitam da tag `<span>` com o atributo `slot` para aplicar os estilos corretos que renderizam essa informação. Apesar disso, é possível utilizar com outras tags. Além disso, também há uma `<div>` para comportar o número do Pokémon na Pokédex e um `<img>` para renderizar a imagem do Pokémon.

```html
<pokedex-card>
  #shadow-root (open)
  <style>...</style>
  <div class="holder">
    <slot name="name">
      ↪ #text
    </slot>
    <div class="id">#094</div>
    <div class="types">
      <slot name="type0">
        ↪ <span> reveal
      </slot>
      <slot name="type1">
        ↪ <span> reveal
      </slot>
    </div>
    <img src="https://bit.ly/2UmleKc">
  </div>
</pokedex-card>
```

Todos os atributos que este componente recebe são informações renderizadas e nenhuma altera seu comportamento. Apenas o atributo `background` muda a estilização de cor de fundo de acordo com o primeiro tipo do Pokémon. Essa validação é feita no arquivo `style.css`, deixando a classe construtora apenas com a função de ouvir esse e outros atributos.

## Utilização

O card precisa receber os atributos `name`, `id`, `alt`, `source` e `background` contendo as informações que serão renderizadas do Pokémon. O atributo `background`, no entanto, tem uma **[lista](#background)** de strings que pode receber para surtir efeito. Além destes atributos, o componente precisa receber dentro de sua estrutura uma ou duas tags `<span>` para os tipos do Pokémon. É importante adicionar o atributo `slot` às tags, contendo os valores `type0` e `type1`. Se o Pokémon possuir apenas um tipo, só o `type0` é necessário. O código abaixo mostra como seria o card do Pokémon Gengar.

```html
<pokedex-card
  name="Gengar"
  id="094"
  alt="Gengar"
  source="https://bit.ly/2UmleKc"
  background="poison"
>
  <span slot="type0">Poison</span>
  <span slot="type1">Ghost</span>
</pokedex-card>
```

## Atributos

| Nome          | Tipo          | Descrição                           |
| ------------- |:-------------:|:-----------------------------------:|
| name          | string        | Nome do Pokémon                     |
| id            | string        | Número do Pokémon na Pokédex        |
| alt           | string        | Descrição da imagem                 |
| source        | string        | Caminho ou URL da imagem do Pokémon |
| background    | string        | Cor do card                         |


## Background

Esses são os valores que o atributo `background` aceita para modificar a cor do card. Qualquer valor diferente do que está nessa lista resultará num background de cor branca.

| Valor    | Cor Hexadecimal | 
| -------- |:---------------:|
| normal   | #a9a878         |
| ghost    | #715799         |
| poison   | #a03fa1         |
| bug      | #a8b820         |
| fighting | #c02f27         |
| flying   | #a990f1         |
| psychic  | #f95788         |
| fire     | #f17f2e         |
| ice      | #98d9d9         |
| ground   | #e2c168         |
| water    | #6890f0         |
| dragon   | #7035ff         |
| rock     | #b89f38         |
| grass    | #78c850         |
| dark     | #6f5747         |
| steel    | #b8b8d0         |
| electric | #f9d130         |
| fairy    | #f79eab         |