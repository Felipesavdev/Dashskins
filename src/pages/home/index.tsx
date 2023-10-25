import Footer from "../../components/templates/footer";
import Header from "../../components/templates/header";
import Banner from "../../components/ui/banner";
import './styles.scss'

const HomePage = () => {
	return (
		<>
			<Header />
			<div className="content">
				<Banner />
			</div>
			<Footer />
		</>
	);
}
export default HomePage;