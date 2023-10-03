import { useNavigate } from "react-router-dom";
import Header from "../../components/templates/header";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header />
			<button onClick={() => navigate('/contact')}>
				Contact
			</button>              
		</>
	)
}


export default HomePage