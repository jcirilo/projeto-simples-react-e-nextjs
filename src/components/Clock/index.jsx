import { useState, useEffect } from 'react';

function Clock () {

    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);

    function watchTime() {
        setInterval(() => {
            updateHours();
            updateMinutes();
            updateSeconds();
        }, 500)
    }

    function updateHours() {
        const hours = new Date().getHours();
        setHours(hours)
    }

    function updateMinutes() {
        const minutes = new Date().getMinutes();
        setMinutes(minutes)
    }

    function updateSeconds() {
        const seconds = new Date().getSeconds();
        setSeconds(seconds)
    }

    function formatWithTwoPlaces(number) {
        return (number.toString().length < 2) ? `0${number}` : number
    }

    useEffect(() => {
        watchTime();
    }, [])

    return (
        <div style={{
            border: 'solid 1px gray',
            paddingInline: '1.5rem',
            paddingBottom: '1.5rem'
        }}>
            <h2> Clock </h2>
            <span><code>useState</code>, <code>useEffect</code></span>
            <hr />
            <p>
                {formatWithTwoPlaces(hours)}:
                {formatWithTwoPlaces(minutes)}:
                {formatWithTwoPlaces(seconds)}
            </p>
        </div>
    )
}

export default Clock;