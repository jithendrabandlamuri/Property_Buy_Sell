import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Narbaruser = ({ setIsAuth, isAuth }) => {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            localStorage.clear()
            setIsAuth(false)
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/userMain">Home</a>
                    </li>
                    {!isAuth ? (
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/userproperties">My Properties</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Addproperty">Sell property</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sellerview">Seller View</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/buyerview">Buyer View</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/subscription">Subscription</a>
                            </li>
                            <li className="nav-item">
                                <Button variant="danger" onClick={handleLogout}>
                                    Log out
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Narbaruser;