import moment from "moment";

const oneMonthFromNowMs = (date?: Date | number): number =>
    date ? moment(date).add(1, "months").unix() * 1000 : moment().add(1, "months").unix() * 1000;

export {
    oneMonthFromNowMs
}