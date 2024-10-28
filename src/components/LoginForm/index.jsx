import { IoLogoFacebook } from "react-icons/io";
import ImgLogo from "/src/assets/insta-logo.png";
import Button from "../Button";
import InputField from "../InputField";
import Divider from "../Divider";
import SocialLink from "../SocialLink";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function FormSubmit(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
    if (!username || !password) {
      alert("Pfv Preencha os campos.");
      return;
    }
    alert("Login feito com sucesso...");
  }

  return (
    <form
      onSubmit={FormSubmit}
      className="w-full flex flex-col justify-center items-center qpx:border qpx:rounded-sm py-0 qpx:py-4 px-12 gap-2 min-w-0 mt-0 qpx:mt-16 md:mt-0"
    >
      <img
        className="w-60 mt-4 mb-4 max-w-full"
        src={ImgLogo}
        alt="Logo do Instagram"
      />

      <InputField
        type="text"
        placeholder="Telefone, nome de usuário ou email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">Entrar</Button>

      <Divider />

      <SocialLink>
        <IoLogoFacebook className="text-3xl" />
        Entrar com o Facebook
      </SocialLink>

      <SocialLink className="text-customFace text-md cursor-pointer">
        Esqueceu a senha?
      </SocialLink>
    </form>
  );
};

export default LoginForm;
