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

export const asia = [
  ...australia,
  // ...china,
  ...hongKongSar,
  ...india,
  ...japan,
  ...singapore,
  ...unitesArabEmirates,
  ...vietnam
];
