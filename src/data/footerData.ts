import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
}

export interface ContactInfo {
  id: string;
  type: "phone" | "email" | "location" | "whatsapp";
  label: string;
  value: string;
  href: string;
  icon: React.ElementType;
}

export interface FooterData {
  quickLinks: FooterLink[];
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
  companyLocation: {
    label: string;
    value: string;
    href: string;
    icon: React.ElementType;
  };
  companyInfo: {
    name: string;
    tagline: string;
    copyright: string;
  };
}

export const footerData: FooterData = {
  quickLinks: [
    {
      id: "home",
      label: "Home",
      href: "#",
    },
    {
      id: "services",
      label: "Services",
      href: "#services",
    },
    {
      id: "gallery",
      label: "Gallery",
      href: "#gallery",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
    },
  ],

  socialLinks: [
    {
      id: "facebook",
      name: "Facebook",
      href: "https://facebook.com/zimsmile",
      icon: Facebook,
    },
    {
      id: "instagram",
      name: "Instagram",
      href: "https://instagram.com/zimsmile",
      icon: Instagram,
    },
    {
      id: "twitter",
      name: "Twitter",
      href: "https://twitter.com/zimsmile",
      icon: Twitter,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://linkedin.com/company/zimsmile",
      icon: LinkedIn,
    },
  ],
  contactInfo: [
    {
      id: "phone",
      type: "phone",
      label: "Call Us",
      value: "+263 771 415 842",
      href: "tel:+263771415842",
      icon: Phone,
    },
    {
      id: "whatsapp",
      type: "whatsapp",
      label: "WhatsApp",
      value: "+263 771 415 842",
      href: "https://wa.me/263771415842",
      icon: WhatsApp,
    },
    {
      id: "email",
      type: "email",
      label: "Email Us",
      value: "info@zimsmile.co.zw",
      href: "mailto:info@zimsmile.com",
      icon: Email,
    },
  ],
  companyLocation: {
    label: "Find Us",
    value: "Harare, Zimbabwe",
    href: "https://maps.google.com/?q=Harare,Zimbabwe",
    icon: LocationOn,
  },
  companyInfo: {
    name: "PEARLDENT Dental Clinic",
    tagline: "Your smile is our priority",
    copyright: `© ${new Date().getFullYear()} Zim Smile Dental Clinic. All rights reserved.`,
  },
};
