import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const MAX = 40;
    const MIN = 0;

    const increase = () => {
        if (count >= MAX) {
            alert("Maximum limit reached!");
            return;
        }
        setCount(count + 1);
    };

    const decrease = () => {
        if (count <= MIN) {
            alert("Minimum limit reached!");
            return;
        }
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div style={{
            textAlign: "center",
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            height: "100vh",
            paddingTop: "100px",
            fontFamily: "Arial"
        }}>
            <h1 style={{ color: "white", fontSize: "40px" }}>Counter App</h1>
            <h2 style={{ color: "white", fontSize: "50px" }}>{count}</h2>

            <button style={{
                backgroundColor: "green",
                color: "white",
                padding: "12px 20px",
                margin: "10px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
            }} onClick={increase}>
                Increase +
            </button>

            <button style={{
                backgroundColor: "green",
                color: "white",
                padding: "12px 20px",
                margin: "10px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
            }} onClick={decrease}>
                Decrease -
            </button>

            <button style={{
                backgroundColor: "green",
                color: "white",
                padding: "12px 20px",
                margin: "10px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
            }} onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default Counter;