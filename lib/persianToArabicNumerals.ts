const persianToArabicNumerals = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
};

export function convertPersianToArabic(persianText: string) {

    // @ts-ignore
    return persianText.replace(/[۰-۹]/g, match => persianToArabicNumerals[match]);
}