import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link nk rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Licorice&display=swap" rel="stylesheet"/>
            <div className="holder">
                <div className="logo">
                    <a href='./'><img src="img/logo.png" width="100" alt="logo"/></a>
                    <h1>¿Qué comemos?</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;