const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" }, [ // when you have to give two or more elements make array at same level
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h1 tag")
        ]
        ),
        React.createElement("div", { id: "child2" }, [ // when you have to give two or more elements make array at same level
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h1 tag")
        ]
        )
    ]
);

console.log(parent);;

const root = ReactDOM.createRoot(document.getElementById("root"));//ReactDOM.createRoot react.dom puts the stuff into DOM
root.render(parent);



