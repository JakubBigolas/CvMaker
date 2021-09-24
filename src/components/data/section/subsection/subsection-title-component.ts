import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('subsection-title-basic-data-component')
export class SubsectionTitleBasicDataComponent extends LitElement {

    @property({type: String})
    value = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="subsection-title-basic-data" >${this.value}</div>`;
    }

}

