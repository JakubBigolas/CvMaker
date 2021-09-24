import {html, customElement, css, property} from 'lit-element';
import {SectionComponent} from '../section-component';
import './column/section-column-component';
import {Row} from '../../../model/document/row';

@customElement('section-row-component')
export class SectionRowComponent extends LitElement {

    @property({type: Row})
    row: Row | null;

    constructor () {
        super();
        this.row = null;
    }

    static get styles() {
        return css`
            .section-row {
                display: flex;
                flex-direction: row;
            }
        `;
    }

    render() {
        if(this.row == null) {
            return html`empty row`;
        }
        return html`
            <div class="section-row">
                ${this.row.columns.map(column => html`<section-column-component .column="${column}" ></section-column-component>`)}
            </div>
        `;
    }

}

