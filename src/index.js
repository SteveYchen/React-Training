import React from 'react'; //create manage componet 
import ReactDOM from 'react-dom'; //just for DOM

import SearchBar from './components/search_bar'

const API_KEY = ''

// Create a new component. This component should produce 
// some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this compent's generated HTML and put it
// on the page (in the DOM)
//React.render(App);

ReactDOM.render(<App /> /*** same as <App></> ***/, document.querySelector('.container'));