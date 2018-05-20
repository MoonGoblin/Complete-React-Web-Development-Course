console.log("App.js is running!");

// create app object title/subtitle
// use title/subtitle in the template
// render template

// only render the subtitle (and p tag) if the subtitle exists - logical and operator
// create a new property in app options: ["One", "Two"]
// conditionally render a new p tag - set text on whether or not there are options - 
// if options.length > 0 "Here are your options" else "No options" new paragraph tag below 
// subtitle - ternary operator would be a great fit


var app = {
    title: "Indecision App",
    subTitle: "Put your life in your computer's hands!",
    options: ["One", "Two"]
}


//JSX - JavaScript XML - a JavaScript syntax "extension" provided by REACT
var template = (
<div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
</div>
);

    //{(app.options && app.options.length > 0) && <p>Here are your options: {app.options}</p>}


// Create a templateTwo var JSX expression
// div 
// h1 tag - your name
// p tag - Age: your age
// p tag - Location: Your city
// Render templateTwo instead of template

var user = {
    name: "Andrew",
    age: 55,
    location: "Hilo, Hawaii"
}


function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}


var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

//the one method we are going to use with REACTDOM
//It takes two arguments:
//JSX you want to render
//where you'd like to render it - the DOM element.
ReactDOM.render(template, appRoot);