import {Column} from './column';
import {Page} from './page';

export class Row {

    _columns = new Array<Column>();
    _page : Page;

    constructor (page: Page) {
        this._page = page;
        page.rows.push(this);
    }

    get columns() : Array<Column> {
        return this._columns;
    }

    set columns(columns : Array<Column>) {
        this._columns = columns;
    }

    get page() : Page {
        return this._page;
    }

}