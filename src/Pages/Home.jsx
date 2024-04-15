import './Home.css'
import img1 from '../material/home1.jpg'
import img2 from '../material/home2.jpg'
import { Link } from 'react-router-dom'
function Home()
{
    return(
        <div className="home">
            <div className="content">
            <div className="left">
                <p>your VOTE</p>
                <p>your VOICE</p>
                <div className="divert">
                    <Link to= "./vote"
                     style={{textDecoration:'none' }}>
                    <h1>Vote Now!</h1>
                    </Link>
                </div>
            </div>
            <div className="right">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            </div>
        </div>
    )
}
export default Home