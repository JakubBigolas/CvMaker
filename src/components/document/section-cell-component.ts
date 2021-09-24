import {html, customElement, css, property, TemplateResult} from 'lit-element';
import {SectionComponent} from '../../../section-component';
import {Cell} from '../../../../../model/document/cell';

@customElement('section-cell-component')
export class SectionColumnComponent extends LitElement {

    @property({type: Cell})
    cell: Cell | null;

    constructor () {
        super();
        this.cell = null;
    }

    static get styles() {
        return css`
        `;
    }

    render() {
        return html`
            <div class="cell-box" style="${this.getBoxStyle()}">
                <div class="cell">
                    ${this.getInnerHtml()}
                </div>
            </div>
        `;
    }

    private getInnerHtml() : TemplateResult {
        return this.cell ? this.cell.html : html`empty cell`;
    }

    private getBoxStyle() : String {
        return `${this.getMarginLeft()} ${this.getMarginRight()} ${this.getMarginTop()} ${this.getMarginBottom()} `;
    }

    private getMarginLeft() : string {
        if(this.cell != null) {
            const column = this.cell.column;
            const columns = this.cell.column.row.columns;
            return columns.indexOf(column) == 0 ? `margin-left: ${this.cell.column.row.page.document.marginLeft};` : '';
        } else {
           return '';
        }
    }
    
    private getMarginRight() : string {
        if(this.cell != null) {
            const column = this.cell.column;
            const columns = this.cell.column.row.columns;
            return columns.indexOf(column) == (columns.length - 1) ? `margin-right: ${this.cell.column.row.page.document.marginRight};` : '';
        } else {
           return '';
        }
    }
    
    private getMarginTop() : string {
        if(this.cell != null) {
            const row = this.cell.column.row;
            const rows = this.cell.column.row.page.rows;
            return rows.indexOf(row) == 0 ? `margin-top: ${this.cell.column.row.page.document.marginTop};` : '';
        } else {
           return '';
        }
    }
    
    private getMarginBottom() : string {
        if(this.cell != null) {
            const row = this.cell.column.row;
            const rows = this.cell.column.row.page.rows;
            return rows.indexOf(row) == (rows.length - 1) ? `margin-bottom: ${this.cell.column.row.page.document.marginBottom};` : '';
        } else {
           return '';
        }
    }

}

