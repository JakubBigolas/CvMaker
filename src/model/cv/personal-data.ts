export class PersonalData {
    _name = '';
    _value = '';

    constructor (name: string, value: string) {
        this._name = name;
        this._value = value;
    }

    get name() : string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get value() : string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

}