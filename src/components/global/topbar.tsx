"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconBrandLinkedin,
  IconMail,
  IconBrandLeetcode,
} from "@tabler/icons-react";

export default function TopBar() {
  const navItems = [
    {
      name: "Github",
      icon: <IconBrandGithub />,
      link: "https://github.com/33Shivam",
    },
    {
      name: "Leetcode",
      icon: <IconBrandLeetcode />,
      link: "https://leetcode.com/u/anandShivam21/",
    },
    {
      name: "Linkedin",
      icon: <IconBrandLinkedin />,
      link: "https://www.linkedin.com/in/33shivam/",
    },
    {
      name: "Twitter",
      icon: <IconBrandX />,
      link: "https://x.com/An_Shivam33",
    },
    {
      name: "Email",
      icon: <IconMail />,
      link: "mailto:sivam.anand21@gmail.com",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Shivam_Anand_Resume.pdf";
                link.click();
              }}
            >
              Download Resume
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  // Close the mobile menu
                  setIsMobileMenuOpen(false);

                  // Trigger resume download
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Shivam_Anand_Resume.pdf";
                  document.body.appendChild(link); // (optional but safe)
                  link.click();
                  document.body.removeChild(link); // cleanup
                }}
                variant="primary"
                className="w-full"
              >
                Download Resume
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
