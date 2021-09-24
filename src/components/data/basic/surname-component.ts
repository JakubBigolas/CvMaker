import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('surname-basic-data-component')
export class SurnameBasicDataComponent extends LitElement {

    @property({type: String})
    surname = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="surname-basic-data" >${this.surname}</div>`;
    }

}

