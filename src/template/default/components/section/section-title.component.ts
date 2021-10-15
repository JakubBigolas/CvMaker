import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('section-title-basic-data-component')
export class SectionTitleBasicDataComponent extends LitElement {

    @property({type: String})
    value = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="section-title-basic-data" >${this.value}</div>`;
    }

}

