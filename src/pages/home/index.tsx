import { useNavigate } from "react-router-dom";
import Header from "../../components/templates/header";
import Banner from "../../components/ui/banner";
import Buttons from "../../components/ui/buttons";

const HomePage = () => {
	const navigate = useNavigate();
		return (
		<>
			<Header />
			<button onClick={() => navigate('/contact')}>
				Contact
			</button>             
			<Banner /> 
			<Buttons/>
		</>
	)
}

export default HomePage;