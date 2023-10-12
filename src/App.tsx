import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import Header from "./components/layout/Header";
import RegisterForm from "./components/registerForm";
import itemImage1 from "./assets/Page-1.svg";
import itemImage2 from "./assets/Page-2.svg";
import itemImage3 from "./assets/Page-3.svg";
import itemImage4 from "./assets/Page-4.svg";
import itemImage5 from "./assets/Page-5.svg";
import itemImage6 from "./assets/Page-6.svg";
import itemImage7 from "./assets/Page-7.svg";
import ItemCard from "./components/ItemCard";

function App() {
  const itemsList = [
    { label: "1. Le réve liber l'expression", image: itemImage1 },
    { label: "2. Le sens éclaire le parcours", image: itemImage5 },
    { label: "3. La différence rend unique", image: itemImage2 },
    { label: "4. La valeur humaine met en mouvement", image: itemImage6 },
    { label: "5. La Clé exprime Ie style", image: itemImage3 },
    { label: "6. Le parcours associe réve et realité", image: itemImage7 },
    { label: "7. Le Ciel bleu révåle l'alignement", image: itemImage4 },
  ];

  async function handleClick() {
    try {
      const response = await fetch("https://api.db-ip.com/v2/free/self");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const ipNumbers = data.ipAddress.split(".").map(Number);
      const sumOfIpNumbers = ipNumbers.reduce(
        (sum: number, num: number) => sum + num,
        0
      );

      const result = sumOfIpNumbers < 100 ? "ko" : "ok";
      alert(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <Header />
      <section id="hero" className="hero d-flex">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left-side">
              <div className="px-5">
                <h1>Pour commencer...</h1>
                <p>
                  Faire votre Shynlei, jouer avec, c'est l'occasion d'écouter
                  vos réves, de les partager et de prendre confiance dans votre
                  richesse.
                </p>
                <RegisterForm />
              </div>
            </div>
            <div className="col-md-6 px-5 right-side">
              <h1>Votre Shynlei c'est..</h1>
              <p>
                7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour
                éclairer le sens, 3 interprétations pour vous aider..
              </p>

              <div className="row mt-5">
                {itemsList.map((item, idx) => (
                  <div className="col-lg-6 col-sm-12" key={idx}>
                    <ItemCard image={item.image} label={item.label} />
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <button className="" onClick={handleClick}>
                  EXPRIMER MES REVES <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
