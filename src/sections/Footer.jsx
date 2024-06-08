import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-between flex-wrap max-lg:flex-col gap-20">
        <div className="flex flex-col items-start">
          <img src={footerLogo} alt="footer logo" width={150} height={46} />
          <p className="text-base text-white font-montserrat mt-6 sm:max-w-sm leading-7">
            Get shoes ready for the new team at your nearest Nike store. Find
            your perfect size in Store. Get rewards.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <img src={icon.src} alt={icon.a} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat mb-6 leading-normal font-medium text-2xl">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 cursor-pointer text-white-400 text-base font-montserrat leading-normal hover:text-slate-gray"
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between max-sm:flex-col max-sm:items-center text-white-400">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
