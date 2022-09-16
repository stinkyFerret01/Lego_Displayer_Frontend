//import des composants
import Cas from "../components/cas";

const Home = () => {
  return (
    <main className="main">
      <section className="homeTitle">
        <h1>HOME</h1>
        <h3>
          cherchois-tu à reluquer jolis chateaux? ou desirois-tu mirer à de
          foudroyantes armées? peut-etre t'interressois-tu à un preux soldat en
          particulier?
        </h3>
        <h3>Tu pourrois désormay le fayre ici!! </h3>
      </section>
      <section className="homeNav">
        <Cas type="Cas" />
        <Cas type="cAs" />
        <Cas type="caS" />
      </section>
    </main>
  );
};

export default Home;
