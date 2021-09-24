import {html, customElement, css, property, LitElement} from 'lit-element';

@customElement('subsection-date-basic-data-component')
export class SubsectionDateBasicDataComponent extends LitElement {

    @property({type: String})
    dateFrom = '';
    
    @property({type: String})
    dateTo = '';

    static get styles() {
        return css``;
    }

    render() {
        const dateFromHtml  = this.isEmpty(this.dateFrom) ? html``
            : html`<div class="subsection-date-from-basic-data" >${this.dateFrom}</div>`;
        const dateToHtml    = this.isEmpty(this.dateTo) ? html``
            : html`<div class="subsection-date-to-basic-data" >${this.dateTo}</div>`;
        const dateSeparatorHtml = (this.isEmpty(this.dateFrom) || this.isEmpty(this.dateTo)) ? html``
            : html`<div class="subsection-date-separator-basic-data" > - </div>`;
        return html`<div class="subsection-date-from-basic-data" >
            ${dateFromHtml}
            ${dateToHtml}
            ${dateSeparatorHtml}
        </div>`;
    }

    private isEmpty(value: string | null) : boolean {
        return value == null || value.length == 0;
    }

}

