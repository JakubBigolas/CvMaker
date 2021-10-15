export class Image {

    _path = '';
    _width = '2cm';
    _height = '3cm';

    get path() : string {
        return this._path;
    }

    set path(path: string) {
        this._path = path;
    }

    get width() : string {
        return this._width;
    }

    set width(width: string) {
        this._width = width;
    }

    get height() : string {
        return this._height;
    }

    set height(height: string) {
        this._height = height;
    }

}