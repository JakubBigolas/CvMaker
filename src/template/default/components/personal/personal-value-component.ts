import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('personal-value-basic-data-component')
export class PersonalValueBasicDataComponent extends LitElement {

    @property({type: String})
    value = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="personal-value-basic-data" >${this.value}</div>`;
    }

}

