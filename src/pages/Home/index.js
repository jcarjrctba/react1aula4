import "../../pages/Login/styles.css";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function paraLogin() {
    navigate("/");
  }

  return (
    <div className="container">
      <div className="box">
        <Title title="Home" />
        <Button button="Voltar para login" redireciona={paraLogin} />
      </div>
    </div>
  );
}

export default Home;
