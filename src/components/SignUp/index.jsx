import CustomLink from "../CustomLink";

const SignUp = () => {
  return (
    <section className="w-full qpx:border qpx:rounded-sm my-4 text-center p-7">
      <p className="text-lg">
        Não tem uma conta?{" "}
        <CustomLink className="text-customBlue font-semibold">
          Cadastre-se
        </CustomLink>
      </p>
    </section>
  );
};

export default SignUp;
