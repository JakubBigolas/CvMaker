import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('image-basic-data-component')
export class ImageBasicDataComponent extends LitElement {

    @property({type: String})
    image = '';
    @property({type: String})
    width = '';
    @property({type: String})
    height = '';

    static get styles() {
        return css``;
    }

    render() {
        return html`
            <div style="${this.getStyles()}" class="image-basic-data">
                <image src="${this.image}" ></image>
            </div>
            `;
    }

    private getStyles() {
        return ``;
    }

}

