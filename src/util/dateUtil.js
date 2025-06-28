'use server';

// All dates will come in params like Numeric Format (YYYY-MM-DD)

// Short Date (MM/DD/YY)
// Medium Date (MMM DD, YYYY)
// Long Date (Month DD, YYYY)

// Months
const monthsFull = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const monthsAbbr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export async function useShortDate(date) {
    const year = date.slice(2, 4);
    // the replace function removes leading 0's
    const month = date.slice(5, 7).replace(/^0+/, '');
    const day = date.slice(8, 10).replace(/^0+/, '');

    return month + '/' + day + '/' + year;
}

export async function useMediumDate(date) {
    const year = date.slice(0, 4);
    // the replace function removes leading 0's
    const month = parseInt(date.slice(5, 7).replace(/^0+/, ''), 10);
    const day = date.slice(8, 10).replace(/^0+/, '');

    return monthsAbbr[month - 1] + " " + day + ', ' + year
}

export async function useLongDate(date) {
    const year = date.slice(0, 4);
    // the replace function removes leading 0's
    const month = parseInt(date.slice(5, 7).replace(/^0+/, ''), 10);
    const day = date.slice(8, 10).replace(/^0+/, '');

    return monthsFull[month - 1] + ' ' + day + ', ' + year
}
