class Node{

    _dx = 0;
    _dy = 0;

    constructor(x,y) {
        this._x = x;
        this._y = y;
    }

    progress()
    {
        this._x += this._dx;
        this._y += this._dy;

        if(this._y < 0 || this._y > window.innerHeight)
        {
            this._dy = -this._dy;
        }

        if(this._x < 0 || this._x > window.innerHeight)
        {
            this._dx = -this._dx;
        }

    }

    get x()
    {
        return this._x;
    }

    get y()
    {
        return this._y;
    }

    set x(x)
    {
        this._x = x;
    }

    set y(y)
    {
        this._y = y;
    }

    get dx() {
        return this._dx;
    }

    set dx(value) {
        this._dx = value;
    }

    get dy() {
        return this._dy;
    }

    set dy(value) {
        this._dy = value;
    }
}



export {Node}
