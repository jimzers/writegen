# WriteGen JavaScript Style Guide


## Table of Contents
* [Whitespace](#whitespace)
* [Column Limit](#columns)
* [Import Statements](#import)
* [Creating New Lines](#newlines)
* [Commenting](#comments)
* [Example Code](#examples)

<a name="whitespace"></a>
## Whitespace
- With the exception of function calls, every opening parentheses must have whitespace before it, and every closing parentheses must have whitespace following [it.](#whitespaceExample1)
<a name="whitespaceExample1"></a>
```
    for (int i = 0; i < array.length; i++) {
        text += array[i] + <br>;
    }
```

- Equal signs should have whitespaces on [either side.](#whitespaceExample2)
<a name="whitespaceExample2"></a>
```
var num = 6; 
```

- For consistency and readability, four spaces will equal a tab, and we should do our best to utilize spaces instead of tabs.


<a name="columns"></a>
## Column Limit
- With the exception of the use of strings, avoid line widths longer than 100 characters.
- When using code as object attributes, function parameters, styling attributes, etc. that exceeds the character limit, make sure that each attribute is aligned and separate onto a [new line](#split).
<a name="split"></a>
```
function someExtremelyLongFunctionName (
    writingGeneratorName, articleTitle, articlePictureCaption) {
    // example for splitting up parameters onto a new line
}
```

<a name="import"></a>
## Import Statements
- Place all import statements above all non-import statements in order to avoid [any surprises.](#importsBefore)
<a name="importsBefore"></a>
```
// bad example
import Question from "./question"

function App () {
    <Question/>
}

import Answer from "./answer"

// good example
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

function AppTwo () {
    <Header/>
    <Content/>
    <Footer/>
}
```

- Do not write ```import``` and ```export``` statements on the [same line.](#importExport)
<a name="importExport"></a>
```
// bad 
export { spongebob as default } from './WriteGen';

// good 
import { spongebob } from './WriteGen';
export default spongebob;
```

- When having multiple imports from one source that exceed the column limit, split the import into [multiple lines.](#importstatement)
<a name="importstatement"></a>
```
import {
    componentA, 
    componentB,
    componentC,
    componentD
} from ""./components";
```

<a name="newlines"></a>
## Creating New Lines
- Utilize new lines to separate [function calls.](#newLine1)
<a name="newLine1"></a>
```

    function Article (props) {
        return (<div>
            <h1> props.title </h1>
            <p> props.name </p>
        </div>)
    }

    function Question (props) {
        return(<div>
            <p> Question: {props.question} <p>
        </div>)
    }
```

- Object attributes should be in their [own lines](#objLine).
<a name="objLine"></a>
```
<Joke oneJoke={{question:"Hear about the new restaurant called Karma?", 
    answer:"There’s no menu: You get what you deserve."}}/>
```

- Avoid utilizing multiple blank lines consecutively.
- Each Javascript component or function call should be on its [own line.](#ownLine)
<a name="ownLine"></a>
```
// bad example
return (<div><h1 style={hSty}>Jokes!</h1><h1 style={hSty}>Puns!</h1></div>)

// good example
return (<div>
    <h1 style={hSty}>Jokes!</h1>
    <h1 style={hSty}>Puns!</h1>
    </div>)

```

- With the exception of inline styles, each styling selector should be on its own [independent line.](#styleLine)
<a name="styleLine"></a>
```
// bad example
const hSty = {
        textAlign: "center", fontSize: 20
    }

// good example
const hSty = {
        textAlign: "center",
        fontSize: 20
    }
```

<a name="comments"></a>
## Commenting
- Utilize whitespace right after comments (```//``` or ```/**```) in order to increase readability.
- When needed, use small tags as ```TODO:``` or ```FIXME:``` as notes for other developers.
- Use comments as needed to explain complicated concepts, solutions that are not obvious, and overall architecture of the program.

<a name="examples"></a>
## Additional Example Functions

```
    if (props.ID == "1") {
        <h1> First! </h1>  
    } 
```
```
import React from "react"

function Joke (props) {
    const JokeStyle = {
        backgroundColor:"#F8F8FF",
        padding: 10,
        margin: 5,
        textAlign: "center",
        fontSize: 16
    }
    if (props.oneJoke.question && props.oneJoke.answer) {
        JokeStyle.color = "color:#008B8B"
        return(<div style={JokeStyle}>
        <p>{props.oneJoke.question}</p>
        <p>{props.oneJoke.answer}</p>
        </div>)
    } else if (!props.oneJoke.answer) {
        return(<div style={JokeStyle}>
        <p>{props.oneJoke.question}</p>
        </div>)
    }
}

export default Joke
```




