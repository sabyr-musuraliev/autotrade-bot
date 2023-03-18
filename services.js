const keyboards = require("./keyboards");

const coefficientByYear = (year, engine, capacity) => {
    let coeff = 0;
    if (
        (engine === "Дизель" && capacity <= 2499) ||
        (engine === "Бензин/Гибрид/Газ" && capacity <= 2999)
    ) {
        switch (year) {
            case 2023:
                coeff = 5.17;
                break;
            case 2022:
                coeff = 4.74;
                break;
            case 2021:
                coeff = 4.31;
                break;
            case 2020:
                coeff = 3.88;
                break;
            case 2019:
                coeff = 3.45;
                break;
            case 2018:
                coeff = 3.02;
                break;
            case 2017:
                coeff = 2.58;
                break;
            default:
                break;
        }
    } else if (
        (engine === "Дизель" && capacity >= 2500) ||
        (engine === "Бензин/Гибрид/Газ" && capacity >= 3000)
    ) {
        switch (year) {
            case 2023:
                coeff = 7.76;
                break;
            case 2022:
                coeff = 7.11;
                break;
            case 2021:
                coeff = 6.46;
                break;
            case 2020:
                coeff = 5.82;
                break;
            case 2019:
                coeff = 5.17;
                break;
            case 2018:
                coeff = 4.52;
                break;
            case 2017:
                coeff = 3.88;
                break;
            default:
                break;
        }
    }
    return coeff;
};

const getPercent = (year) => {
    let percent = 0.2;
    if (year >= 2021) {
        percent = 0.15;
    }
    return percent;
};

const getModel = (make) => {
    let keybd;
    switch (make) {
        case "ASTON MARTIN":
            keybd = keyboards.astonMartinModels;
            break;
        case "AUDI":
            keybd = keyboards.audiModels;
            break;
        case "BENTLEY":
            keybd = keyboards.bentleyModels;
            break;
        case "BMW":
            keybd = keyboards.bmwModels;
            break;
        case "JEEP":
            keybd = keyboards.jeepModels;
            break;
        case "LAMBORGHINI":
            keybd = keyboards.lamborghiniModels;
            break;
        case "LAND ROVER":
            keybd = keyboards.landRoverModels;
            break;
        case "LEXUS":
            keybd = keyboards.lexusModels;
            break;
        case "MERCEDES-BENZ":
            keybd = keyboards.mercedesModels;
            break;
        case "ROLLS-ROYCE":
            keybd = keyboards.rollsRoyceModels;
            break;
        case "RAM":
            keybd = keyboards.ramModels;
            break;
        case "TOYOTA":
            keybd = keyboards.toyotaModels;
            break;
        case "GMS":
            keybd = keyboards.gmsModels;
            break;
        case "PORSCHE":
            keybd = keyboards.porscheModels;
            break;
        case "FERRARI":
            keybd = keyboards.ferrariModels;
            break;
        case "CADILLAC":
            keybd = keyboards.cadillacModels;
            break;
        default:
            break;
    }
    return keybd;
};

const getYear = (capacity, model) => {
    let keybd = keyboards.yearsList1;

    if (model === "760" || model === "740D") {
        keybd = keyboards.yearsList3;
    }
    if (
        model === "LC500" ||
        model === "LS 500" ||
        model === "V 250" ||
        (model === "MACAN" && capacity === "3000") ||
        model === "MACAN GTS" ||
        model === "MACAN TURBO" ||
        model === "MACAN UT" ||
        model === "718 BOXSTER GTS" ||
        model === "718 BOXSTER S" ||
        model === "718 CAYMAN" ||
        model === "718 CAYMAN GTS" ||
        model === "718 CAYMAN S" ||
        model === "911 CARRERA" ||
        model === "911 CARRERA 4" ||
        model === "911 CARRERA 4S" ||
        model === "911 CARRERA S" ||
        model === "ESCALADE XT5" ||
        model === "XT6"
    ) {
        keybd = keyboards.yearsList2;
    }
    if (model === "LX 570") {
        keybd = keyboards.yearsList4;
    }
    if (model === "718 BOXSTER" || model === "911 TARGA 4") {
        keybd = keyboards.yearsList5;
    }
    return keybd;
};

const getCapacity = (model) => {
    let keybd;
    switch (model) {
        case "DB11":
            keybd = keyboards.astonMartinCapacity.db11;
            break;
        case "DBS COUPE":
            keybd = keyboards.astonMartinCapacity.dbsCoupe;
            break;
        case "DBX":
            keybd = keyboards.astonMartinCapacity.dbx;
            break;
        case "VANTAGE":
            keybd = keyboards.astonMartinCapacity.vantage;
            break;
        case "Q7":
            keybd = keyboards.audiCapacity.q7;
            break;
        case "Q8":
            keybd = keyboards.audiCapacity.q8;
            break;
        case "Q8 RCQ":
            keybd = keyboards.audiCapacity.q8Rs;
            break;
        case "BENTAYGA":
            keybd = keyboards.bentleyCapacity.bentayga;
            break;
        case "CONTINENTAL GT":
            keybd = keyboards.bentleyCapacity.continentalGt;
            break;
        case "FLYING SPUR":
            keybd = keyboards.bentleyCapacity.flyingSpur;
            break;
        case "FLYING SPUR 20MY":
            keybd = keyboards.bentleyCapacity.flyingSpurMy;
            break;
        case "7-series":
            keybd = keyboards.bmwCapacity.ser7;
            break;
        case "7-series М":
            keybd = keyboards.bmwCapacity.ser7M;
            break;
        case "8-series":
            keybd = keyboards.bmwCapacity.ser8;
            break;
        case "X5":
            keybd = keyboards.bmwCapacity.x5;
            break;
        case "X6":
            keybd = keyboards.bmwCapacity.x6;
            break;
        case "X7":
            keybd = keyboards.bmwCapacity.x7;
            break;
        case "760":
            keybd = keyboards.bmwCapacity.ser760;
            break;
        case "740D":
            keybd = keyboards.bmwCapacity.ser740D;
            break;
        case "Wrangler":
            keybd = keyboards.jeepCapacity.wrangler;
            break;
        case "AVENTADOR":
            keybd = keyboards.lamborghiniCapacity.aventador;
            break;
        case "HURACAN":
            keybd = keyboards.lamborghiniCapacity.huracan;
            break;
        case "URUS":
            keybd = keyboards.lamborghiniCapacity.urus;
            break;
        case "RANGE ROVER":
            keybd = keyboards.landRoverCapacity.rangeRover;
            break;
        case "RANGE ROVER SPORT":
            keybd = keyboards.landRoverCapacity.rangeRoverSport;
            break;
        case "GX 460":
            keybd = keyboards.lexusCapacity.gx460;
            break;
        case "LC500":
            keybd = keyboards.lexusCapacity.lc500;
            break;
        case "LS 500":
            keybd = keyboards.lexusCapacity.ls500;
            break;
        case "LX 570":
            keybd = keyboards.lexusCapacity.lx570;
            break;
        case "LX 600":
            keybd = keyboards.lexusCapacity.lx600;
            break;
        case "LX500 D":
            keybd = keyboards.lexusCapacity.lx500D;
            break;
        case "LX450D":
            keybd = keyboards.lexusCapacity.lx450D;
            break;
        case "AMG CLS 53":
            keybd = keyboards.mercedesCapacity.amgCls53;
            break;
        case "AMG GLS 63":
            keybd = keyboards.mercedesCapacity.amgGls63;
            break;
        case "GLE 450":
            keybd = keyboards.mercedesCapacity.gle450;
            break;
        case "GLS 450":
            keybd = keyboards.mercedesCapacity.gls450;
            break;
        case "GLS 580":
            keybd = keyboards.mercedesCapacity.gls580;
            break;
        case "S 350":
            keybd = keyboards.mercedesCapacity.s350;
            break;
        case "S 560":
            keybd = keyboards.mercedesCapacity.s560;
            break;
        case "E 450":
            keybd = keyboards.mercedesCapacity.e450;
            break;
        case "GLE 53":
            keybd = keyboards.mercedesCapacity.gle53;
            break;
        case "GLS 450":
            keybd = keyboards.mercedesCapacity.gls450;
            break;
        case "S 400D":
            keybd = keyboards.mercedesCapacity.s400D;
            break;
        case "S 450":
            keybd = keyboards.mercedesCapacity.s450;
            break;
        case "S 500":
            keybd = keyboards.mercedesCapacity.s500;
            break;
        case "S 580":
            keybd = keyboards.mercedesCapacity.s580;
            break;
        case "AMG G 63":
            keybd = keyboards.mercedesCapacity.amgG63;
            break;
        case "G700,G800 Brabus и G63 4x4":
            keybd = keyboards.mercedesCapacity.g700;
            break;
        case "G 350D":
            keybd = keyboards.mercedesCapacity.g350D;
            break;
        case "G 400D":
            keybd = keyboards.mercedesCapacity.g400D;
            break;
        case "G 500":
            keybd = keyboards.mercedesCapacity.g500;
            break;
        case "G 500 AMG":
            keybd = keyboards.mercedesCapacity.g500amg;
            break;
        case "GLS 600 4MATIC MAYBACH":
            keybd = keyboards.mercedesCapacity.gls6004matic;
            break;
        case "S 580 MAYBACH":
            keybd = keyboards.mercedesCapacity.s580maybach;
            break;
        case "S 680 MAYBACH":
            keybd = keyboards.mercedesCapacity.s680maybach;
            break;
        case "V 220 D V-CLASS":
            keybd = keyboards.mercedesCapacity.v220D;
            break;
        case "V 250":
            keybd = keyboards.mercedesCapacity.v250;
            break;
        case "V 250 D V-CLASS":
            keybd = keyboards.mercedesCapacity.v250D;
            break;
        case "V 250 V-CLASS":
            keybd = keyboards.mercedesCapacity.v250V;
            break;
        case "V 300":
            keybd = keyboards.mercedesCapacity.v300;
            break;
        case "VITO 114":
            keybd = keyboards.mercedesCapacity.vito114;
            break;
        case "VITO 119 CDI":
            keybd = keyboards.mercedesCapacity.vito119cdi;
            break;
        case "VITO 121":
            keybd = keyboards.mercedesCapacity.vito121;
            break;
        case "VITO TOURER 110 CDI":
            keybd = keyboards.mercedesCapacity.vitoTourer;
            break;
        case "CULLINAN":
            keybd = keyboards.rollsRoyceCapacity.cullinan;
            break;
        case "CULLINAN BLACK BADGE":
            keybd = keyboards.rollsRoyceCapacity.cullinanBlackBadge;
            break;
        case "DAWN":
            keybd = keyboards.rollsRoyceCapacity.dawn;
            break;
        case "GHOST":
            keybd = keyboards.rollsRoyceCapacity.ghost;
            break;
        case "GHOST BLACK BADGE":
            keybd = keyboards.rollsRoyceCapacity.ghostBlackBadge;
            break;
        case "GHOST EWB":
            keybd = keyboards.rollsRoyceCapacity.ghostEwb;
            break;
        case "PHANTOM":
            keybd = keyboards.rollsRoyceCapacity.phantom;
            break;
        case "PHANTOM EWB":
            keybd = keyboards.rollsRoyceCapacity.phantomEwb;
            break;
        case "WRAITH":
            keybd = keyboards.rollsRoyceCapacity.wraith;
            break;
        case "PRX":
            keybd = keyboards.ramCapacity.prx;
            break;
        case "TRX":
            keybd = keyboards.ramCapacity.trx;
            break;
        case "Seqvoya":
            keybd = keyboards.toyotaCapacity.sequoia;
            break;
        case "LAND CRUISER 300":
            keybd = keyboards.toyotaCapacity.lc300;
            break;
        case "Unknown":
            keybd = keyboards.gmsCapacity.unknown;
            break;
        case "718 CAYMAN GT4":
            keybd = keyboards.porscheCapacity.cayman718gt4;
            break;
        case "CAYENNE":
            keybd = keyboards.porscheCapacity.cayenne;
            break;
        case "CAYENNE GTS":
            keybd = keyboards.porscheCapacity.cayenneGts;
            break;
        case "CAYENNE TURBO":
            keybd = keyboards.porscheCapacity.cayenneTurbo;
            break;
        case "MACAN":
            keybd = keyboards.porscheCapacity.macan;
            break;
        case "MACAN GTS":
            keybd = keyboards.porscheCapacity.macanGts;
            break;
        case "MACAN S":
            keybd = keyboards.porscheCapacity.macanS;
            break;
        case "MACAN TURBO":
            keybd = keyboards.porscheCapacity.macanTurbo;
            break;
        case "MACAN UT":
            keybd = keyboards.porscheCapacity.macanUt;
            break;
        case "PANAMERA":
            keybd = keyboards.porscheCapacity.panamera;
            break;
        case "PANAMERA GTS":
            keybd = keyboards.porscheCapacity.panameraGts;
            break;
        case "718 BOXSTER":
            keybd = keyboards.porscheCapacity.boxster718;
            break;
        case "718 BOXSTER GTS":
            keybd = keyboards.porscheCapacity.boxster718Gts;
            break;
        case "718 BOXSTER S":
            keybd = keyboards.porscheCapacity.boxster718S;
            break;
        case "718 CAYMAN":
            keybd = keyboards.porscheCapacity.cayman718;
            break;
        case "718 CAYMAN GTS":
            keybd = keyboards.porscheCapacity.cayman718Gts;
            break;
        case "718 CAYMAN S":
            keybd = keyboards.porscheCapacity.cayman718S;
            break;
        case "911 CARRERA":
            keybd = keyboards.porscheCapacity.carrera911;
            break;
        case "911 CARRERA 4":
            keybd = keyboards.porscheCapacity.carrera9114;
            break;
        case "911 CARRERA 4S":
            keybd = keyboards.porscheCapacity.carrera9114S;
            break;
        case "911 CARRERA S":
            keybd = keyboards.porscheCapacity.carrera911S;
            break;
        case "911 GT2 RS":
            keybd = keyboards.porscheCapacity.gt2Rs911;
            break;
        case "911 GT3":
            keybd = keyboards.porscheCapacity.gt3911;
            break;
        case "911 TARGA 4":
            keybd = keyboards.porscheCapacity.targa9114;
            break;
        case "911 TURBO":
            keybd = keyboards.porscheCapacity.turbo911;
            break;
        case "911 TURBO S":
            keybd = keyboards.porscheCapacity.turboS911;
            break;
        case "F8 SPIDER":
            keybd = keyboards.ferrariCapacity.f8Spider;
            break;
        case "F8 TRIBUTO":
            keybd = keyboards.ferrariCapacity.f8Tributo;
            break;
        case "PORTOFINO M":
            keybd = keyboards.ferrariCapacity.portofinoM;
            break;
        case "ROMA":
            keybd = keyboards.ferrariCapacity.roma;
            break;
        case "SF90 STRADALE":
            keybd = keyboards.ferrariCapacity.sf90Stradale;
            break;
        case "ESCALADE":
            keybd = keyboards.cadillacCapacity.escalade;
            break;
        case "ESCALADE XT5":
            keybd = keyboards.cadillacCapacity.escaladeXt5;
            break;
        case "XT4":
            keybd = keyboards.cadillacCapacity.xt4;
            break;
        case "XT5":
            keybd = keyboards.cadillacCapacity.xt5;
            break;
        case "XT6":
            keybd = keyboards.cadillacCapacity.xt6;
            break;
        default:
            break;
    }
    return keybd;
};

const getPriceByList = (make, model, year, capacity, dostavka) => {
    let price;
    if (
        make === "ASTON MARTIN" &&
        model === "DB11" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "70000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DB11" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "80000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DBS COUPE" &&
        year === "2021" &&
        capacity === "5200" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "100000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DBS COUPE" &&
        year === "2022" &&
        capacity === "5200" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "105000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DBS COUPE" &&
        year === "2023" &&
        capacity === "5200" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "110000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DBX" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "80000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DBX" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "90000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "DBX" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "95000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "VANTAGE" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "70000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "VANTAGE" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "75000";
    } else if (
        make === "ASTON MARTIN" &&
        model === "VANTAGE" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "80000";
    } else if (
        make === "AUDI" &&
        model === "Q7" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "23800";
    } else if (
        make === "AUDI" &&
        model === "Q7" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "26000";
    } else if (
        make === "AUDI" &&
        model === "Q7" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "30000";
    } else if (
        make === "AUDI" &&
        model === "Q8" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "35000";
    } else if (
        make === "AUDI" &&
        model === "Q8" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "40000";
    } else if (
        make === "AUDI" &&
        model === "Q8" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "45000";
    } else if (
        make === "AUDI" &&
        model === "Q8 RCQ" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "40000";
    } else if (
        make === "AUDI" &&
        model === "Q8 RCQ" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "50000";
    } else if (
        make === "AUDI" &&
        model === "Q8 RCQ" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "60000";
    } else if (
        make === "BENTLEY" &&
        model === "BENTAYGA" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "45300";
    } else if (
        make === "BENTLEY" &&
        model === "BENTAYGA" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "BENTLEY" &&
        model === "BENTAYGA" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "56000";
    } else if (
        make === "BENTLEY" &&
        model === "BENTAYGA" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "BENTLEY" &&
        model === "BENTAYGA" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "67500";
    } else if (
        make === "BENTLEY" &&
        model === "BENTAYGA" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "120000";
    } else if (
        make === "BENTLEY" &&
        model === "CONTINENTAL GT" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "95000";
    } else if (
        make === "BENTLEY" &&
        model === "CONTINENTAL GT" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "100000";
    } else if (
        make === "BENTLEY" &&
        model === "CONTINENTAL GT" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "110000";
    } else if (
        make === "BENTLEY" &&
        model === "CONTINENTAL GT" &&
        year === "2021" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "90000";
    } else if (
        make === "BENTLEY" &&
        model === "CONTINENTAL GT" &&
        year === "2022" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "100000";
    } else if (
        make === "BENTLEY" &&
        model === "CONTINENTAL GT" &&
        year === "2023" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "120000";
    } else if (
        make === "BENTLEY" &&
        model === "FLYING SPUR" &&
        year === "2021" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "100000";
    } else if (
        make === "BENTLEY" &&
        model === "FLYING SPUR" &&
        year === "2022" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "110000";
    } else if (
        make === "BENTLEY" &&
        model === "FLYING SPUR" &&
        year === "2023" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "120000";
    } else if (
        make === "BENTLEY" &&
        model === "FLYING SPUR 20MY" &&
        year === "2021" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "100000";
    } else if (
        make === "BENTLEY" &&
        model === "FLYING SPUR 20MY" &&
        year === "2022" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "110000";
    } else if (
        make === "BENTLEY" &&
        model === "FLYING SPUR 20MY" &&
        year === "2023" &&
        capacity === "6000" &&
        (dostavka === "Авиа" || dostavka === "Наземный")
    ) {
        price = "120000";
    } else if (
        make === "BMW" &&
        model === "7-series" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "27000";
    } else if (
        make === "BMW" &&
        model === "7-series" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "7-series" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "33000";
    } else if (
        make === "BMW" &&
        model === "7-series" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "50000";
    } else if (
        make === "BMW" &&
        model === "7-series" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "50000";
    } else if (
        make === "BMW" &&
        model === "7-series" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "60000";
    } else if (
        make === "BMW" &&
        model === "7-series М" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "40000";
    } else if (
        make === "BMW" &&
        model === "7-series М" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "50000";
    } else if (
        make === "BMW" &&
        model === "7-series М" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "7-series М" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "60000";
    } else if (
        make === "BMW" &&
        model === "7-series М" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "55000";
    } else if (
        make === "BMW" &&
        model === "7-series М" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "27000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "55000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "33000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "37000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "40000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "55000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "49000";
    } else if (
        make === "BMW" &&
        model === "8-series" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "25500";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "40000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "33600";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "41000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "55000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "30000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "35000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "50000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X5" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "60000";
    } else if (
        make === "BMW" &&
        model === "X6" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "21000";
    } else if (
        make === "BMW" &&
        model === "X6" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "33600";
    } else if (
        make === "BMW" &&
        model === "X6" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41000";
    } else if (
        make === "BMW" &&
        model === "X6" &&
        year === "2021" &&
        capacity === "4400" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "35000";
    } else if (
        make === "BMW" &&
        model === "X6" &&
        year === "2022" &&
        capacity === "4400" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40000";
    } else if (
        make === "BMW" &&
        model === "X6" &&
        year === "2023" &&
        capacity === "4400" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "35000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "55000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "50000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "50000";
    } else if (
        // Наземная доставка
        make === "BMW" &&
        model === "X7" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "55000";
    } else if (
        // Наземная доставка
        make === "BMW" &&
        model === "X7" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "60000";
    } else if (
        make === "BMW" &&
        model === "760" &&
        year === "2023" &&
        capacity === "4400" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55000";
    } else if (
        make === "BMW" &&
        model === "740D" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        // Наземная доставка
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2021" &&
        capacity === "2000" &&
        dostavka === "Наземный"
    ) {
        price = "17000";
    } else if (
        // Наземная доставка
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2022" &&
        capacity === "2000" &&
        dostavka === "Наземный"
    ) {
        price = "19000";
    } else if (
        // Наземная доставка
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2023" &&
        capacity === "2000" &&
        dostavka === "Наземный"
    ) {
        price = "21000";
    } else if (
        // Наземная доставка
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2021" &&
        capacity === "3600" &&
        dostavka === "Наземный"
    ) {
        price = "25000";
    } else if (
        // Наземная доставка
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2022" &&
        capacity === "3600" &&
        dostavka === "Наземный"
    ) {
        price = "27000";
    } else if (
        // Наземная доставка
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2023" &&
        capacity === "3600" &&
        dostavka === "Наземный"
    ) {
        price = "30000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "AVENTADOR" &&
        year === "2021" &&
        capacity === "6500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "174000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "AVENTADOR" &&
        year === "2022" &&
        capacity === "6500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "175000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "AVENTADOR" &&
        year === "2023" &&
        capacity === "6500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "201000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "HURACAN" &&
        year === "2021" &&
        capacity === "5200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "135000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "HURACAN" &&
        year === "2022" &&
        capacity === "5200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "166000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "HURACAN" &&
        year === "2023" &&
        capacity === "5200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "195000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "100000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "110000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "120000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "100000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "51000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "65000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "70000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "60000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "70000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Наземный"
    ) {
        price = "75000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2021" &&
        capacity === "5000" &&
        dostavka === "Наземный"
    ) {
        price = "65000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2022" &&
        capacity === "5000" &&
        dostavka === "Наземный"
    ) {
        price = "75000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2023" &&
        capacity === "5000" &&
        dostavka === "Наземный"
    ) {
        price = "85000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER SPORT" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "65000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER SPORT" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER SPORT" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "80000";
    } else if (
        make === "LEXUS" &&
        model === "GX 460" &&
        year === "2021" &&
        capacity === "4600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "31500";
    } else if (
        make === "LEXUS" &&
        model === "GX 460" &&
        year === "2022" &&
        capacity === "4600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "34000";
    } else if (
        make === "LEXUS" &&
        model === "GX 460" &&
        year === "2023" &&
        capacity === "4600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40000";
    } else if (
        make === "LEXUS" &&
        model === "LC500" &&
        year === "2022" &&
        capacity === "5000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "LEXUS" &&
        model === "LC500" &&
        year === "2023" &&
        capacity === "5000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70000";
    } else if (
        make === "LEXUS" &&
        model === "LS 500" &&
        year === "2022" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "47100";
    } else if (
        make === "LEXUS" &&
        model === "LS 500" &&
        year === "2023" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "54200";
    } else if (
        make === "LEXUS" &&
        model === "LX 570" &&
        year === "2022" &&
        capacity === "5700" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42000";
    } else if (
        make === "LEXUS" &&
        model === "LX 600" &&
        year === "2021" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "65000";
    } else if (
        make === "LEXUS" &&
        model === "LX 600" &&
        year === "2022" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70000";
    } else if (
        make === "LEXUS" &&
        model === "LX 600" &&
        year === "2023" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "85000";
    } else if (
        make === "LEXUS" &&
        model === "LX500 D" &&
        year === "2021" &&
        capacity === "3300" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "LEXUS" &&
        model === "LX500 D" &&
        year === "2022" &&
        capacity === "3300" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "67000";
    } else if (
        make === "LEXUS" &&
        model === "LX500 D" &&
        year === "2023" &&
        capacity === "3300" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "81000";
    } else if (
        make === "LEXUS" &&
        model === "LX450D" &&
        year === "2021" &&
        capacity === "4500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "38000";
    } else if (
        make === "LEXUS" &&
        model === "LX450D" &&
        year === "2022" &&
        capacity === "4500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40500";
    } else if (
        make === "LEXUS" &&
        model === "LX450D" &&
        year === "2023" &&
        capacity === "4500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "43500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG CLS 53" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG CLS 53" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG CLS 53" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG GLS 63" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "68000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG GLS 63" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG GLS 63" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 450" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 450" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 450" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "56000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "45000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "55000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "63000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2021" &&
        capacity === "4500" &&
        dostavka === "Наземный"
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2022" &&
        capacity === "4500" &&
        dostavka === "Наземный"
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2023" &&
        capacity === "4500" &&
        dostavka === "Наземный"
    ) {
        price = "71000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 580" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 580" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 580" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 350" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 350" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "46500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 350" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "53500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 560" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 560" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 560" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "E 450" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "32500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "E 450" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "37000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "E 450" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 53" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "48000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 53" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "54000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 53" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "44000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "55000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 400D" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 400D" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 400D" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Наземный"
    ) {
        price = "75000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 450" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 450" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 450" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 500" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "35000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 500" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 500" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "58500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG G 63" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG G 63" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG G 63" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G700,G800 Brabus и G63 4x4" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G700,G800 Brabus и G63 4x4" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G700,G800 Brabus и G63 4x4" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "120000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 350D" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "53500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 350D" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "61500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 350D" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 400D" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "54500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 400D" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 400D" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 500" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 500" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 500" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 500 AMG" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 500 AMG" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "70500";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "G 500 AMG" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 600 4MATIC MAYBACH" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 600 4MATIC MAYBACH" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 600 4MATIC MAYBACH" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580 MAYBACH" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580 MAYBACH" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580 MAYBACH" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Наземный"
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 680 MAYBACH" &&
        year === "2021" &&
        capacity === "6000" &&
        dostavka === "Наземный"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 680 MAYBACH" &&
        year === "2022" &&
        capacity === "6000" &&
        dostavka === "Наземный"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 680 MAYBACH" &&
        year === "2023" &&
        capacity === "6000" &&
        dostavka === "Наземный"
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 220 D V-CLASS" &&
        year === "2021" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "39660";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 220 D V-CLASS" &&
        year === "2022" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45609";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 220 D V-CLASS" &&
        year === "2023" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "51600";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "18120";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "24090";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 D V-CLASS" &&
        year === "2021" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "39420";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 D V-CLASS" &&
        year === "2022" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45333";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 D V-CLASS" &&
        year === "2023" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "51300";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 D V-CLASS" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "43320";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 D V-CLASS" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "49818";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 D V-CLASS" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55860";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 V-CLASS" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "33240";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 V-CLASS" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "39000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 250 V-CLASS" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "44850";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 300" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "37200";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 300" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40200";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "V 300" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "49200";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 114" &&
        year === "2021" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "15600";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 114" &&
        year === "2022" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "17940";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 114" &&
        year === "2023" &&
        capacity === "2200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "19740";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 119 CDI" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "14760";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 119 CDI" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "19314";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 119 CDI" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "24120";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 121" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "13620";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 121" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "15663";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO 121" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "18120";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO TOURER 110 CDI" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "16200";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO TOURER 110 CDI" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "18630";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "VITO TOURER 110 CDI" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "21120";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN" &&
        year === "2021" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "130000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN" &&
        year === "2022" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "157000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN" &&
        year === "2023" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "180000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN BLACK BADGE" &&
        year === "2021" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "170000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN BLACK BADGE" &&
        year === "2022" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "180000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN BLACK BADGE" &&
        year === "2023" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "200000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "DAWN" &&
        year === "2021" &&
        capacity === "6600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "161000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "DAWN" &&
        year === "2022" &&
        capacity === "6600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "191000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "DAWN" &&
        year === "2023" &&
        capacity === "6600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "219000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST" &&
        year === "2021" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "160000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST" &&
        year === "2022" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "175000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST" &&
        year === "2023" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "190000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST BLACK BADGE" &&
        year === "2021" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "165000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST BLACK BADGE" &&
        year === "2022" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "178500";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST BLACK BADGE" &&
        year === "2023" &&
        capacity === "6800" &&
        dostavka === "Наземный"
    ) {
        price = "205000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST EWB" &&
        year === "2021" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "180000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST EWB" &&
        year === "2022" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "200000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST EWB" &&
        year === "2023" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "220000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "PHANTOM" &&
        year === "2021" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "195000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "PHANTOM" &&
        year === "2022" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "215000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "PHANTOM" &&
        year === "2023" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "237000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "PHANTOM EWB" &&
        year === "2021" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "195000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "PHANTOM EWB" &&
        year === "2022" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "218000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "PHANTOM EWB" &&
        year === "2023" &&
        capacity === "6800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "241000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "WRAITH" &&
        year === "2021" &&
        capacity === "6600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "150000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "WRAITH" &&
        year === "2022" &&
        capacity === "6600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "171000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "WRAITH" &&
        year === "2023" &&
        capacity === "6600" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "190000";
    } else if (
        make === "RAM" &&
        model === "PRX" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "37000";
    } else if (
        make === "RAM" &&
        model === "PRX" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40000";
    } else if (
        make === "RAM" &&
        model === "PRX" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "48000";
    } else if (
        make === "RAM" &&
        model === "TRX" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "RAM" &&
        model === "TRX" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "RAM" &&
        model === "TRX" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    } else if (
        make === "TOYOTA" &&
        model === "Seqvoya" &&
        year === "2021" &&
        capacity === "5700" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "TOYOTA" &&
        model === "Seqvoya" &&
        year === "2022" &&
        capacity === "5700" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "TOYOTA" &&
        model === "Seqvoya" &&
        year === "2023" &&
        capacity === "5700" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55000";
    } else if (
        make === "TOYOTA" &&
        model === "LAND CRUISER 300" &&
        year === "2021" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "TOYOTA" &&
        model === "LAND CRUISER 300" &&
        year === "2022" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "TOYOTA" &&
        model === "LAND CRUISER 300" &&
        year === "2023" &&
        capacity === "3500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "55000";
    } else if (
        make === "TOYOTA" &&
        model === "LAND CRUISER 300" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40000";
    } else if (
        make === "TOYOTA" &&
        model === "LAND CRUISER 300" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "TOYOTA" &&
        model === "LAND CRUISER 300" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN GT4" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "38500";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN GT4" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "44590";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN GT4" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50715";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42700";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "46200";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "53130";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE GTS" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "39200";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE GTS" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "53200";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE GTS" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60200";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE TURBO" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "79800";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE TURBO" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "100730";
    } else if (
        make === "PORSCHE" &&
        model === "CAYENNE TURBO" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "119350";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "14700";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "34300";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "39445";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "49000";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "52920";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN GTS" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "38430";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN GTS" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "43610";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN S" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "35140";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN S" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "39340";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN S" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42700";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN TURBO" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41650";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN TURBO" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45430";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN UT" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "37100";
    } else if (
        make === "PORSCHE" &&
        model === "MACAN UT" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42700";
    } else if (
        make === "PORSCHE" &&
        model === "PANAMERA" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42000";
    } else if (
        make === "PORSCHE" &&
        model === "PANAMERA" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "51240";
    } else if (
        make === "PORSCHE" &&
        model === "PANAMERA" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "61810";
    } else if (
        make === "PORSCHE" &&
        model === "PANAMERA GTS" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "68250";
    } else if (
        make === "PORSCHE" &&
        model === "PANAMERA GTS" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "75110";
    } else if (
        make === "PORSCHE" &&
        model === "PANAMERA GTS" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "79800";
    } else if (
        make === "PORSCHE" &&
        model === "718 BOXSTER" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "37100";
    } else if (
        make === "PORSCHE" &&
        model === "718 BOXSTER" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42665";
    } else if (
        make === "PORSCHE" &&
        model === "718 BOXSTER GTS" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41020";
    } else if (
        make === "PORSCHE" &&
        model === "718 BOXSTER GTS" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "47173";
    } else if (
        make === "PORSCHE" &&
        model === "718 BOXSTER S" &&
        year === "2022" &&
        capacity === "2500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "36680";
    } else if (
        make === "PORSCHE" &&
        model === "718 BOXSTER S" &&
        year === "2023" &&
        capacity === "2500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41860";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "27510";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "31636";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN GTS" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "53060";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN GTS" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "61019";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN S" &&
        year === "2022" &&
        capacity === "2500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "37030";
    } else if (
        make === "PORSCHE" &&
        model === "718 CAYMAN S" &&
        year === "2023" &&
        capacity === "2500" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41860";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "42700";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "49105";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA 4" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "49140";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA 4" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "56350";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA 4S" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60200";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA 4S" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "69230";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA S" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "53970";
    } else if (
        make === "PORSCHE" &&
        model === "911 CARRERA S" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "61995";
    } else if (
        make === "PORSCHE" &&
        model === "911 GT2 RS" &&
        year === "2021" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "63140";
    } else if (
        make === "PORSCHE" &&
        model === "911 GT2 RS" &&
        year === "2022" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "73360";
    } else if (
        make === "PORSCHE" &&
        model === "911 GT2 RS" &&
        year === "2023" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "83804";
    } else if (
        make === "PORSCHE" &&
        model === "911 GT3" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "72450";
    } else if (
        make === "PORSCHE" &&
        model === "911 GT3" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "93450";
    } else if (
        make === "PORSCHE" &&
        model === "911 GT3" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "107065";
    } else if (
        make === "PORSCHE" &&
        model === "911 TARGA 4" &&
        year === "2021" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "52360";
    } else if (
        make === "PORSCHE" &&
        model === "911 TARGA 4" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60214";
    } else if (
        make === "PORSCHE" &&
        model === "911 TURBO" &&
        year === "2021" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "72100";
    } else if (
        make === "PORSCHE" &&
        model === "911 TURBO" &&
        year === "2022" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "81130";
    } else if (
        make === "PORSCHE" &&
        model === "911 TURBO" &&
        year === "2023" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "93299";
    } else if (
        make === "PORSCHE" &&
        model === "911 TURBO S" &&
        year === "2021" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "110075";
    } else if (
        make === "PORSCHE" &&
        model === "911 TURBO S" &&
        year === "2022" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "129500";
    } else if (
        make === "PORSCHE" &&
        model === "911 TURBO S" &&
        year === "2023" &&
        capacity === "3800" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "148925";
    } else if (
        make === "FERRARI" &&
        model === "F8 SPIDER" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "128450";
    } else if (
        make === "FERRARI" &&
        model === "F8 SPIDER" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "149100";
    } else if (
        make === "FERRARI" &&
        model === "F8 SPIDER" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "171465";
    } else if (
        make === "FERRARI" &&
        model === "F8 TRIBUTO" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "189000";
    } else if (
        make === "FERRARI" &&
        model === "F8 TRIBUTO" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "222530";
    } else if (
        make === "FERRARI" &&
        model === "F8 TRIBUTO" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "255279";
    } else if (
        make === "FERRARI" &&
        model === "PORTOFINO M" &&
        year === "2021" &&
        capacity === "3900" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "100800";
    } else if (
        make === "FERRARI" &&
        model === "PORTOFINO M" &&
        year === "2022" &&
        capacity === "3900" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "124180";
    } else if (
        make === "FERRARI" &&
        model === "PORTOFINO M" &&
        year === "2023" &&
        capacity === "3900" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "142527";
    } else if (
        make === "FERRARI" &&
        model === "ROMA" &&
        year === "2021" &&
        capacity === "3900" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "119350";
    } else if (
        make === "FERRARI" &&
        model === "ROMA" &&
        year === "2022" &&
        capacity === "3900" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "143010";
    } else if (
        make === "FERRARI" &&
        model === "ROMA" &&
        year === "2023" &&
        capacity === "3900" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "164251";
    } else if (
        make === "FERRARI" &&
        model === "SF90 STRADALE" &&
        year === "2021" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "190610";
    } else if (
        make === "FERRARI" &&
        model === "SF90 STRADALE" &&
        year === "2022" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "223440";
    } else if (
        make === "FERRARI" &&
        model === "SF90 STRADALE" &&
        year === "2023" &&
        capacity === "4000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "256816";
    } else if (
        make === "CADILLAC" &&
        model === "ESCALADE" &&
        year === "2021" &&
        capacity === "6200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "41500";
    } else if (
        make === "CADILLAC" &&
        model === "ESCALADE" &&
        year === "2022" &&
        capacity === "6200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "46000";
    } else if (
        make === "CADILLAC" &&
        model === "ESCALADE" &&
        year === "2023" &&
        capacity === "6200" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "52000";
    } else if (
        make === "CADILLAC" &&
        model === "ESCALADE XT5" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "26740";
    } else if (
        make === "CADILLAC" &&
        model === "ESCALADE XT5" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "32900";
    } else if (
        make === "CADILLAC" &&
        model === "XT4" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "22190";
    } else if (
        make === "CADILLAC" &&
        model === "XT4" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "23100";
    } else if (
        make === "CADILLAC" &&
        model === "XT4" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "26565";
    } else if (
        make === "CADILLAC" &&
        model === "XT5" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "23100";
    } else if (
        make === "CADILLAC" &&
        model === "XT5" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "29050";
    } else if (
        make === "CADILLAC" &&
        model === "XT5" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "33407";
    } else if (
        make === "CADILLAC" &&
        model === "XT6" &&
        year === "2021" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "23100";
    } else if (
        make === "CADILLAC" &&
        model === "XT6" &&
        year === "2022" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "34790";
    } else if (
        make === "CADILLAC" &&
        model === "XT6" &&
        year === "2023" &&
        capacity === "2000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "40008";
    } else if (
        make === "CADILLAC" &&
        model === "XT6" &&
        year === "2022" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "28000";
    } else if (
        make === "CADILLAC" &&
        model === "XT6" &&
        year === "2023" &&
        capacity === "3000" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "36400";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "60000";
    } else if (
        make === "BMW" &&
        model === "X7" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2021" &&
        capacity === "2000" &&
        dostavka === "Авиа"
    ) {
        price = "30000";
    } else if (
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2022" &&
        capacity === "2000" &&
        dostavka === "Авиа"
    ) {
        price = "35000";
    } else if (
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2023" &&
        capacity === "2000" &&
        dostavka === "Авиа"
    ) {
        price = "45000";
    } else if (
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2021" &&
        capacity === "3600" &&
        dostavka === "Авиа"
    ) {
        price = "30000";
    } else if (
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2022" &&
        capacity === "3600" &&
        dostavka === "Авиа"
    ) {
        price = "35000";
    } else if (
        make === "JEEP" &&
        model === "Wrangler" &&
        year === "2023" &&
        capacity === "3600" &&
        dostavka === "Авиа"
    ) {
        price = "45000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "120000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "130000";
    } else if (
        make === "LAMBORGHINI" &&
        model === "URUS" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "140000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "80000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "90000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2021" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "80000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2022" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "90000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2023" &&
        capacity === "4400" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2021" &&
        capacity === "5000" &&
        dostavka === "Авиа"
    ) {
        price = "80000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2022" &&
        capacity === "5000" &&
        dostavka === "Авиа"
    ) {
        price = "90000";
    } else if (
        make === "LAND ROVER" &&
        model === "RANGE ROVER" &&
        year === "2023" &&
        capacity === "5000" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG GLS 63" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "75000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG GLS 63" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG GLS 63" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 450" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "60000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 450" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLE 450" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "75000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2021" &&
        capacity === "4500" &&
        dostavka === "Авиа"
    ) {
        price = "65000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2022" &&
        capacity === "4500" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 450" &&
        year === "2023" &&
        capacity === "4500" &&
        dostavka === "Авиа"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 580" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 580" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "75000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 580" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 400D" &&
        year === "2021" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "70000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 400D" &&
        year === "2022" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "75000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 400D" &&
        year === "2023" &&
        capacity === "3000" &&
        dostavka === "Авиа"
    ) {
        price = "80000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG G 63" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "75000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG G 63" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "90000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "AMG G 63" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "100000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 600 4MATIC MAYBACH" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "105000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 600 4MATIC MAYBACH" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "115000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "GLS 600 4MATIC MAYBACH" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "130000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580 MAYBACH" &&
        year === "2021" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "105000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580 MAYBACH" &&
        year === "2022" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "115000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 580 MAYBACH" &&
        year === "2023" &&
        capacity === "4000" &&
        dostavka === "Авиа"
    ) {
        price = "130000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 680 MAYBACH" &&
        year === "2021" &&
        capacity === "6000" &&
        dostavka === "Авиа"
    ) {
        price = "105000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 680 MAYBACH" &&
        year === "2022" &&
        capacity === "6000" &&
        dostavka === "Авиа"
    ) {
        price = "115000";
    } else if (
        make === "MERCEDES-BENZ" &&
        model === "S 680 MAYBACH" &&
        year === "2023" &&
        capacity === "6000" &&
        dostavka === "Авиа"
    ) {
        price = "130000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN" &&
        year === "2021" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "170000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN" &&
        year === "2022" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "180000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "CULLINAN" &&
        year === "2023" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "200000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST" &&
        year === "2021" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "180000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST" &&
        year === "2022" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "200000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST" &&
        year === "2023" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "220000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST BLACK BADGE" &&
        year === "2021" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "180000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST BLACK BADGE" &&
        year === "2022" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "200000";
    } else if (
        make === "ROLLS-ROYCE" &&
        model === "GHOST BLACK BADGE" &&
        year === "2023" &&
        capacity === "6800" &&
        dostavka === "Авиа"
    ) {
        price = "220000";
    } else if (
        make === "GMS" &&
        model === "Unknown" &&
        year === "2021" &&
        capacity === "unknown" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "45000";
    } else if (
        make === "GMS" &&
        model === "Unknown" &&
        year === "2022" &&
        capacity === "unknown" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "50000";
    } else if (
        make === "GMS" &&
        model === "Unknown" &&
        year === "2023" &&
        capacity === "unknown" &&
        (dostavka === "Наземный" || dostavka === "Авиа")
    ) {
        price = "60000";
    }

    return price;
};

module.exports = {
    coefficientByYear,
    getPercent,
    getModel,
    getCapacity,
    getYear,
    getPriceByList,
};
