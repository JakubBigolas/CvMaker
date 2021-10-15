import {Column} from './column';
import {CellContent} from './cell-content';

export class Cell {

    _cellContent: CellContent[];
    _column : Column;

    constructor (column: Column) {
        this._column = column;
        this._cellContent = [];
        column.cell = this;
    }

    get cellContent() : CellContent[] {
        return this._cellContent;
    }

    set cellContent(cellContent : CellContent[]) {
        this._cellContent = cellContent;
    }

    get column() : Column {
        return this._column;
    }

}