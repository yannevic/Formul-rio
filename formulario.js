// VARIABLE THAT CONTAINS AN ARRAY OF OBJECTS FOR EVERY ZODIAC SIGN AND ITS PROPERTY VALUE PAIRS
let zodiacSign = [
  {
    sign: 'Seu signo é Aquário!',
    image: './images/aquario.png',
    horoscope: "Quem tem sol em Aquário costuma ter a amizade como cartão de visita e ter uma conexão intensa com a liberdade.<br> Signo idealista, tende a dar preferência aos diálogos racionais. Aquário é solidário e humano, também pode ser radical e bem “do contra.",
    dateMonth: ['1', '2'],
    dateDay: ['20', '18']
  },
  {
    sign: 'Seu signo é Peixes!',
    image: './images/peixes.png',
    horoscope: "Quem tem sol em Peixes costuma entender tudo sem precisar de muitas palavras, possuem uma sensibilidade superior.<br> Signo compassivo e inspirador, Peixes tende a ter uma forte conexão com a espiritualidade, mas pode se iludir com certa facilidade.",
    dateMonth: ['2', '3'],
    dateDay: ['19', '20']
  },
  {
    sign: 'Seu signo é Áries!',
    image: './images/aries.png',
    horoscope: "Quem tem sol em Áries costuma viver no agora; além de possuir um grande prazer em existir, ação e decisão também podem ser algumas de suas marcas. A liderança é uma característica forte no signo, que pode ser usada para o empreendedorismo.",
    dateMonth: ['3', '4'],
    dateDay: ['21', '19']
  },
  {
    sign: 'Seu signo é Touro!',
    image: './images/touro.png',
    horoscope: "Quem tem sol em Touro costuma não abrir mão do que traz conforto e bem-estar, mas pode ter a possessividade em evidência.<br> O signo preza pela beleza física e pela gula. A satisfação de Touro vem do contato com todos os cinco sentidos.",
    dateMonth: ['4', '5'],
    dateDay: ['20', '20']
  },
  {
    sign: 'Seu signo é Gêmeos',
    image: './images/gemeos.png',
    horoscope: "Quem tem sol em Gêmeos costuma apreciar novas ideias, novos lugares e novas pessoas.<br> Gêmeos tem carisma de sobra e tende a fazer amigos com muita facilidade. A superficialidade e a inconsequência também podem ser algumas das marcas do signo.",
    dateMonth: ['5', '6'],
    dateDay: ['21', '20']
  },
  {
    sign: 'Seu signo é Cancêr!',
    image: './images/cancer.png',
    horoscope: "Quem tem sol em Câncer costuma buscar o que lhe traz segurança. O signo é maternal e emotivo e tem uma proximidade com o apego ao passado.<br> Câncer costuma ter a intuição acentuada, sentir as coisas no ar e captar tudo logo no primeiro olhar.",
    dateMonth: ['6', '7'],
    dateDay: ['21', '22']
  },
  {
    sign: 'Seu signo é Leão!',
    image: './images/leao.png',
    horoscope: "Quem tem sol em Leão costuma amar plateias e aplausos. O signo tem a coragem e o humor como marcas registradas, mas também o orgulho e o autoritarismo.<br> Leão geralmente valoriza as oportunidades e aproveita cada momento, sabe amar e ter generosidade.",
    dateMonth: ['7', '8'],
    dateDay: ['23', '22']
  },
  {
    sign: 'Seu signo é Virgem!',
    image: './images/virgem.png',
    horoscope: "Quem tem sol em Virgem costuma buscar constantemente a perfeição, tudo sempre poderia estar um pouco melhor.<br> Signo observador, que costuma identificar o detalhe que ninguém mais percebe. Virgem tem praticidade e organização, mas também pode ser frio e cético.",
    dateMonth: ['8', '9'],
    dateDay: ['23', '22']
  },
  {
    sign: 'Seu signo é Libra!',
    image: './images/libra.png',
    horoscope: "Quem tem sol em Libra costuma buscar sempre o equilíbrio e conviver com a indecisão.<br> Regido por Vênus, o signo tem uma aproximação natural com as artes. Libra costuma ter ética, mas também pode ter vaidade em excesso e comportamentos considerados de “mau gosto.",
    dateMonth: ['9', '10'],
    dateDay: ['23', '22']
  },
  {
    sign: 'Seu signo é Escorpião!',
    image: './images/escorpiao.png',
    horoscope: "Quem tem sol em Escorpião costuma ter muita perspicácia, não é a toa que são naturalmente detetives. <br>O sexto sentido do signo alerta para possíveis “perigos” logo de cara. Escorpião tem uma capacidade de regeneração única, mas também pode ter muitos ciúmes.",
    dateMonth: ['10', '11'],
    dateDay: ['23', '21']
  },
  {
    sign: 'Seu signo é Sagitário!',
    image: './images/sagitario.png',
    horoscope: "Quem tem sol em Sagitário costuma ser viajante, sua casa é o mundo inteiro. O signo viaja muito também em sua própria mente.<br> Não tente aprisionar Sagitário de nenhuma forma, ele não aceita limites. Otimista e jovial, pode ter exageros e uma dose de deboche.",
    dateMonth: ['11', '12'],
    dateDay: ['22', '21']
  },
  {
    sign: 'Seu signo é Capricórnio!',
    image: './images/capricornio.png',
    horoscope: "Quem tem sol em Capricórnio costuma ter seus propósitos e metas bem definidos.<br> Signo de praticidade que segue as regras do jogo tem total noção dos seus limites. Capricórnio é maduro e bem humorado, mas também pode ser frio nas relações e um tanto pessimista.",
    dateMonth: ['12', '1'],
    dateDay: ['22', '19']
  }
];

// VARIABLES THAT CAN MANIPULATE HTML IMAGE AND TEXT
let sign = document.getElementById('sign');
let opening = document.getElementById('opening');
let image = document.getElementById('image');
let horoscope = document.getElementById('horoscope');
let form = document.getElementById('form');

// VARIABLES FOR MONTH AND DATE
let month = document.getElementById('mes');
let day = document.getElementById('dia')

// FUNCTION ON A CLICK OF A BUTTON THAT RUNS A FOR LOOP COMPARING THE DAY AND MONTH SELECTED TO CATEGORIES SET FOR EACH ZODIAC SIGN; CONDITION STATEMENTS NEEDED

function getSign() {
  console.log(month.value, day.value)
  for (let i = 0; i < zodiacSign.length; i++) {
    if (((month.value == zodiacSign[i].dateMonth[0]) && (day.value >= zodiacSign[i].dateDay[0])) || ((month.value == zodiacSign[i].dateMonth[1]) && (day.value <= zodiacSign[i].dateDay[1]))) {
      console.log('success');
      sign.textContent = zodiacSign[i].sign;
      form.setAttribute('style', 'display:none');
      opening.setAttribute('style', 'display:inline');
      image.src = zodiacSign[i].image;
      console.log(sign, image.src);
      horoscope.innerHTML = zodiacSign[i].horoscope;
      return;
    }
  }
}