import { useState } from 'react';

function Counter () {

    const [count, setCount] = useState(0);
    const [alpha, setAlfa] = useState(1);
    const MAX_COUNT_VALUE = 1000;
    const MIN_COUNT_VALUE = -1000;

    function handleIncreaseCount() {
        if (canIncrease()) setCount(count + alpha);
    }
    
    function handleDecreaseCount() {
        if (canDecrease()) setCount(count - alpha);
    }
    
    function handleChangeAlfa(element) {
        setAlfa(parseInt(element.target.value));
    }

    function canIncrease () {
        return ((count + alpha) <= MAX_COUNT_VALUE); 
    }
    
    function canDecrease() {
        return ((count - alpha) >= MIN_COUNT_VALUE);
    }

    return (
        <div style={{
            border: 'solid 1px gray',
            paddingInline: '1.5rem',
            paddingBottom: '1.5rem'
        }}>
            <h2> Counter </h2> 
            <span>
                <code>useState</code>
            </span>
            <hr />
            <p> 
                value: <strong> {count}</strong>
                <br />
                <small>(max: {MAX_COUNT_VALUE} min: {MIN_COUNT_VALUE})</small>
                <br />            
            </p>
            <label htmlFor="alpha">
                alpha: <input 
                        max={10}
                        min={1} 
                        defaultValue={1} 
                        name="alpha" 
                        type="number" 
                        placeholder="alpha" 
                        onChange={e => handleChangeAlfa(e)}
                        title={"set a value beetwen (" + MIN_COUNT_VALUE + ") and " + MAX_COUNT_VALUE}
                        />
            </label>
            <br />
            <br />
            <button onClick={handleIncreaseCount}> increase </button> or <button onClick={handleDecreaseCount}> decrease </button> by alpha
        </div>
    );
}

export default Counter;