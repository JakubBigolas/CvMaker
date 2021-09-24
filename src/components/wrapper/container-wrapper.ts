import {html, TemplateResult} from 'lit-element';
import {CellContent} from '../../model/document/cell-content';

export class ContainerWrapper extends CellContent {

    _items = new Array<CellContent>();
    _stretch = false;
    _styles = "";
    _direction: 'vertical' | 'horizontal' = 'horizontal';

    getHtml() : TemplateResult {
        return html`<container-component stretch="">
            ${this.items.map(item => item.getHtml())}
        </container-component>`;
    }

    get items() : Array<CellContent> {
        return this._items;
    }

    set items(items: Array<CellContent>) {
        this._items = items;
    }

    get stretch() : boolean {
        return this._stretch;
    }

    set stretch(stretch: boolean) {
        this._stretch = stretch;
    }

    get styles() : string {
        return this._styles;
    }

    set styles(styles: string) {
        this._styles = styles;
    }

    get direction() : 'vertical' | 'horizontal' {
        return this._direction;
    }

    set direction(direction: 'vertical' | 'horizontal') {
        this._direction = direction;
    }

}