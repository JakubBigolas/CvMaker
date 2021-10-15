import {LitElement, html, customElement} from 'lit-element';

import  "./cv-maker/components/app-component";

@customElement('main-element')
export class Main extends LitElement {
   render() {
        return html`<app-component></app-component>`;
   }
}
