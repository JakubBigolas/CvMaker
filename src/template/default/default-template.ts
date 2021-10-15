import {html} from 'lit-element';

import {CV} from '../../cv/model/cv'
import {Document} from '../../document/model/document'
import {Page} from '../../document/model/page'
import {Row} from '../../document/model/row'
import {Column} from '../../document/model/column'
import {Cell} from '../../document/model/cell'
import {DefaultContent} from './model/default-content'
import './components/title-component';

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
        cell.cellContent.push(new DefaultContent(html`<title-component .cv="${this.cv}"></title-component>`));


        return doc;
    }

    get cv() : CV {
        return this._cv;
    }

}