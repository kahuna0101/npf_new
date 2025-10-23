import { BenefitsPageProps } from "@/components/BenefitsTabs";
import { PensionAdministrationBoxProps } from "@/components/PensionAdministrationBox";
import { QuickActionsBoxProps } from "@/components/QuickActionsBox";
import { TestimonialBoxProps } from "@/components/TestimonialBox";
import { PensionPageProps } from "@/components/PensionFeatures";

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

export const pensionPageData: PensionPageProps [] =[
  {
    title: "Retirement Savings Account (RSA)",
    description: "Our retirement savings account (rsa) is designed with your financial security in mind. We combine professional investment management with personalized service to ensure your retirement savings grow consistently over time.",
    features: ["Mandatory 18% contribution (8% employee, 10% employer)", "Professional fund management", "Multiple investment options", "Regular statements and updates"],
    benefits: ["Guaranteed retirement income", "Tax advantages on contributions", "Professional investment management", "Portable across employers"]
  },
  {
    title: "Voluntary Contributions (VC)",
    description: "Our voluntary contributions (vc) is designed with your financial security in mind. We combine professional investment management with personalized service to ensure your retirement savings grow consistently over time.",
    features: ["Flexible contribution amounts", "Multiple payment options", "Higher retirement benefits", "Tax-efficient savings"],
    benefits: ["Increased retirement income", "Tax deductions on contributions", "Flexible withdrawal options", "Compound growth potential"]
  },
  {
    title: "RSA Mortgage Equity Contribution",
    description: "Our rsa mortgage equity contribution is designed with your financial security in mind. We combine professional investment management with personalized service to ensure your retirement savings grow consistently over time.",
    features: ["Up to 25% of RSA balance", "Competitive interest rates", "Flexible repayment terms", "Maintained retirement savings"],
    benefits: ["Homeownership opportunity", "Lower mortgage rates", "Continued retirement savings", "Flexible repayment options"]
  }
]

export const howItWorksData: string [] = [
  "Complete our simple application form", "Provide required documentation", "Make your initial contribution", "Start growing your retirement savings" 
]

export const benefitsPageData: BenefitsPageProps [] =[
  {
    value: "retirement-withdrawal",
    tabsTitle: "Retirement & Withdrawal",
    title: "Retirement Benefits",
    description: "Access your full retirement benefits when you reach retirement age or meet the qualifying conditions.",
    features: ["fully consolidated RSA Balance", "Monthly pension option", "Lump sum withdrawal"],
    requirements: ["Reached age 50 with 5 years of service", "Reached retirement age as specified by employer", "Voluntary retirement with employer consent" ],
    process: ["Submit retirement application form", "Provide required documentation", "Choose payment option (lump sum or annuity)", "Receive your benefits within 30 days"],
    bgImg: "/images/vc-bg.jpg"
  },
  {
    value: "programmed-withdrawal",
    tabsTitle: "Programmed Withdrawal",
    title: "Programmed Withdrawal",
    description: "Receive regular monthly payments from your RSA while keeping your funds invested for continued growth.",
    features: ["Regular monthly income", "Continued investment growth", "Flexible payment schedule" ],
    requirements: ["Reached age 50 with 5 years of service", "Retirees who choose structured payments", "RSA balance can support minimum monthly payments"],
    process: ["Calculate sustainable withdrawal rate", "Submit application with required documents", "Set up monthly payment schedule", "Receive regular payments for life expectancy period"],
    bgImg: "/images/benefits-withdrawal-bg.jpg"
  },
  {
    value: "temporary-access",
    tabsTitle: "25% Temporary Access",
    title: "25% Temporary Access",
    description: "Access up to 25% of your RSA balance for urgent financial needs while keeping the remaining 75% for retirement.",
    features: ["Emergency access", "Up to 25% of balance", "Quick processing"],
    requirements: ["Unemployed for 4 months or more", "No monthly salary or pension", "Submitted required documentation"],
    process: ["Provide proof of unemployment", "Submit temporary access application", "Complete verification process", "Receive 25% of your RSA balance"],
    bgImg: "/images/rsa-bg.jpg"
  },
  {
    value: "bloc-payment",
    tabsTitle: "En Bloc Payment",
    title: "En Bloc Payment",
    description: "Receive your entire RSA balance as a lump sum payment if your total balance is below the prescribed threshold.",
    features: ["Full balance withdrawal", "One-time payment", "Complete account closure"],
    requirements: ["Balance below specified threshold", "Reached retirement age", "Unable to secure annuity with the balance"],
    process: ["Verify RSA balance threshold", "Submit en bloc payment application", "Complete required documentation", "Receive full payment within 30 days"],
    bgImg: "/images/vc-bg.jpg"
  },
  {
    value: "death-benefits",
    tabsTitle: "Death Benefits",
    title: "Death Benefits",
    description: "Ensure your loved ones are taken care of with comprehensive death benefits from your RSA.",
    features: ["Fully consolidated RSA Balance", "Survivor benefits", "Quick claim process"],
    requirements: ["Designated beneficiaries", "Proper documentation of death", "Valid nomination or will"],
    process: ["Notify NPF Pensions Limited of death", "Submit death certificate and required documents", "Verify beneficiary information", "Process payment to beneficiaries"],
    bgImg: "/images/benefits-withdrawal-bg.jpg"
  }
]