import AvailableApps from "../AvailableApps";
import SignUp from "../SignUp";
import LoginForm from "../LoginForm";

const MainContent = () => {
  return (
    <main className="row-span-5 flex justify-center md:justify-start md:ml-8 mt-4 min-w-0">
      <div className="flex flex-col justify-center items-center w-[350px]">
        <LoginForm />
        <SignUp />
        <AvailableApps />
      </div>
    </main>
  );
};

export default MainContent;
