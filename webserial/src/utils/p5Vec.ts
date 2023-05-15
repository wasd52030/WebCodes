import p5Types from 'p5';

class Vec extends p5Types.Vector {
    constructor(x: number, y: number, z?: number) {
        super()
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
    }
}

export default Vec