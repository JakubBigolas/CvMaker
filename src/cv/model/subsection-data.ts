export type SubsectionDataDate = Date | null | string | undefined;

export class SubsectionData {
    _name: string | undefined;
    _value: string;
    _dateFrom: SubsectionDataDate;
    _dateTo: SubsectionDataDate;

    constructor (name: string | undefined, value: string, dateFrom?: SubsectionDataDate, dateTo?: SubsectionDataDate) {
        this._name = name;
        this._value = value;
        this._dateFrom = dateFrom;
        this._dateTo = dateTo;
    }

    get name() : string | undefined {
        return this._name;
    }

    set name(name: string | undefined) {
        this._name = name;
    }

    get value() : string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get dateFrom() : SubsectionDataDate {
        return this._dateFrom;
    }

    set dateFrom(dateFrom: SubsectionDataDate) {
        this._dateFrom = dateFrom;
    }

    get dateTo() : SubsectionDataDate {
        return this._dateTo;
    }

    set dateTo(dateTo: SubsectionDataDate) {
        this._dateTo = dateTo;
    }

}