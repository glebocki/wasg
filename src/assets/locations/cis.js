const armenia = [
  {
    id: 4001,
    country: 'Armenia',
    city: 'Yerevan',
    description: '15 Khorenatsi Street; Elite Plaza Business Center; 0010 Yerevan; Armenia',
    latLon: [40.17492308405132, 44.50986461300385],
  },
];
const belarus = [
  {
    id: 4002,
    country: 'Belarus',
    city: 'Brest',
    description: '206 Moskovskaya Street; 224023 Brest; Belarus',
    latLon: [52.09608471516965, 23.741209613598414],
  },
  {
    id: 4003,
    country: 'Belarus',
    city: 'Gomel',
    description: '80 Rechitsky Avenue; 246012 Gomel; Belarus',
    latLon: [52.40516390846986, 30.921129146027308],
  },
  {
    id: 4004,
    country: 'Belarus',
    city: 'Grodno',
    description: '87B Gorkogo Street; 230005 Grodno; Belarus',
    latLon: [53.70459488005563, 23.81907285583925],
  },
  {
    id: 4005,
    country: 'Belarus',
    city: 'Minsk',
    description: '1/1 Academician Kuprevich Street; Suite 110; 220141 Minsk; Belarus',
    latLon: [53.9269101286451, 27.68168534382854],
  },
  {
    id: 4006,
    country: 'Belarus',
    city: 'Mogilev',
    description: '57 Pervomayskaya Street; Suite 701; 212030 Mogilev; Belarus',
    latLon: [53.9044955543683, 30.339524203620297],
  },
  {
    id: 4007,
    country: 'Belarus',
    city: 'Vitebsk',
    description: '11-a Stroitelei Avenue; Suite 311; 210032 Vitebsk; Belarus',
    latLon: [55.170927844878655, 30.214235642328784],
  },
];
const kazahstan = [
  {
    id: 4008,
    country: 'Kazakhstan',
    city: 'Almaty',
    description: '135/10a Zhibek Zholy Avenue; Office 2081; 050000 Almaty; Kazakhstan',
    latLon: [43.26148271843864, 76.92833009776706],
  },
  {
    id: 4009,
    country: 'Kazakhstan',
    city: 'Karaganda',
    description: '58/3 Ermekova Street 100009 Karaganda; Kazakhstan',
    latLon: [49.79252186736586, 73.09043324787659],
  },
  {
    id: 4010,
    country: 'Kazakhstan',
    city: 'Kur-Sultan',
    description: '6 Saryarka Avenue; Office 440; 010000 Nur-Sultan; Kazakhstan',
    latLon: [51.161468516539486, 71.4093119112999],
  },
];
const russia = [
  {
    id: 4011,
    country: 'Russia',
    city: 'Moscow',
    description: '9th Radialnaya Street; Building 2; 115404 Moscow; Russia',
    latLon: [55.61162740363065, 37.66568672883588],
  },
  // {
  //   id: 4011,
  //   country: 'Russia',
  //   city: 'Bryansk',
  //   description: '15/1 Institutskaya Street; 241035 Bryansk; Russia',
  //   latLon: [],
  // },
  {
    id: 4011,
    country: 'Russia',
    city: 'Izhevsk',
    description: '150 V. Sivkova Street; 426000 Izhevsk; Russia',
    latLon: [56.84160516361102, 53.207948711356245],
  },
  {
    id: 4011,
    country: 'Russia',
    city: 'Krasnodar',
    description: '48 Odesskaya Street; Office 705; 350020 Krasnodar Russia',
    latLon: [45.0483125, 38.981623],
  },
  {
    id: 4011,
    country: 'Russia',
    city: 'Nizhny Novogorod',
    description: '30 Poltavskaya Street; 603089 Nizhny Novogorod; Russia',
    latLon: [56.313587861667756, 44.028410554752526],
  },
  {
    id: 4011,
    country: 'Russia',
    city: 'Ryazan',
    description: '7 Moskovskoye Shosse; 390013 Ryazan; Russia',
    latLon: [54.632039949405865, 39.69615698252037],
  },
  {
    id: 4011,
    country: 'Russia',
    city: 'Saint Petersburg',
    description: '22/2 Zastavskaya Street; MegaPark; 196084 Saint Petersbug; Russia',
    latLon: [59.888366701657425, 30.32756012844853],
  },
  // {
  //   id: 4011,
  //   country: 'Russia',
  //   city: 'Samara',
  //   description: '21 Michuriana Street; 443110 Samara; Russia',
  //   latLon: [],
  // },
  {
    id: 4011,
    country: 'Russia',
    city: 'Saratov',
    description: '37 Tankistov Street; 410019 Saratov; Russia',
    latLon: [51.5512113, 46.0159937],
  },
  {
    id: 4011,
    country: 'Russia',
    city: 'Sergiev Posad',
    description: '9a Druzhby Street; 141301 Sergiev Posad; Russia',
    latLon: [56.3289788, 38.1418482],
  },
  // {
  //   id: 4011,
  //   country: 'Russia',
  //   city: 'Togliatti',
  //   description: '31E Yubileynaya Street; 445037 Togliatti; Russia',
  //   latLon: [],
  // },
  // {
  //   id: 4011,
  //   country: 'Russia',
  //   city: 'Tver',
  //   description: '14 Pobedy Ave; 170002 Tver; Russia',
  //   latLon: [],
  // },
  // {
  //   id: 4011,
  //   country: 'Russia',
  //   city: 'Volograd',
  //   description: '22 Raboche-Krestyanskaya Street; 400074 Volograd; Russia',
  //   latLon: [],
  // },
]
const uzbekistan = [
  {
    id: 4011,
    country: 'Uzbekistan',
    city: 'Tashkent',
    description: '18/1 Aybek Street, Mirabad district; Atrium Business Center, 5th floor; 100015 Tashkent; Republic of Uzbekistan',
    latLon: [41.296349, 69.2728563],
  },
];

export const cis = [...armenia, ...belarus, ...kazahstan, ...russia, ...uzbekistan]