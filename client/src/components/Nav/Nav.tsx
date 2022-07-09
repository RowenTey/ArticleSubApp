import { useContext } from "react";
import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context";
import './Nav.css';

const LeftNavContainer = styled.div`
    margin-left: auto;
`;

const Nav = () => {
    const [state, setState] = useContext(UserContext);
    
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setState({data: null, loading: false, error: null});
        localStorage.removeItem("token");
        navigate("/");
    }
    
    return (
        <Navbar className="nav-bar">
            <NavItem>
                <Link to="/" className="nav-link nav-item">Home</Link>
            </NavItem>
            {state.data && (
                <LeftNavContainer>
                    <NavItem>
                        <NavLink onClick={handleLogout} className="nav-item">Logout</NavLink>
                    </NavItem>
                </LeftNavContainer>
            )}
        </Navbar>
    );
};

export default Nav;