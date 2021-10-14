import {html, customElement, css, property, LitElement} from 'lit-element';
import './cell-component'
import {Column} from '../../model/document/column';

@customElement('column-component')
export class ColumnComponent extends LitElement {

    @property({type: Column})
    column: Column | null;

    constructor () {
        super();
        this.column = null;
    }

    static get styles() {
        return css`
        `;
    }

    render() {
        if(this.column == null) {
            return html`empty column`;
        }
        return html`
            <div class="section-column">
                <cell-component .cell="${this.column.cell}" ></cell-component>
            </div>
        `;
    }
}

