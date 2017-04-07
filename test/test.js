const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function () {
  it('Si la palabra original es un palíndromo ninguna otra regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function () {
    const translation1 = platzom('salas');
    const translation2 = platzom('sometemos');

    expect(translation1).to.equal('SaLaS');
    expect(translation2).to.equal('SoMeTeMoS');

  });
  it('Si la palabra termina en "ar", se quitan esos dos caracteres', function () {
    const translation = platzom('Programar');
    expect(translation).to.equal('Program');
  });
  it('Si la palabra inicia con "z" se le añade "pe" al final', function () {
    const translation1 = platzom('Zorro');
    const translation2 = platzom('Zarpar');

    expect(translation1).to.equal('Zorrope');
    expect(translation2).to.equal('Zarppe');
  });
  it('Si la palabra tiene 10 o más letras, añadir un "-" en el medio', function () {
    const translation = platzom('abecedario');
    expect(translation).to.equal('abece-dario');
  });
});