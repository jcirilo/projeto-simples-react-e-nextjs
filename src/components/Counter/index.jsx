import { useState } from 'react';
import componentDefaultStyle from '../../styles/global';

function Counter () {

    const [count, setCounter ] = useState(0);

    return (
        <div style={componentDefaultStyle}>
            
            <h2> Counter </h2> 
            
            <span><code>useState</code></span>
            
            <hr />

            <p> counter value: <strong>{ count } </strong></p>

            <button onClick={() => setCounter(count => count + 1)}> Add </button>
            <button onClick={() => setCounter(count => count - 1)}> remove </button>
        </div>
    );
}

export default Counter;