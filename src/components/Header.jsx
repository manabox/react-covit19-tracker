import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Each Country</Link>
            <Link to="/world">World</Link>
        </div>
    )
}

export default Header;