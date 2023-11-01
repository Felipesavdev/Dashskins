import Footer from "../../components/templates/footer";
import Header from "../../components/templates/header";
import Banner from "../../components/ui/banner";
import Selects from "../../components/ui/selects";

import './styles.scss'

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Banner />
        <Selects />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;