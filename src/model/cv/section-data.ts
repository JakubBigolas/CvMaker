import {SubsectionData} from './subsection-data';

export type SectionDataType = 'simple' | 'extended';

export class SectionData {
    _name = '';
    _subsections = new Array<SubsectionData>();
    _type: SectionDataType;

    constructor (name: string, type = 'extended') {
        this._name = name;
        this._type = type as 'simple' | 'extended';
    }

    get name() : string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get subsections() : Array<SubsectionData> {
        return this._subsections;
    }

    set subsections(subsections: Array<SubsectionData>) {
        this._subsections = subsections;
    }

    get type() : SectionDataType {
        return this._type;
    }

    set type(type: SectionDataType) {
        this._type = type;
    }

}