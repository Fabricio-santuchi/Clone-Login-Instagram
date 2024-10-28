import links from "./link.json";

const Footer = () => {
  return (
    <footer className=" row-span-1 col-span-1 md:col-span-2 mt-12 text-colorTxt mb-20">
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-md px-10">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      <ul className="flex justify-center gap-10 mt-6 text-md">
        <li>Português (Brasil)</li>
        <li>© 2024 Instagram from Meta</li>
      </ul>
    </footer>
  );
};

export default Footer;
