import {html, customElement, css, property, LitElement} from 'lit-element';
import './column-component';
import {Row} from '../../model/document/row';

@customElement('row-component')
export class RowComponent extends LitElement {

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
                ${this.row.columns.map(column => html`<column-component .column="${column}" ></column-component>`)}
            </div>
        `;
    }

}

