import {html, customElement, css, property} from 'lit-element';
import {SectionComponent} from '../../section-component';
import './cell/section-cell-component'
import {Column} from '../../../../model/document/column';

@customElement('section-column-component')
export class SectionColumnComponent extends LitElement {

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
                <section-cell-component .cell="${this.column.cell}" ></section-cell-component>
            </div>
        `;
    }
}

