import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('name-basic-data-component')
export class NameBasicDataComponent extends LitElement {

    @property({type: String})
    name = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`<div class="name-basic-data" >${this.name}</div>`;
    }

}

