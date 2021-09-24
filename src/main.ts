import {LitElement, html, customElement} from 'lit-element';

import  "./components/app/app-component";

@customElement('main-element')
export class Main extends LitElement {
   render() {
        return html`<app-component></app-component>`;
   }
}
