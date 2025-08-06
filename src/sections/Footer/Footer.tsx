import { footerData } from "../../data/footerData";
import pattern from "../../assets/images/pattern-left.svg";

export const Footer = () => {
  const { quickLinks, socialLinks, contactInfo, companyInfo, companyLocation } =
    footerData;

  return (
    <section className="w-full">
      {/* CTA Bar.................................................. */}
      <div className="w-full min-h-[40dvh] 2xl:min-h-[30dvh] flex items-center justify-between bg-[var(--color-primary)] py-8 px-4 md:px-8 relative z-20 overflow-hidden">
        <div className="max-w-6xl">
          <h3 className="text-2xl md:text-3xl !text-[var(--color-text-on-primary)] mb-1">
            Ready to Transform Your Smile?
          </h3>
          <p className="!text-[var(--color-text-on-primary)]">
            Book your appointment today and let us help you achieve the perfect
            smile
          </p>
        </div>
        <a className="max-w-[16rem] w-full text-[var(--color-accent)] bg-[var(--color-text-on-primary)] px-8 py-3 rounded-lg font-semibold">
          Book Now
        </a>
        <figure className="pointer-events-none absolute left-0 -z-10 h-full w-full opacity-2.5">
          <img
            src={pattern}
            alt=""
            className="h-full w-full object-cover scale-150 md:scale-105"
          />
        </figure>
      </div>

      {/* Footer Content.................................................. */}
      <footer className="w-full bg-[var(--color-bg-footer)] text-[var(--color-text-on-primary)]">
        <div className="flex flex-col gap-8 justify-between items-center md:flex-row md:items-start px-4 md:px-8 pt-12 pb-8">
          {/* Company Info.................................................. */}
          <div className="flex flex-col  md:text-left items-center md:items-start">
            <div className="text-center md:text-left">
              <h4 className="text-2xl  lg:text-3xl  !text-[var(--color-text-on-primary)]">
                {companyInfo.name}
              </h4>
              <p className="!text-[var(--color-secondary)]">
                {companyInfo.tagline}
              </p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <companyLocation.icon />
              <div className="flex flex-col items-start">
                <span className="text-[var(--color-secondary)]">
                  {companyLocation.label}
                </span>
                <a
                  href={companyLocation.href}
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)]"
                >
                  {companyLocation.value}
                </a>
              </div>
            </div>
            <ul className="flex mt-4 gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-on-primary)] hover:text-[var(--color-accent)] transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links.................................................. */}
          <div className="flex flex-col space-y-4 items-center md:items-start mt-4 md:mt-0">
            <h4 className="text-xl md:text-lg lg:text-xl !text-[var(--color-text-on-primary)]">
              Quick Links
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="nav-link relative w-fit text-[var(--color-text-on-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl md:text-lg lg:text-xl !text-[var(--color-text-on-primary)]">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4 mt-4 items-center md:items-start">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.id}
                    href={contact.href}
                    target={contact.type === "location" ? "_blank" : undefined}
                    rel={
                      contact.type === "location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2 text-[var(--color-text-on-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <IconComponent sx={{ color: "var(--color-accent)" }} />
                    <div className="flex flex-col">
                      <span className="text-sm text-[var(--color-secondary)]">
                        {contact.label}
                      </span>
                      <span className="font-medium">{contact.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-muted)] py-6">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <p className="text-[var(--color-text-secondary)]">
              {companyInfo.copyright}
            </p>
            <p className="flex gap-1 items-center justify-center mt-2 font-light">
              Crafted by{" "}
              <a
                className="text-[var(--color-accent)] opacity-50 hover:opacity-100"
                href="https://chatbot.victorkevz.com/"
              >
                Victor Kevz
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
