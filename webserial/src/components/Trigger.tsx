import { useState, useEffect } from 'react'
import Sketch from 'react-p5';
import p5Types from 'p5';
import Vec from '../utils/p5Vec';

function Trigger(props: { keyword: string }) {

    const [key, setKey] = useState('1')
    useEffect(() => {
        console.log(props.keyword)
        if (props.keyword !== null && props.keyword !== undefined && props.keyword !== '') {
            setKey(props.keyword)
        }
    }, [props.keyword])

    const [vec, setVec] = useState<Vec>(new Vec(0, 0))
    const d1 = 150
    const d2 = 50
    const angle = 10

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(300, 300).parent(canvasParentRef)
        p5.angleMode(p5.DEGREES)
        p5.frameRate(30)
        p5.noStroke()
        setVec(p5.createVector(d1 / 2, 0))
    }

    const draw = (p5: p5Types) => {
        p5.background('#198964')

        if (key === '0') {
            p5.fill(0)
        } else {
            p5.fill(240)
        }

        p5.translate(p5.width / 2, p5.height / 2)
        vec.rotate(angle)
        p5.circle(vec.x, vec.y, d2)
    }

    return <Sketch setup={setup} draw={draw} />;
}

export default Trigger
