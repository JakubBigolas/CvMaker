import {html} from 'lit-element';
import {CV} from '../model/cv/cv'
import {Document} from '../model/document/document'
import {Page} from '../model/document/page'
import {Row} from '../model/document/row'
import {Column} from '../model/document/column'
import {Cell} from '../model/document/cell'

export class DefaultTemplate {

    _cv: CV;

    constructor (cv: CV) {
        this._cv = cv;
    }

    public getDocument() : Document {
        const doc = new Document();
        const page = new Page(doc);
        const row = new Row(page);
        const column = new Column(row);
        const cell = new Cell(column);

        cell.html = html`<container-component>ggdfgsrgdrsgd</container-component>`;

        return doc;
    }

    get cv() : CV {
        return this._cv;
    }

}