import {LitElement, html, customElement, css, property} from 'lit-element';
import '../../document/components/document-component';
import {Document} from '../../document/model/document';
import {CvMock} from '../../mock/cv-mock';
import {DefaultTemplate} from '../../template/default//default-template';

@customElement('app-component')
export class AppComponent extends LitElement {

    @property({type: Document})
    document: Document;

    constructor () {
        super();
        this.document = new DefaultTemplate(new CvMock().getCV()).getDocument();
    }

    static get styles() {
        return css`
            .main-container {
                background-color: gray;
                min-height: calc(100vh - 96px);
                min-width: calc(100vw - 96px);
                padding: 48px;
                display: block;
            }
        `;
    }

    render() {
        return html`
            <div class="main-container">
                <document-component .document="${this.document}"></document-component>
            </div>
        `;
    }

}
