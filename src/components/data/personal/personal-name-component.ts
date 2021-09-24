import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('personal-name-basic-data-component')
export class PersonalNameBasicDataComponent extends LitElement {

    @property({type: String})
    name = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="personal-name-basic-data" >${this.name}</div>`;
    }

}

