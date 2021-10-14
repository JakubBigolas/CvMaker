import {LitElement, html, customElement, css, property} from 'lit-element';
import {Document} from '../../model/document/document';

@customElement('document-component')
export class DocumentComponent extends LitElement {

    @property({type: Document})
    document: Document | null;

    constructor () {
        super();
        this.document = null;
    }

    static get styles() {
        return css`

        `;
    }

    render() {
        return html`
            <div class="document-container">
                ${this.document.pages.map(page => html`<page-component .page="${page}" ></page-component>`)}
            </div>
        `;
    }


}

