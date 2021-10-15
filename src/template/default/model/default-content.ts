import {TemplateResult} from 'lit-element';
import {CellContent} from '../../../document/model/cell-content';

export class DefaultContent extends CellContent {

    _html: TemplateResult;

    constructor(html: TemplateResult) {
        super();
        this._html = html;
    }

    get html() : TemplateResult {
        return this._html;
    }

    set html(html: TemplateResult) {
        this._html = html;
    }

}