import {LitElement, html, customElement, css, property} from 'lit-element';
import '../document/document-component';
import {Document} from '../../model/document/document';
import {CvMock} from '../../service/mock/cv-mock';
import {DefaultTemplate} from '../../template/default-template';

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
                <document-component document="${document}"></document-component>
            </div>
        `;
    }

}
