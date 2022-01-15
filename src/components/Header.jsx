import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="menu">
            <Link to="/" className="btn">Each Country</Link>
            <Link to="/world" className="btn">World</Link>
        </div>
    )
}

export default Header;