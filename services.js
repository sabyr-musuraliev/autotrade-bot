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

module.exports = {
    coefficientByYear,
    getPercent,
};
