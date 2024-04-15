import React, { useState } from "react";
import './Vote1.css';

function Vote1() {
    const [option1, setOption1] = useState(0);
    const [option2, setOption2] = useState(0);
    const [option3, setOption3] = useState(0);
    const [option4, setOption4] = useState(0);
    const [count, setCount] = useState(0);
    const [poll, setPoll] = useState(true); 

    const endPolling = () => {
        setPoll(false); 
    };

    const getWinner = () => {
        const maxVotes = Math.max(option1, option2, option3, option4);
        let winners = [];
        if (maxVotes === 0) {
            return "No winner";
        }
        if (maxVotes === option1) {
            winners.push("6AM");
        }
        if (maxVotes === option2) {
            winners.push("7AM");
        }
        if (maxVotes === option3) {
            winners.push("8AM");
        }
        if (maxVotes === option4) {
            winners.push("9AM");
        }
        return winners.join(", ");
    };
    

    return (
        <div className="Vote1">
            <h2>Time for playing Cricket</h2>
            {poll ? ( 
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
            ) : ( 
                <div className="result">
                
                <h3>Winner(s): {getWinner()}</h3>
                <h2>Results:</h2>
                <p>6AM: {option1}</p>
                <p>7AM: {option2}</p>
                <p>8AM: {option3}</p>
                <p>9AM: {option4}</p>
                </div>

            )}
            {poll && ( 
                <div className="result">
                   <button style={{ fontSize: '20px', fontWeight: '600' }} onClick={endPolling}>
                   End Polling
                   </button>
                </div>
            )}
        </div>
    );
}

export default Vote1;
