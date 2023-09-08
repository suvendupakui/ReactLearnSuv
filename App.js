//react createElement is an object => HTML browser understand

const parent = React.createElement("div", 
{id:"parent"}, 
[React.createElement("div",{id:"child"}, 
[React.createElement("h1",{}, "I am h1 tag"), React.createElement("h2",{}, "I am h2 tag")]),
React.createElement("div",{id:"child2"}, 
[React.createElement("h3",{}, "I am h3 tag"), React.createElement("h4",{}, "I am h4 tag")])]
);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React 2!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// while render converting into html

root.render(parent);