import moment from "moment";

export function getDateString(date, locale = 'en') {
    moment.locale(locale);
    // return new Date(date).toDateString();
    return moment(date).format('LL');
}