import {Row} from './row';
import {Document} from './document';

export class Page {

    _rows = new Array<Row>();
    _document: Document;

    constructor(document: Document) {
        this._document = document;
        this._document.pages.push(this);
    }

    get rows() : Array<Row> {
        return this._rows;
    }

    set rows(rows : Array<Row>) {
        this._rows = rows;
    }

    get document() : Document {
        return this._document;
    }

}