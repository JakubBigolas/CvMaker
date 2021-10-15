import {html, customElement, property, LitElement} from 'lit-element';
import {CV} from '../../../cv/model/cv';
import {DefaultTemplateGlobalCss} from './default-template-global-css';

@customElement('title-component')
export class TitleComponent extends LitElement {

    @property({type: CV})
    cv: CV | null = null;

    static get styles() {
        return DefaultTemplateGlobalCss;
    }

    render() {
        return html`
            <div class="section-content column identity stretch">
                <p class="identity-name">${this.name} ${this.surname}</p>
                <p class="cv-annotation">Curriculum Vitae</p>
            </div>
        `;
    }

    get name() {
        return (this.cv && this.cv.name) ? this.cv.name : '';
    }

    get surname() {
        return (this.cv && this.cv.surname) ? this.cv.surname : '';
    }

}

