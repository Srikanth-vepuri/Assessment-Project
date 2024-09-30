import { useContext } from "react";
import Context from "../Context/Context";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Admindashboard.css"

function AdminDashboardFunction() {
    const { globalUser } = useContext(Context);
    const navigate = useNavigate();

    return (
        <><div classname="home">
            <div className="home-container">
                <div className="home-info">
                    <p>Username: {globalUser.Username}</p>
                    <p>Email: {globalUser.Email}</p>
                </div>
                <div className="home-navigation">
                    <h2><Link to='/createQuiz' className="nav-link">Create a Quiz</Link></h2>
                    <h2><Link to='/viewResults' className="nav-link">View Results</Link></h2>
                </div>
            </div>
            </div>
        </>
    );
}

export default AdminDashboardFunction;
