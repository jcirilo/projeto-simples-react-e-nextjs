import { useState } from 'react'

export default function ValueSelector() {
    
    const RANGE_MIN_VALUE = 0;
    const RANGE_MAX_VALUE = 100;
    const [rangeValue, setRangeValue] = useState(RANGE_MIN_VALUE);

    return (
        <div style={{
            border: 'solid 1px gray',
            paddingInline: '1.5rem',
            paddingBottom: '1.5rem'
        }}>
            <h2>Range</h2>
            <span>
                <code>useState</code>
            </span>
            <hr />
            <label htmlFor="range">
                <p> Value: <strong>{rangeValue}</strong></p>
                <input
                    onChange={ element => setRangeValue(element.target.value) } 
                    type="range"
                    name="range"
                    min={ RANGE_MIN_VALUE }
                    max={ RANGE_MAX_VALUE }
                    defaultValue={ RANGE_MIN_VALUE }
                />
            </label>
        </div>
    )
}