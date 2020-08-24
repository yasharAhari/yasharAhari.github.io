/**
 * Node class represents the each node/vertex and its properties.
 * @version 1.0 8/24/2020
 *
 */
class Node{
    /**
     * amount of the change in x parameter of the node per frame
     * @type {number}
     * @private
     */
    _dx = 0;

    /**
     * amount of the change in y parameter of the node per frame
     * @type {number}
     * @private
     */
    _dy = 0;

    constructor(x,y) {
        /**
         * The x coordinate of the node's location
         * @type {number}
         * @private
         */
        this._x = x;

        /**
         * The y coordinate of the node's location
         * @type {number}
         * @private
         */
        this._y = y;
    }


    /**
     * The progress method should called on each frame. It will move the nodes based on dx and dy.
     * The node reflects when hits the page walls.
     */
    progress()
    {
        // location change based on speeds.
        this._x += this._dx;
        this._y += this._dy;

        // check for page boundaries and flip the speeds as needed.
        if(this._y < 0 || this._y > window.innerHeight)
        {
            this._dy = -this._dy;
        }

        if(this._x < 0 || this._x > window.innerHeight)
        {
            this._dx = -this._dx;
        }

    }

    /**
     * Gets the x coordinate of the node.
     * @returns {number}
     */
    get x()
    {
        return this._x;
    }

    /**
     * Gets the y coordinate of the node
     * @returns {number}
     */
    get y()
    {
        return this._y;
    }

    /**
     * Sets the x coordinate of the node.
     * @param x new x coordinate.
     */
    set x(x)
    {
        this._x = x;
    }

    /**
     * Sets the y coordinate of the y
     * @param y new y coordinate.
     */
    set y(y)
    {
        this._y = y;
    }

    /**
     * Gets the change in x coordinate/frame (i.e. horizontal speed)
     * @returns {number}
     */
    get dx() {
        return this._dx;
    }

    /**
     * Sets the change in x coordinate/frame (i.e. horizontal speed)
     * @param value new horizontal speed/frame.
     */
    set dx(value) {
        this._dx = value;
    }

    /**
     * Gets the change in y coordinate/frame (i.e. vertical speed)
     * @returns {number}
     */
    get dy() {
        return this._dy;
    }

    /**
     * Sets the change in y coordinate/frame (i.e. vertical speed)
     * @param value new vertical speed/frame.
     */
    set dy(value) {
        this._dy = value;
    }
}



export {Node}
