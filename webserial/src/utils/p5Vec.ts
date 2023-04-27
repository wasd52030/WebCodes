import p5Types from 'p5';

class Vec extends p5Types.Vector {
    constructor(x: number, y: number, z?: number) {
        super()
        console.log(x, y, z)
        if (z !== undefined) {
            this.x = x
            this.y = y
            this.z = z
        } else {
            this.x = x
            this.y = y
        }
    }
}

export default Vec