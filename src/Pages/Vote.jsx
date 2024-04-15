
import './Vote.css'
import Vote1 from "../VoteComponent/Vote1";
function Vote() {
    
    return (
        <div className="vote">
            <h1>Vote For Your Choice</h1>
                <div className="vote-link">
                    <Vote1></Vote1>
                </div>
        </div>
    );
}

export default Vote;
