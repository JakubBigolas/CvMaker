import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('subsection-value-basic-data-component')
export class SubsectionValueBasicDataComponent extends LitElement {

    @property({type: String})
    value = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="subsection-value-basic-data" >${this.value}</div>`;
    }

}

