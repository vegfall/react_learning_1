import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
    return <div>
        <h1>Hi</h1>
        <h2>Bye</h2>
    </div>
}

root.render(<Application/>)