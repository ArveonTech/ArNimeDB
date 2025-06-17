const Footer = () => {
  const iconList = [
    { path: "https://www.instagram.com/4hdarizq1/", icon: "/icons/instagram.png", name: "Instagram" },
    { path: "https://www.linkedin.com/in/ahdarizqi/", icon: "/icons/linkedin.png", name: "Linkedin" },
    { path: "https://github.com/ArveonTech", icon: "/icons/github.png", name: "Github" },
  ];
  return (
    <div className="pt-10 py-20 mt-20 bg-slate-900 text-white flex flex-col items-center md:pt-20 md:py-10 w-full">
      <h1 className="text-2xl font-semibold mb-10">ArveonTech</h1>
      <div className="flex gap-10">
        {iconList.map(({ path, icon, name }, i) => (
          <div key={i}>
            <a href={path} target="_blank" className="flex flex-col items-center">
              <img src={icon} alt={name} className="w-16 mb-2" />
              <p className="text-center">{name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
