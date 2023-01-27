import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function paraHome() {
    navigate("/home");
  }

  return (
    <div className="container">
      <div className="box">
        <Title title="Login" />
        <Input label="Usuário" type="text" />
        <Input label="Senha" type="password" />
        <Button button="Entrar" redireciona={paraHome} />
        <Link span="Esqueci minha senha" url="https://www.google.com" />
      </div>
    </div>
  );
}

export default Login;
