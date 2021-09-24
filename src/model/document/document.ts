import {Page} from './page';

export class Document {

    _pages = new Array<Page>();
    _width = "21cm";
    _height = "29.7cm";
    _marginTop = "2cm";
    _marginRight = "2cm";
    _marginBottom = "2cm";
    _marginLeft = "2cm";

    get pages() : Array<Page> {
        return this._pages;
    }

    set pages(pages : Array<Page>) {
        this._pages = pages;
    }

    get width() : string {
        return this._width;
    }

    set width(width: string) {
        this._width = width;
    }

    get height() : string {
        return this._height;
    }

    set height(height: string) {
        this._height = height;
    }

    get marginLeft() : string {
        return this._marginLeft;
    }

    set marginLeft(marginLeft: string) {
        this._marginLeft = marginLeft;
    }

    get marginRight() : string {
        return this._marginRight;
    }

    set marginRight(marginRight: string) {
        this._marginRight = marginRight;
    }

    get marginTop() : string {
        return this._marginTop;
    }

    set marginTop(marginTop: string) {
        this._marginTop = marginTop;
    }

    get marginBottom() : string {
        return this._marginBottom;
    }

    set marginBottom(marginBottom: string) {
        this._marginBottom = marginBottom;
    }

}