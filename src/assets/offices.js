// Offices list, organized by country and region
/*
{
  country: '',
  city: '',
  description: '',
  latLon: [],
},
*/

const canada = [
  {
    id: 1,
    country: 'Canada',
    city: 'Ottawa',
    description: '343 Preston Street; 11th Floor;  Ottawa, ON K1S 1N4',
    latLon: [45.402219670161266, -75.70945091534202],
  },
  {
    id: 2,
    country: 'Canada',
    city: 'Toronto',
    description: '5200 Yonge Street; North York, ON M2N 5P6',
    latLon: [43.77062401019482, -79.41369407892518],
  },
];
const mexico = [
  {
    id: 3,
    country: 'Mexico',
    city: 'Guadalajara',
    description: 'Av. Americas 1254; 20th and 21th Floor; Guadalajara, Jalisco 44610',
    latLon: [20.697755836374323, -103.3728771598861],
  },
]
const unitedStates = [
  {
    id: 4,
    country: 'United States',
    city: 'Newtown, PA',
    description: '41 University Drive; Suite 202; Newtown, PA18940; USA',
    latLon: [40.22293519187001, -74.905772],
  },
  {
    id: 5,
    country: 'United States',
    city: 'Bellevue, WA',
    description: '110 110th Ave. NE; Suite 310; Bellevue, WA 98004; USA',
    latLon: [47.61147076578867, -122.19321385988611],
  },
  {
    id: 6,
    country: 'United States',
    city: 'Boston, MA',
    description: '21 Drydock Avenue; Suite 410 W; Boston, MA 02210; USA',
    latLon: [42.344467498292964, -71.03103774443031],
  },
  {
    id: 7,
    country: 'United States',
    city: 'Conshohocken, PA',
    description: '1020 Spting Mill Avenue; Suite 100; Conshocken, Pa 19428; USA',
    latLon: [40.07710779958993, -75.28928837164106],
  },
  {
    id: 8,
    country: 'United States',
    city: 'Los Angeles, CA',
    description: '11601 Wilshire Blvd; Suite 350; Los Angeles, CA 90025; USA',
    latLon: [34.05110226380327, -118.46021170794789],
  },
  {
    id: 9,
    country: 'United States',
    city: 'New York, NY',
    description: '275 Seventh Ave; 20th Floor, Suite 2002; New York, NY 10001; USA',
    latLon: [40.74557240000002, -73.9941437598861],
  },
  {
    id: 10,
    country: 'United States',
    city: 'Philadelphia, PA',
    description: '30 South 15th Street; 9th Floor; Philadelphia, PA 19102; USA',
    latLon: [39.95156007942195, -75.16579097333975],
  },
  {
    id: 11,
    country: 'United States',
    city: 'San Francisco, CA',
    description: '222 Kearny Street; Suite 308; San Francisco, CA 94108; USA',
    latLon: [37.79021310000002, -122.40348525988608],
  },
  {
    id: 12,
    country: 'United States',
    city: 'San Jose, CA',
    description: '2055 Gateway Place; Suite 510; San Jose, CA 95110; USA',
    latLon: [37.371635453466354, -121.92528974458014],
  },
  {
    id: 13,
    country: 'United States',
    city: 'Washington D.C',
    description: '7901 Jones Branch Drive; Suite 400; McLean, VA 22102; USA',
    latLon: [38.92608612614148, -77.2188834151838],
  },
]

const americas = [...canada, ...mexico, ...unitedStates];

const austria = [
  {
    country: 'Austria',
    city: 'Vienna',
    description: 'Nottendorfer Gasse 11; 1030 Wien; Austria',
    latLon: [48.19149884309225, 16.412530028835885],
  },
]
const bulgaria = [
  {
    country: 'Bulgaria',
    city: 'Sofia',
    description: '69 Bulgaria Blvd.; Tower B, fl.10-11; 1404 Sofia; Bulgaria',
    latLon: [42.66422774074906, 23.287811468544366],
  },
];
const czechRepublic = [
  {
    country: 'Czech Republic',
    city: 'Prague',
    description: 'City Tower Building; Hvezdova 2b; Prague 4; Czech Republic',
    latLon: [50.050427689127, 14.436123824848595],
  },
];
const france = [
  {
    country: 'France',
    city: 'Paris',
    description: '15 Rue de Milan; 75009 Paris; France',
    latLon: [48.878696267537975, 2.3279389558672365],
  },
];
const germany = [
  {
    country: 'Germany',
    city: 'Frankfurt am Main',
    description: 'Franklinstrasse 56; 60486 Frankfurt am Main; Germany',
    latLon: [],
  },
];
const hungary = [
  {
    country: 'Hungary',
    city: 'Budapest',
    description: 'Bókay János Str. 44-46; Budapest, 1083; Hungary',
    latLon: [47.48546889472002, 19.07932143595573],
  },
  {
    country: 'Hungary',
    city: 'Debrecen',
    description: 'Tüzér Str. 4; Forest Offices; Debrecen, 4028; Hungary',
    latLon: [47.5468789, 21.6386943],
  },
  {
    country: 'Hungary',
    city: 'Szeged',
    description: 'Felső Tisza-Part 25; Szeged, 6723; Hungary',
    latLon: [46.25840492597624, 20.165689134638566],
  },
];
const ireland = [
  {
    country: 'Ireland',
    city: 'Dublin',
    description: 'Grattan House; Temple Road; Blackrock, Co. Dublin; A94 FA39; Ireland',
    latLon: [53.300529384559546, -6.176148781164412],
  },
];
const italy = [
  {
    country: 'Italy',
    city: 'Milan',
    description: 'EPAM Systems Netherlands B.V (Italy BRANCH); Via Paleocapa Pietro 7, 201121 Milano (MI); Italy',
    latLon: [45.46938863183013, 9.175235411356253],
  },
];
const malta = [
  {
    country: 'Malta',
    city: 'Birkirkara',
    description: '33, Triq G.F. Agius De Soldanis; BKR 4850. Birkirkara; Malta',
    latLon: [35.89590059763892, 14.47229554011324],
  },
];
const netherlands = [
  {
    country: 'Netherlands',
    city: 'Delft',
    description: 'Delftechpark 37j; 2628 XJ, Delft Netherlands',
    latLon: [51.9975209, 4.3834481],
  },
  {
    country: 'Netherlands',
    city: 'Hoofdorp',
    description: 'Mercuriusplein 1; 2132 HA, Hoofddorp; Netherlands',
    latLon: [52.2930407, 4.6950908],
  },
];
const poland = [
  {
    country: 'Poland',
    city: 'Gdańsk',
    description: 'Al. Grunwaldzka 472E; 80-309 Gdańsk; Poland',
    latLon: [54.4027688, 18.5693326],
  },
  {
    country: 'Poland',
    city: 'Katowice',
    description: 'Chorzowska Str. 148; 40-101 Katowice; Poland',
    latLon: [50.270544, 18.9948705],
  },
  {
    country: 'Poland',
    city: 'Kraków',
    description: 'Opolska Str. 114; 31-323 Kraków; Poland',
    latLon: [50.0889237, 19.9465505],
  },
  {
    country: 'Poland',
    city: 'Warsaw',
    description: 'ul. Grzybowska 62; Browary Warszawskie building J, 9th floor; 00-844 Warszawa; Poland',
    latLon: [52.2340597, 20.984151],
  },
  {
    country: 'Poland',
    city: 'Wrocaław',
    description: 'Traugutta 43/45; City Forum, bud. City one, p. 2; 50-416 Wrocław; Poland',
    latLon: [51.1056408, 17.0456583],
  },
];
const romania = [
  {
    country: 'Romania',
    city: 'Bucharest',
    description: '6-8 Corneliu Coposu blvd; Unirii View Building 2nd Floor, Sector 3 030167, Bucharest; Romania',
    latLon: [44.431017679102354, 26.109547226879382],
  },
];
const spain = [
  {
    country: 'Spain',
    city: 'Malaga',
    description: 'Av. Imperio Argentina, 19-21; 2º Planta; 29004 Málaga; España',
    latLon: [],
  },
];
const sweden = [
  {
    country: 'Sweden',
    city: 'Göteborg',
    description: 'Lilla Nygatan 2; 411-09 Göteborg; Sweden',
    latLon: [57.704438,11.970493],
  },
  {
    country: 'Sweden',
    city: 'Stockholm',
    description: 'Kungsgatan 50; 111 35 Stockholm; Sweden',
    latLon: [59.3351022,18.058788],
  },
];
const switzerland = [
  {
    country: 'Switzerland',
    city: 'Glattpark',
    description: 'Boulevard Lilienthal 2; 8152 Glattpark (Opfikon); Switzerland',
    latLon: [47.4246309,8.5607246],
  },
];
const ukraine = [
  {
    country: 'Ukraine',
    city: 'Dnipro',
    description: 'Barykadna, 16, 5 floor; 49044 Dnipro; Ukraine',
    latLon: [48.4625959,35.0530123],
  },
  {
    country: 'Ukraine',
    city: 'Kharkiv',
    description: '33G 23 Serpnya Street; 61072 Kharkiv; Ukraine',
    latLon: [50.0354614,36.2178303],
  },
  {
    country: 'Ukraine',
    city: 'Kyiv: Registered Office',
    description: '28 Fizkultury Street; 03150 Kyiv; Ukraine',
    latLon: [50.431987142676206, 30.51355182727175]
  },
  {
    country: 'Ukraine',
    city: 'Kyiv: Visitors Office',
    description: '14B Kudryashova Street; 03035 Kyiv; Ukraine',
    latLon: [50.4314743,30.4852715],
    
  },
  {
    country: 'Ukraine',
    city: 'Lviv',
    description: '14 Uhorska Street; Building 1; 79000 Lviv; Ukraine',
    latLon: [49.8101251,24.0433699],
    
  },
  {
    country: 'Ukraine',
    city: 'Vinnytsia',
    description: '52 Ovodova Street; 21000 Vinnytsia; Ukraine',
    latLon: [49.2346493,28.3295511],
  },
]
const unitedKingdom = [
  {
    country: 'United Kingdom',
    city: 'Liverpool',
    description: 'Liverpool Science Park; 131 Mount Pleasant; Liverpool, L3 5TF; United Kingdom',
    latLon: [53.4038423,-2.9697282],
  },
  {
    country: 'United Kingdom',
    city: 'London',
    description: '2 Finsbury Avenuew; 5th floor; London, EC2M 2PG; United Kingdom',
    latLon: [51.5199906,-0.0870466],
  },
  {
    country: 'United Kingdom',
    city: 'Manchester',
    description: 'Dalton Place; John Dalton St; Manchester, M2 6DS; United Kingdom',
    latLon: [53.4806701,-2.2484733],
  },
  {
    country: 'United Kingdom',
    city: 'Newcastle',
    description: '55 Degrees North; Pilgrim Street; Newcastle Upon Tyne; NE1 6BL; United Kingdom',
    latLon: [54.9716128,-1.6088668],
  },
];

const europe = [
  ...austria,
  ...bulgaria,
  ...czechRepublic,
  ...france,
  ...germany,
  ...hungary,
  ...ireland,
  ...italy,
  ...malta,
  ...netherlands,
  ...poland,
  ...romania,
  ...spain,
  ...sweden,
  ...switzerland,
  ...ukraine,
  ...unitedKingdom,
];
// ASIA

const australia = [
  {
    id: 3001,
    country: 'Australia',
    city: 'Sydney',
    description: 'Level 199, 68 Pit Street; Sydeny, NSW, 2000; Australia',
    latLon: [-33.8661226,151.2083505],
  },
];
// Can't get correct location from Baidu
// const china = [
//   {
//     country: 'China',
//     city: 'Guangzhou',
//     description: 'Room 1205, Agile Center, No. 26, Huaxia Road, Tianhe District, Guangzhou, China',
//     latLon: [12615767.987134637,2630824.26],
//   },
//   {
//     country: 'China',
//     city: '广州',
//     description: '广州市天河区华夏路 26号雅居乐中心1205房',
//     latLon: [12615767.987134637,2630824.26],
//   },
//   {
//     country: 'China',
//     city: 'Shanghai',
//     description: '',
//     latLon: [13520699.755,3638004.05],
//   },
//   {
//     country: 'China',
//     city: '上海',
//     description: '上海徐汇区 永嘉路570 弄5栋3楼',
//     latLon: [13520699.755,3638004.05],
//   },
//   {
//     country: 'China',
//     city: 'Shenzen',
//     description: '3/F, Block 5, Vision Shenzhen Business Park, 9th Gaoxin South Road, Shenzhen Hi-tech Industrial Park, Nanshan District, Shenzhen, Guangdong, China 518057',
//     latLon: [12685542.16054195,2559324.8942080904],
//   },
//   {
//     country: 'China',
//     city: '深圳',
//     description: '中国广东省深圳市 南山区高新南九道 威新软件园5号楼3楼 邮编518057',
//     latLon: [],
//   },
//   {
//     country: 'China',
//     city: 'Suzhou',
//     description: 'Building 12, Creative Industrial Park, 328 Xinghu Street, Suzhou Industrial Park, Suzhou, China 215123',
//     latLon: [],
//   },
//   {
//     country: 'China',
//     city: '苏州',
//     description: '中国江苏省苏州市 苏州工业园区星湖街328号 创意产业园内12号楼 邮编215123',
//     latLon: [],
//   },
// ];
const hongKongSar = [
  {
    country: 'HK',
    city: 'Hong Kong SAR',
    description: '26F&17F, The Wellington Tower, 198 Wellington Street, Central, HK',
    latLon: [22.2849611,114.1531739],
  },
];
const india = [
  {
    country: 'India',
    city: 'Bangalore',
    description: 'Smartworks, Global Technology Park, Block C, Outer Ring Rd, Adarsh Palm Retreat, Bellandur, Bengaluru, Karnataka 560103; India',
    latLon: [12.924705112361544, 77.68305719821109],
  },
  {
    country: 'India',
    city: 'Hyderabad',
    description: '10, 11 & 12th Floors, Salarpuria Sattva Knowledge City, Plot No. 2, Phase - 1, Survey No. 83/1, Raidurgam Village, Serilingampally Mandal, Hyderabad, Telangana - 500081; India',
    latLon: [17.43224837658413, 78.38193848331662],
  },
  {
    country: 'India',
    city: 'Pune',
    description: '100,101, Unit No 704, 7th Floor, Sai Radhe, Kennedy Road, Pune - 411001, Maharashtra India',
    latLon: [18.53133661965618, 73.87086084364539],
  },
];
const japan = [
  {
    country: 'Japan',
    city: 'Tokyo',
    description: 'Floor 1-10-11 Shibadaimon Centre Building 10th Shibadaimon Minato-ku Tokyo 105-0012 Japan',
    latLon: [35.65861641388359, 139.75321182674378],
  },
];
const singapore = [
  {
    country: 'Singapore',
    city: 'Singapore',
    description: '75 High Street; 3F, Singapore 179435',
    latLon: [1.290200086613372, 103.84971482669978],
  },
];
const unitesArabEmirates = [
  {
    country: 'United Arab Emirates',
    city: 'Dubai',
    description: 'EPAM Systems FZ-LLC Dubai Branch; 2307 Arenco Tower, Dubai Media City; PO Box 501929 Dubai; United Arab Emirates',
    latLon: [25.09166416045329, 55.158467028214915],
  },
];
const vietnam = [
  {
    country: 'Vietnam',
    city: 'Ho Chi Minh City',
    description: '259 Tran Hung Dao St; MB Sunny Tower; 13th Floor; Co Giang Ward; District 1, Ho Chi Minh; Vietnam',
    latLon: [10.763780960621649, 106.69229802761213],
  },
];

const asia = [
  ...australia,
  // ...china,
  ...hongKongSar,
  ...india,
  ...japan,
  ...singapore,
  ...unitesArabEmirates,
  ...vietnam
];

// CIS
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
  // Uzbekistan
  {
    id: 4011,
    country: 'Uzbekistan',
    city: 'Tashkent',
    description: '18/1 Aybek Street, Mirabad district; Atrium Business Center, 5th floor; 100015 Tashkent; Republic of Uzbekistan',
    latLon: [41.296349, 69.2728563],
  },
];

const cis = [...armenia, ...belarus, ...kazahstan, ...russia]

const offices = [...americas, ...europe, ...asia, ...cis];

export { offices }