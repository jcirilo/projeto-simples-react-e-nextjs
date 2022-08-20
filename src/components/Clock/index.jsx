import componentDefaultStyle from '../../styles/global'
import { useState, useEffect } from 'react';

function Clock () {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        handleUpdateHours();
        handleUpdateMinutes();
        handleUpdateSeconds();
        watchTime();

    }, [])

    function watchTime() {
        setInterval(() => {
            handleUpdateHours();
            handleUpdateMinutes();
            handleUpdateSeconds();
        }, 500)
    }

    function handleUpdateHours() {
        const hours = new Date().getHours();
        setHours(hours)
    }

    function handleUpdateMinutes() {
        const minutes = new Date().getMinutes();
        setMinutes(minutes)
    }

    function handleUpdateSeconds() {
        const seconds = new Date().getSeconds();
        setSeconds(seconds)
    }

    function putTensPlace(number) {
        return (number.toString().length < 2) ? `0${number}` : number
    }

    return (
        < div style={componentDefaultStyle}>
            <h2> Clock </h2>
            <span><code>useState</code>, <code>useEffect</code></span>
            <hr />
            <p>
                {putTensPlace(hours)}:
                {putTensPlace(minutes)}:
                {putTensPlace(seconds)}
            </p>
        </div>
    )
}

export default Clock;