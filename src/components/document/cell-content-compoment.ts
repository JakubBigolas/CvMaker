import {LitElement, html, customElement, css, property} from 'lit-element';

@customElement('container-component')
export class ContainerComponent extends LitElement {

    @property({type: Boolean})
    stretch = false;

    @property({type: String})
    styles = "";

    @property({type: String})
    direction: 'vertical' | 'horizontal' = 'horizontal';

    static get styles() {
        return css`
            .container {
                display: flex;
            }

            .container.stretch {
                flex: auto;
            }

            .container.vertical {
                flex-direction: column;
            }

            .container.horizontal {
                flex-direction: row;
            }

        `;
    }

    render() {
        return html`
            <div class="container ${this.direction} ${this.stretch ? 'stretch' : ''}" style="${this.styles}">
                <slot></slot>
            </div>
        `;
    }


}

