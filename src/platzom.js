export default function platzolan (str) {
  let translation = str;

  const reverse = (str) => str.split('').reverse().join('');
  const minMay = (str) => {
    const length = str.length;
    let translation = '';
    let capitalize = true;

    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
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
  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length) / 2);
    const secondHalf = translation.slice(Math.round(length) / 2);

    translation = `${firstHalf}-${secondHalf}`;
  }

  return translation;
}