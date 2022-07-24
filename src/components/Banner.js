import "../css/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
	const title = "The jungle house";
    return (
        <div className="banner">
			<img src={logo} alt={title} className="logo" />
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;