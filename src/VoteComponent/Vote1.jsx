import { useState } from "react";
import './Vote1.css'

function Vote1() {
    const [option1, setOption1] = useState(0);
    const [option2, setOption2] = useState(0);
    const [option3, setOption3] = useState(0);
    const [option4, setOption4] = useState(0);
    const [count, setCount] = useState(0);

    return (
        <div className="Vote1">
            <h2>Time for playing Cricket</h2>
            <div className="container">
                6AM
                <button style={{'--percentage': `${count > 0 ? (option1 / count * 100).toFixed(2) : 0}%`}} onClick={() => {setOption1(option1 + 1); setCount(count + 1);}}>
                    {count > 0 ? (option1 / count * 100).toFixed(2) : 0}
                </button><br />
                7AM
                <button style={{'--percentage': `${count > 0 ? (option2 / count * 100).toFixed(2) : 0}%`}} onClick={() => {setOption2(option2 + 1); setCount(count + 1)}}>
                    {count > 0 ? (option2 / count * 100).toFixed(2) : 0}
                </button><br />
                8AM
                <button style={{'--percentage': `${count > 0 ? (option3 / count * 100).toFixed(2) : 0}%`}} onClick={() => {setOption3(option3 + 1); setCount(count + 1)}}>
                    {count > 0 ? (option3 / count * 100).toFixed(2) : 0}
                </button><br />
                9AM
                <button style={{'--percentage': `${count > 0 ? (option4 / count * 100).toFixed(2) : 0}%`}} onClick={() => {setOption4(option4 + 1); setCount(count + 1)}}>
                    {count > 0 ? (option4 / count * 100).toFixed(2) : 0}
                </button>
            </div>
        </div>
    );
}

export default Vote1;
