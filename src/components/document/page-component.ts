import {LitElement, html, customElement, css, property} from 'lit-element';
import '../section/row/section-row-component'
import {Page} from '../../model/document/page';

@customElement('page-component')
export class PageComponent extends LitElement {

    @property({type: Page})
    page: Page | null;

    constructor () {
        super();
        this.page = null;
    }

    static get styles() {
        return css`
            .page {
                display: flex;
                flex-direction: column;
                background-color: white;
                box-shadow: 0.25cm 0.25cm 0.4cm;
            }
        `;
    }

    render() {
        return html`
            <div class="page-container" style="${this.getSizeStyle()}">
                <div class="page" style="${this.getSizeStyle()}">
                    ${this.page == null
                        ? html`empty page`
                        : this.page.rows.map(row => html`<section-row-component .row="${row}" ></section-row-component>`)}
                </div>
            </div>
        `;
    }

    private getSizeStyle() : string {
        return this.page == null ? ''
            : `max-width: ${this.page.document.width};
               min-width: ${this.page.document.width};
               max-height: ${this.page.document.height};
               min-height: ${this.page.document.height};`;
    }

}

