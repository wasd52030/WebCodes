import { useRef, useState } from "react";

export default function Counter() {
    const [x, SetX] = useState(0)
    const textBox = useRef<HTMLInputElement>(null);

    return (
        <div>
            <button onClick={() => SetX(x - 1)}>{"<"}</button>
            <input type="number" value={x} ref={textBox}
                onChange={() => SetX(Number(textBox.current?.value))}
                style={{ textAlign: "center", width: "50px" }}
            />
            <button onClick={() => SetX(x + 1)}>{">"}</button>
        </div>
    )
}