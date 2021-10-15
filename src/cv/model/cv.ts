import {Image} from './image';
import {PersonalData} from './personal-data';
import {SectionData} from './section-data';

export class CV {
    _name = '';
    _surname = '';
    _portrait = new Image();
    _personalData = Array<PersonalData>();
    _sections = Array<SectionData>();
    _footer = '';

    get name() : string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get surname() : string {
        return this._surname;
    }

    set surname(surname: string) {
        this._surname = surname;
    }

    get portrait() : Image {
        return this._portrait;
    }

    set portrait(portrait: Image) {
        this._portrait = portrait;
    }

    get personalData() : Array<PersonalData> {
        return this._personalData;
    }

    set personalData(personalData: Array<PersonalData>) {
        this._personalData = personalData;
    }

    get sections() : Array<SectionData> {
        return this._sections;
    }

    set sections(sections: Array<SectionData>) {
        this._sections = sections;
    }

    get footer() : string {
        return this._footer;
    }

    set footer(footer: string) {
        this._footer = footer;
    }

}