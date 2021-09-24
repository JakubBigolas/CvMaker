import {Cell} from './cell';
import {Row} from './row';

export class Column {

    _cell : Cell | null = null;
    _row : Row;

    constructor (row: Row) {
        this._row = row;
        row.columns.push(this)
    }

    get cell() : Cell | null {
        return this._cell;
    }

    set cell(cell : Cell | null) {
        this._cell = cell;
    }

    get row() : Row {
        return this._row;
    }

}