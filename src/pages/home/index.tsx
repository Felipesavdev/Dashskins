import Footer from "../../components/templates/footer";
import Header from "../../components/templates/header";
import Banner from "../../components/ui/banner";
import './styles.scss'

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;