# PlatzoLan

PlatzoLan es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

## Descripción del idioma

- Si la palabra original es un palíndromo
  Ninguna otra regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas
- Si la palabra termina en "ar", se quitan esos dos caracteres
- Si la palabra inicia con "z" se le añade "pe" al final
- Si la palabra tiene 10 o más letras, añadir un "-" en el medio

## Instalación

```
npm install platzolan
```

## Uso

```
import platzolan from 'platzolan'

platzom('Programar') // Program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('abecedario') // abece-dario
platzom('salas') // SaLaS
platzom('sometemos') // SoMeTeMoS
```

## Créditos

- Miguel Sosa

## Licencia

[MIT](https://opensource.org/licenses/MIT)