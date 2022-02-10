import {useState} from "react";
import './App.css'

export function App() {
    const [time, setTime] = useState(0);
    const [func, setfunc] = useState()

    const starts = () => {
        setfunc(setInterval(() => {
            setTime((val) => val + 1000)
        }, 10))
    };

    const stop = () => {

        clearInterval(func)
        setTime(0);
    };

    const wait = () => {
        clearInterval(func)
    };

    return (
        <div className="App">
            <div className={'main-box'}>
                <div className={'display-box'}>
                    <span className={'display'}> {new Date(time).toISOString().slice(11, 19)}</span> <br/>
                </div>

                <div className={'buttons'}>
                    <button className={'start-button'} onClick={starts}>Start</button>

                    <button className={'stop-button'} onClick={stop}>Stop</button>

                    <button className={'reset-button'} onClick={wait}>Wait</button>

                </div>
            </div>
        </div>
    );
}


