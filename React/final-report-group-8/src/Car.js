import React from 'react';


export default function Car(props) {

    return (
        <>
            <button
                type='submit'
                onClick={(e) => {
                    e.preventDefault();
                    window.print()
                }}
                style={{ margin: "0px 10px" }}
            >
                列印
            </button>
            <div>總金額: {props.caritem.reduce((past, curr) => past + (curr.price * curr.count), 0)}</div>
        </>
    )
}