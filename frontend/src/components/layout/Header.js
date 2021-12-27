import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="img/logo.png" width="100" alt="logo"/>
                    <h1>¿Qué comemos?</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;