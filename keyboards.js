const yearsList1 = [[{ text: "2021" }], [{ text: "2022" }], [{ text: "2023" }]];
const yearsList2 = [[{ text: "2022" }], [{ text: "2023" }]];
const yearsList3 = [[{ text: "2023" }]];
const yearsList4 = [[{ text: "2022" }]];
const yearsList5 = [[{ text: "2021" }], [{ text: "2022" }]];

const dostavka = [[{ text: "Авиа" }], [{ text: "Наземный" }]];

const makes = [
    [{ text: "ASTON MARTIN" }],
    [{ text: "AUDI" }],
    [{ text: "BENTLEY" }],
    [{ text: "BMW" }],
    [{ text: "JEEP" }],
    [{ text: "LAMBORGHINI" }],
    [{ text: "LAND ROVER" }],
    [{ text: "LEXUS" }],
    [{ text: "MERCEDES-BENZ" }],
    [{ text: "ROLLS-ROYCE" }],
    [{ text: "RAM" }],
    [{ text: "TOYOTA" }],
    [{ text: "GMS" }],
    [{ text: "PORSCHE" }],
    [{ text: "FERRARI" }],
    [{ text: "CADILLAC" }],
    [{ text: "В главное меню" }],
];

const astonMartinModels = [
    [{ text: "DB11" }],
    [{ text: "DBS COUPE" }],
    [{ text: "DBX" }],
    [{ text: "VANTAGE" }],
    [{ text: "В главное меню" }],
];

const audiModels = [
    [{ text: "Q7" }],
    [{ text: "Q8" }],
    [{ text: "Q8 RCQ" }],
    [{ text: "В главное меню" }],
];

const bentleyModels = [
    [{ text: "BENTAYGA" }],
    [{ text: "CONTINENTAL GT" }],
    [{ text: "FLYING SPUR" }],
    [{ text: "FLYING SPUR 20MY" }],
    [{ text: "В главное меню" }],
];

const bmwModels = [
    [{ text: "7-series" }],
    [{ text: "7-series М" }],
    [{ text: "8-series" }],
    [{ text: "X5" }],
    [{ text: "X6" }],
    [{ text: "X7" }],
    [{ text: "760" }],
    [{ text: "740D" }],
    [{ text: "В главное меню" }],
];

const jeepModels = [[{ text: "Wrangler" }], [{ text: "В главное меню" }]];

const lamborghiniModels = [
    [{ text: "AVENTADOR" }],
    [{ text: "HURACAN" }],
    [{ text: "URUS" }],
    [{ text: "В главное меню" }],
];

const landRoverModels = [
    [{ text: "RANGE ROVER" }],
    [{ text: "RANGE ROVER SPORT" }],
    [{ text: "В главное меню" }],
];

const lexusModels = [
    [{ text: "GX 460" }],
    [{ text: "LC500" }],
    [{ text: "LS 500" }],
    [{ text: "LX 570" }],
    [{ text: "LX 600" }],
    [{ text: "LX500 D" }],
    [{ text: "LX450D" }],
    [{ text: "В главное меню" }],
];

const mercedesModels = [
    [{ text: "AMG CLS 53" }],
    [{ text: "AMG GLS 63" }],
    [{ text: "GLE 450" }],
    [{ text: "GLS 450" }],
    [{ text: "GLS 580" }],
    [{ text: "S 350" }],
    [{ text: "S 560" }],
    [{ text: "E 450" }],
    [{ text: "GLE 53" }],
    [{ text: "GLS 450" }],
    [{ text: "S 400D" }],
    [{ text: "S 450" }],
    [{ text: "S 500" }],
    [{ text: "S 580" }],
    [{ text: "AMG G 63" }],
    [{ text: "G700,G800 Brabus и G63 4x4" }],
    [{ text: "G 350D" }],
    [{ text: "G 400D" }],
    [{ text: "G 500" }],
    [{ text: "G 500 AMG" }],
    [{ text: "GLS 600 4MATIC MAYBACH" }],
    [{ text: "S 580 MAYBACH" }],
    [{ text: "S 680 MAYBACH" }],
    [{ text: "V 220 D V-CLASS" }],
    [{ text: "V 250" }],
    [{ text: "V 250 D V-CLASS" }],
    [{ text: "V 250 V-CLASS" }],
    [{ text: "V 300" }],
    [{ text: "VITO 114" }],
    [{ text: "VITO 119 CDI" }],
    [{ text: "VITO 121" }],
    [{ text: "VITO TOURER 110 CDI" }],
    [{ text: "В главное меню" }],
];

const rollsRoyceModels = [
    [{ text: "CULLINAN" }],
    [{ text: "CULLINAN BLACK BADGE" }],
    [{ text: "DAWN" }],
    [{ text: "GHOST" }],
    [{ text: "GHOST BLACK BADGE" }],
    [{ text: "GHOST EWB" }],
    [{ text: "PHANTOM" }],
    [{ text: "PHANTOM EWB" }],
    [{ text: "WRAITH" }],
    [{ text: "В главное меню" }],
];

const ramModels = [
    [{ text: "PRX" }],
    [{ text: "TRX" }],
    [{ text: "В главное меню" }],
];

const toyotaModels = [
    [{ text: "Seqvoya" }],
    [{ text: "LAND CRUISER 300" }],
    [{ text: "В главное меню" }],
];

const gmsModels = [[{ text: "Unknown" }], [{ text: "В главное меню" }]];

const porscheModels = [
    [{ text: "718 CAYMAN GT4" }],
    [{ text: "CAYENNE" }],
    [{ text: "CAYENNE GTS" }],
    [{ text: "CAYENNE TURBO" }],
    [{ text: "MACAN" }],
    [{ text: "MACAN GTS" }],
    [{ text: "MACAN S" }],
    [{ text: "MACAN TURBO" }],
    [{ text: "MACAN UT" }],
    [{ text: "PANAMERA" }],
    [{ text: "PANAMERA GTS" }],
    [{ text: "718 BOXSTER" }],
    [{ text: "718 BOXSTER GTS" }],
    [{ text: "718 BOXSTER S" }],
    [{ text: "718 CAYMAN" }],
    [{ text: "718 CAYMAN GTS" }],
    [{ text: "718 CAYMAN S" }],
    [{ text: "911 CARRERA" }],
    [{ text: "911 CARRERA 4" }],
    [{ text: "911 CARRERA 4S" }],
    [{ text: "911 CARRERA S" }],
    [{ text: "911 GT2 RS" }],
    [{ text: "911 GT3" }],
    [{ text: "911 TARGA 4" }],
    [{ text: "911 TURBO" }],
    [{ text: "911 TURBO S" }],
    [{ text: "В главное меню" }],
];

const ferrariModels = [
    [{ text: "F8 SPIDER" }],
    [{ text: "F8 TRIBUTO" }],
    [{ text: "PORTOFINO M" }],
    [{ text: "ROMA" }],
    [{ text: "SF90 STRADALE" }],
    [{ text: "В главное меню" }],
];

const cadillacModels = [
    [{ text: "ESCALADE" }],
    [{ text: "ESCALADE XT5" }],
    [{ text: "XT4" }],
    [{ text: "XT5" }],
    [{ text: "XT6" }],
    [{ text: "В главное меню" }],
];

const astonMartinCapacity = {
    db11: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    dbsCoupe: [
        [{ text: "5200" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    dbx: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    vantage: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const audiCapacity = {
    q7: [[{ text: "3000" }], [{ text: "Назад" }], [{ text: "В главное меню" }]],
    q8: [[{ text: "3000" }], [{ text: "Назад" }], [{ text: "В главное меню" }]],
    q8Rs: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const bentleyCapacity = {
    bentayga: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    continentalGt: [
        [{ text: "4000" }],
        [{ text: "6000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    flyingSpur: [
        [{ text: "6000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    flyingSpurMy: [
        [{ text: "6000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const bmwCapacity = {
    ser7: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ser7M: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ser8: [
        [{ text: "3000" }],
        [{ text: "4400" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    x5: [
        [{ text: "3000" }],
        [{ text: "4400" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    x6: [
        [{ text: "3000" }],
        [{ text: "4400" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    x7: [
        [{ text: "3000" }],
        [{ text: "4400" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ser760: [
        [{ text: "4400" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ser740D: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const jeepCapacity = {
    wrangler: [
        [{ text: "2000" }],
        [{ text: "3600" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const lamborghiniCapacity = {
    aventador: [
        [{ text: "6500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    urus: [
        [{ text: "4000" }],
        [{ text: "6000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    huracan: [
        [{ text: "5200" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const landRoverCapacity = {
    rangeRover: [
        [{ text: "3000" }],
        [{ text: "4400" }],
        [{ text: "5000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    rangeRoverSport: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const lexusCapacity = {
    gx460: [
        [{ text: "4600" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    lc500: [
        [{ text: "5000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ls500: [
        [{ text: "3500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    lx570: [
        [{ text: "5700" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    lx600: [
        [{ text: "3500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    lx500D: [
        [{ text: "3300" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    lx450D: [
        [{ text: "4500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const mercedesCapacity = {
    amgCls53: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    amgGls63: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gle450: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gls450: [
        [{ text: "3000" }],
        [{ text: "4500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gls580: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s350: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s560: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    e450: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gle53: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gls45: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s400D: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s450: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s500: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s580: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    amgG63: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    g700: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    g350D: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    g400D: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    g500: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    g500amg: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gls6004matic: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s580maybach: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    s680maybach: [
        [{ text: "6000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    v220D: [
        [{ text: "2200" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    v250: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    v250D: [
        [{ text: "2200" }],
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    v250V: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    v300: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    vito114: [
        [{ text: "2200" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    vito119cdi: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    vito121: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    vitoTourer: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const rollsRoyceCapacity = {
    cullinan: [
        [{ text: "6800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cullinanBlackBadge: [
        [{ text: "6800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    dawn: [
        [{ text: "6600" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ghost: [
        [{ text: "6800" }],
        [{ text: "4500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ghostBlackBadge: [
        [{ text: "6800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    ghostEwb: [
        [{ text: "6800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    phantom: [
        [{ text: "6800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    phantomEwb: [
        [{ text: "6800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    wraith: [
        [{ text: "6600" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const ramCapacity = {
    prx: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    trx: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const toyotaCapacity = {
    sequoia: [
        [{ text: "5700" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    lc300: [
        [{ text: "3500" }],
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const gmsCapacity = {
    unknown: [
        [{ text: "unknown" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const porscheCapacity = {
    cayman718gt4: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cayenne: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cayenneGts: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cayenneTurbo: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    macan: [
        [{ text: "2000" }],
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    macanGts: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    macanS: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    macanTurbo: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    macanUt: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    panamera: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    panameraGts: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    boxster718: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    boxster718Gts: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    boxster718S: [
        [{ text: "2500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cayman718: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cayman718Gts: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    cayman718S: [
        [{ text: "2500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    carrera911: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    carrera9114: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    carrera9114S: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    carrera911S: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gt2Rs911: [
        [{ text: "3800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    gt3911: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    targa9114: [
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    turbo911: [
        [{ text: "3800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    turboS911: [
        [{ text: "3800" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const ferrariCapacity = {
    f8Spider: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    f8Tributo: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    portofinoM: [
        [{ text: "3900" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    roma: [
        [{ text: "3900" }],
        [{ text: "4500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    sf90Stradale: [
        [{ text: "4000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

const cadillacCapacity = {
    escalade: [
        [{ text: "6200" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    escaladeXt5: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    xt4: [
        [{ text: "2000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    xt5: [
        [{ text: "2000" }],
        [{ text: "4500" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
    xt6: [
        [{ text: "2000" }],
        [{ text: "3000" }],
        [{ text: "Назад" }],
        [{ text: "В главное меню" }],
    ],
};

module.exports = {
    makes,
    dostavka,
    yearsList1,
    yearsList2,
    yearsList3,
    yearsList4,
    yearsList5,
    astonMartinModels,
    audiModels,
    bentleyModels,
    bmwModels,
    jeepModels,
    lamborghiniModels,
    landRoverModels,
    lexusModels,
    mercedesModels,
    rollsRoyceModels,
    ramModels,
    toyotaModels,
    gmsModels,
    porscheModels,
    ferrariModels,
    cadillacModels,
    astonMartinCapacity,
    audiCapacity,
    bentleyCapacity,
    bmwCapacity,
    jeepCapacity,
    lamborghiniCapacity,
    landRoverCapacity,
    lexusCapacity,
    mercedesCapacity,
    rollsRoyceCapacity,
    ramCapacity,
    toyotaCapacity,
    gmsCapacity,
    porscheCapacity,
    ferrariCapacity,
    cadillacCapacity,
};
