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
        <><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/userMain">Home</a>
                    </li>
                    {!isAuth ? (
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                    ) : (
                        <>
                            <li class="nav-item">
                                <a class="nav-link" href="/userproperties">My Properties</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Addproperty">Sell property</a>
                            </li>
                            <li class="nav-item">
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