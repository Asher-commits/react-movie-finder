import { Link } from "react-router-dom"

function NavBar(){

    return(
        <>
        <Link to="/">Movie App</Link>

        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        </>
    )
}

export default NavBar