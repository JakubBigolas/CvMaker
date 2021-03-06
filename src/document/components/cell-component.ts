import {html, customElement, css, property, LitElement} from 'lit-element';
import {Cell} from '../../document/model/cell';
import './cell-content-component';

@customElement('cell-component')
export class CellComponent extends LitElement {

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
                    ${!this.cell ? null : this.cell.cellContent.map(content => html`<cell-content-component .cellContent="${content}"></cell-content-component>`)}
                </div>
            </div>
        `;
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

