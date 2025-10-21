import { PensionAdministrationBoxProps } from "@/components/PensionAdministrationBox";
import { QuickActionsBoxProps } from "@/components/QuickActionsBox";
import { TestimonialBoxProps } from "@/components/TestimonialBox";

export const NavbarLinks: { title: string; href?: string; children?: { icon: string; title: string; href: string }[] }[] = [
  { title: "Home", href: "/" },
  { title: "Pension Administration",
    children: [
      { icon: "/images/retirement.png", title: "Retirement Savings Account (RSA)", href: "/retirement-savings-account" },
      { icon: "/images/hand-gear.png", title: "Voluntary Contributions (VC)", href: "/voluntary-contributions" },
      { icon: "/images/mortgage.png", title: "RSA Mortgage Equity Contribution", href: "/mortgage-equity-contribution" },
    ]
   },
  { title: "Benefits", href: "/benefits" },
  { title: "Resources",
    children: [
      { icon: "/images/calculator.png", title: "Pension Calculator", href: "/pension-calculator" },
      { icon: "/images/downloads.png", title: "Forms & Downloads", href: "/forms-downloads" },
      { icon: "/images/question.png", title: "FAQs", href: "/faqs" },
      { icon: "/images/careers.png", title: "Careers", href: "/careers" },
    ]
  },
  { title: "About Us",
    children: [
      { icon: "/images/about.png", title: "Who We Are", href: "/about-us" },
      { icon: "/images/directors.png", title: "Board of Directors", href: "/directors" },
      { icon: "/images/managements.png", title: "Management Team", href: "/managements" },
    ]
  },
  { title: "Contact", href: "/contact" },
]

export const socialLinks: { icon: string; href: string; alt: string; color: string }[] = [
  {
    icon: "/icons/facebook.svg",
    href:"www.facebook.com",
    alt: "facebook",
    color:"#1877F2"
  },
  {
    icon: "/icons/twitter.svg",
    href:"www.twitter.com",
    alt: "twitter",
    color:"#1DA1F2"
  },
  {
    icon: "/icons/instagram.svg",
    href:"www.instagram.com",
    alt: "instagram",
    color:"#C13584"
  },
  {
    icon: "/icons/linkedin.svg",
    href:"www.linkedin.com",
    alt: "linkedin",
    color:"#0077B5"
  },
  {
    icon: "/icons/whatsapp.svg",
    href:"www.whatsapp.com",
    alt: "whatsapp",
    color:"#25D366"
  },
]

export const quickLinks: { title: string; href: string }[] = [
  { title: "About Us", href: "/about-us" },
  { title: "Pension Calculator", href: "/pension-calculator" },
  { title: "Whistleblower", href: "/whistleblower" },
  { title: "Benefits", href: "/benefits" },
  { title: "FAQs", href: "/faqs" },
]

export const services: { title: string; href: string }[] = [
  { title: "Retirement Savings Account (RSA)", href: "/retirement-savings-account" },
  { title: "Voluntary Contributions (VC)", href: "/voluntary-contributions" },
  { title: "RSA Mortgage Equity Contribution", href: "/mortgage-equity-contribution" },
]

export const contacts: { title: string; href?: string }[] = [
  { title: "+234 (0) 1 234 5678", href: "tel:+234012345678" },
  { title: "info@npfpensions.com", href: "mailto:info@npfpensions.com" },
  { title: "NPF Building, Victoria Island, Lagos, Nigeria", href: "https://www.google.com/maps?q=NPF+Building,+Victoria+Island,+Lagos,+Nigeria" },
]

export const pensionAdministrationData:PensionAdministrationBoxProps [] = [
  {
    title: "Retirement Savings Account (RSA)",
    description: "Secure your retirement with our comprehensive RSA management services.",
    href: "/retirement-savings-account",
    icon: "/icons/retirement.svg"
  },
  {
    title: "Voluntary Contributions (VC)",
    description: "Boost your retirement savings with additional voluntary contributions.",
    href: "/voluntary-contributions",
    icon: "/icons/voluntary.svg"
  },
  {
    title: "RSA Mortgage Equity Contribution",
    description: "See your RSA balance to secure your dream home.",
    href: "/mortgage-equity-contribution",
    icon: "/icons/mortgage.svg"
  },
]

export const quickActionsData: QuickActionsBoxProps[] = [
  {
    title: "Pension Calculator",
    description: "Calculate your retirement projections",
    href: "/pension-calculator",
    icon: "/icons/calculator.svg"
  },
  {
    title: "Forms & Downloads",
    description: "Access important documents",
    href: "/forms-downloads",
    icon: "/icons/downloads.svg"
  },
  {
    title: "FAQs",
    description: "Find answers to common questions",
    href: "/faqs",
    icon: "/icons/question.svg"
  },
  {
    title: "Client Portal",
    description: "Access your account",
    href: "/faqs",
    icon: "/icons/portal.svg"
  },
  {
    title: "PenCom Guidelines",
    description: "Access PenCom Guidelines",
    href: "/faqs",
    icon: "/icons/downloads.svg"
  },
]

export const priceData: { price: string, title: string} [] = [
  {
    price: 'N2.1536',
    title: 'Fund 1',
  },
  {
    price: 'N2.1536',
    title: 'Fund 2',
  },
  {
    price: 'N2.1536',
    title: 'Fund 3',
  },
  {
    price: 'N2.1536',
    title: 'Fund 4',
  },
]

export const whyChooseData: { title: string, description: string, } [] = [
  {
    title: 'Trusted Excellence',
    description: "Over two decades of reliable pension fund administration with industry-leading performance.",
  },
  {
    title: 'Secure & Regulated',
    description:"Licensed by PenCom with advanced security measures to protect your investments.",
  },
  {
    title: 'Customer-Centric',
    description: "Dedicated support team and personalized service to help you achieve your retirement goals.",
  },
  {
    title: 'Strong Performance',
    description: "Consistently competitive returns through expert fund management and diversified investments.",
  },
]

export const testimonialsData:TestimonialBoxProps [] = [
  {
    name: 'Victor ALABI',
    position: "Retired Police Officer",
    testimony: "What I enjoy most about NPF Pensions Limited is how well the relationship managers treat me. I look forward to more returns on investments, continued excellent customer treatment, and also to building the company further."
  },
  {
    name: 'Victor Alabi',
    position:"Retired Police Officer",
    testimony: "What I enjoy most about NPF Pensions Limited is how well the relationship managers treat me. "
  },
]