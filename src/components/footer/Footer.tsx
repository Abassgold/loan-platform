import Link from "next/link";
import { navLinks } from "../navigation/content";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const textLinkClasses = "text-gray-300 hover:text-gray-400 transition-colors duration-200";
  const socialIconClasses = "text-gray-400 hover:text-gray-300 transition-colors duration-200";

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/CreditGrow.png"
                alt="CreditGrow logo"
                width={120}  
                height={40} 
                className="h-auto"
              />
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left mt-2"> 
              Start saving the smart way. Your trusted partner in financial growth.
            </p>
          </div>

          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-center md:text-left">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2"> {/* Reduced from mt-4 */}
                {navLinks?.map((item, index) => (
                  <li key={index} className="text-center md:text-left">
                    <Link 
                      href={item.href} 
                      className={`${textLinkClasses} text-sm`}
                    >
                      {item.child}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-center md:text-left">
              Contact
            </h3>
            <address className="not-italic text-sm text-gray-400 mt-3 text-center md:text-left"> {/* Added mt-3 */}
              123 Financial Street<br />
              New York, NY 10001<br />
              <a href="mailto:info@creditgrow.com" className={textLinkClasses}>
                info@creditgrow.com
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-center md:text-left">
              Connect with us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3"> {/* Added mt-3 */}
              <a href="#" className={socialIconClasses} aria-label="Twitter">
                <Twitter size={18} /> {/* Reduced from 20 */}
              </a>
              <a href="#" className={socialIconClasses} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className={socialIconClasses} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className={socialIconClasses} aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - reduced top margin */}
        <div className="mt-8 border-t border-gray-700 pt-6"> {/* Reduced from mt-12 */}
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} CreditGrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;