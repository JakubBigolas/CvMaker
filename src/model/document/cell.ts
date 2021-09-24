import {html, TemplateResult} from 'lit-element';
import {Column} from './column';

export class Cell {

    _html = html``;
    _column : Column;

    constructor (column: Column) {
        this._column = column;
        column.cell = this;
    }

    get html() : TemplateResult {
        return this._html;
    }

    set html(html : TemplateResult) {
        this._html = html;
    }

    get column() : Column {
        return this._column;
    }

}