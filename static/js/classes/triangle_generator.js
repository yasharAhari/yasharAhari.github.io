import {Node} from './node.js';

class TriangleGenerator{
    constructor(pageWidth, pageHeight, density) {
        this._width = pageWidth;
        this._height = pageHeight;

        this._nodes = this.#generateRandomDots(density);

    }

    drawNodes(canvasContext)
    {
        this._nodes.forEach((node)=>{
            canvasContext.fillRect(node.x, node.y, 1 , 1);
        });
    }

    drawLineFromFirstNodeToAll(ctx)
    {
        let n0 = this._nodes[0];
        ctx.beginPath();
        ctx.moveTo(n0.x,n0.y);
        this._nodes.forEach((node)=>{
           ctx.lineTo(node.x,node.y);

           node.progress();
        });
        ctx.stroke();
        ctx.closePath();

    }


    /**
     * Creates and returns a list of randomly generated nodes with in page width and height by considering the
     * density.
     * @param density {number} the density in which create the nodes, must between 0 - 1.
     * @returns {[]} the list of randomly generated nodes
     */
    #generateRandomDots(density)
    {
        // calculate number of node needed
        let size = this._width * this._height;
        let numberOfNodes = size * density;

        // randomly generate nodes and add them to the list
        let nodes = [];
        for(let i=0; i < numberOfNodes; ++i)
        {
            let x = Math.floor(Math.random() * this._width);
            let y = Math.floor(Math.random() * this._height);
            let newNode = new Node(x,y);
            newNode.dx = (((Math.random() * -1) + (Math.random())) / 2);
            newNode.dy = (((Math.random() * -1) + (Math.random())) / 2);
            nodes.push(newNode);
        }

        return nodes;
    }
}




export {TriangleGenerator}
