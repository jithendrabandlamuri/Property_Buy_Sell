import React from "react";

const AdminNavbar = () => {
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="collapse navbar-collapse d-flex justify-content-center fw-bold" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/adminbuyerview">Buyer View</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/adminsellerview">Seller View</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default AdminNavbar;