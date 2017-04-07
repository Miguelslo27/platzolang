'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = platzolan;

function platzolan(str) {
  var translation = str;

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  var minMay = function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  };

  // Si la palabra original es un palíndromo
  // Ninguna regla anterior cuenta y se devuelve la misma palabra
  // Intercalando mayúsculas y minúsculas
  if (str.toLowerCase() == reverse(str)) {
    return minMay(str);
  }

  // Si la palabra termina en "ar", se quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // Si la palabra inicia con "z" se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // Si la palabra tiene 10 o más letras, añadir un "-" en el medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length) / 2);
    var secondHalf = translation.slice(Math.round(length) / 2);

    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}