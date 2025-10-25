import { BenefitsPageProps } from "@/components/BenefitsTabs";
import { PensionAdministrationBoxProps } from "@/components/PensionAdministrationBox";
import { QuickActionsBoxProps } from "@/components/QuickActionsBox";
import { TestimonialBoxProps } from "@/components/TestimonialBox";
import { PensionPageProps } from "@/components/PensionFeatures";
import { careerWhyProps } from "@/app/(root)/(pages)/careers/page";
import { FaqsDataProps } from "@/components/FaqTabs";
import { valueProps } from "@/app/(root)/(pages)/about-us/page";

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


export const faqData: FaqsDataProps [] = [
  {
    value: "generalQuestions",
    category: "General Questions",
    faqs: [
      {
        question: "I have a Retirement Savings Account with my PFA. Why do I have to re-register?",
        answer:
          "This exercise is to obtain your most current and accurate data which will enable N.P.F Pensions Limited (NPFPL) communicate effectively and render better services to you. Your existing RSA PIN will not change but will be transferred along with your RSA balance and previous data discarded. This will also afford the opportunity to obtain Biometric data in line with new PENCOM guidelines which will soon be introduced and made mandatory."
      },
      {
        question: "Must I wear my uniform in the passport I am providing and must it be on a white background?",
        answer:
          "Your passport photograph should be on a white background irrespective of what you wear. You can decide to take it with uniform or mufti."
      },
      {
        question: "Can I change my Next of Kin or register more than one person as Next of Kin on my account?",
        answer:
          "Yes, you can. Your Next Of Kin (NOK) can be updated, by either visiting our office or by sending an e-mail to us with the following details:Full Name and details of previous NOK Full Name of proposed NOK, Gender of NOK, Relationship, Contact Mobile phone Number of NOK, Correspondence address and, Email Address of NOK"
      }
    ]
  },
  {
    value: "retirementSavingsAccount",
    category: "Retirement Savings Account",
    faqs: [
      {
        question: "Does this registration nullify my existing RSA balance?",
        answer:
          "Your current RSA Balance is still intact. It would be transferred to NPFPL, with additional contributions that will ensue, it will be managed efficiently in line with PECOM guidelines to generate returns on your behalf."
      },
      {
        question: "I have not been receiving e-mails or SMS alerts from my PFA?",
        answer:
          "This may be as a result of many reasons ranging from change in your telephone number/ email address to absence of valid records with the PFA. This is why NPFPL has embarked upon re-registration exercise to ensure your current data is obtained for effective communication."
      },
      {
        question: "I have not been receiving my RSA statement for some time. What is wrong?",
        answer:
          "During the current re-registration exercise by NPFPL you have been requested to provide the Address of your Employer's office and state of posting. This will ensure your RSA Statement is delivered regularly yto you in your office location. Each time you are reposted you should visit any of our offices or send us an email to update to such information from your employer and will be able to reach you at you new location."
      },
      {
        question: "Where it appears that my monthly remittances are less than the amount being deducted from my monthly salary, what do I do?",
        answer:
          "Kindly notify the Pension Desk Officer in your Command/ Division and NPFPL providing a copy of your payslip to ensure that your records are updated on Nominal Roll to be submitted to the National Pension Commission for a reconciliation of your Pension Contributions and remittances"
      },
      {
        question: "Why does my account balance fluctuate?",
        answer:
          "The difference observed in your RSA balance is a result of the changes in the RSA fund's unit price. These price changes are a reflection of the investment performance of the fund in the short run. The unit price of the RSA Fund is computed by dividing the Net Asset Value (NAV) of the fund (which comprises the contributions + appreciation) by number of units created. The daily fluctuate arises from price movements of stocks which can constitute up to 25% of the fund's investment."
      },
      {
        question: "Would I be given a new PIN now that my contribution has been transferred to NPFPL?",
        answer:
          "No, your Personal Identification Number (PIN) is unique and does not change. You are to maintain the same PIN number from your former PFA."
      }
    ]
  },
  {
    value: "voluntaryContributions",
    category: "Voluntary Contributions",
    faqs: [
      {
        question: "How can I make additional contributions into my account?",
        answer:
         "Such additional contributions are called Voluntary Contributions are additional personal contributions that can be made alongside your RSA; this remittance must come to us through your employer. The payment schedule provided to your employer has a column to be filled with the amount of your choice. Please note that since Voluntary Contributions are not mandatory, it could be any amount of your choice. Also note that the Voluntary Contributions made will be remitted into your existing RSA PIN and your statement of account will show the details of your Voluntary Contributions to enable you to monitor the growth of your Voluntary Contributions please note that in line with recent guidelines, withdrawal from Voluntary Contributions made within five years of existence will attract Personal Income Tax deduction on amounts withdrawn."
      }
    ]
  },
  {
    value: "benefitsWithdrawals",
    category: "Benefits & Withdrawals",
    faqs: [
      {
        question: "How can one temporarily exit from the scheme?",
        answer:
          "You can temporarily exit from the scheme voluntarily when you disengage from active service before attaining the retirement age based on the terms of your employment. This is also applicable if you are retiring in accordance with the terms and conditions of your employment but less than 50 years of age and you do not secure another employment in (4) four months. You can request to be paid a lump sum up to a maximum of 25% of the balance in your RSA. Upon attaining the age of 50 years, you can access the balance of 75% either as an en-bloc payment or through programmed withdrawals."
      },
      {
        question: "Why are pay slips required for retirement benefits processing?",
        answer:
          "The provision of copies of the last three months' payslip for normal retirement is a PENCOM requirement, even for balances less than N550,000. The RSA balances as at the time of applying, may be exclusive of the accrued rights and when paid may be N550,000"
      },
      {
        question: "Where can a death certificate be obtained?",
        answer:
          "A death certificate can be obtained from the hospital. However, if the deceased did not die in a hospital, a death certificate can be obtained from the National Population Commission."
      },
      {
        question: "What can be done to expedite the processing of a survivor benefit?",
        answer:
          "We strongly advise that all contributors should draw up a will. This will eliminate the lengthy delays faced by the survivor in obtaining from the National Population Commission."
      },
      {
        question: "What is the age limit for contribution to be accessed?",
        answer:
          "A contributor can access the balance in his/her RSA when he/she has retired or attained the age of 50 years, whichever comes later. If she/her retires or is rendered redundant by his/her employer, before attaining the age of 50 years he/she can access 25% of his/her RSA balance immediately."
      },
      {
        question: "Why must a disengaged staff wait for four months to access funds in his/her RSA?",
        answer:
          "This is in compliance with the Pension Reform Act (Revised 2014) which states that a contributor who is yet to attain the age of 50 years can access 25% of his/her RSA balance after four months of being rendered redundant by his/her employer. This provision is based on the assumption that contributor younger than 5o years can still get another job since pension funds are expected to be reserved for old age."
      },
      {
        question: "What factors affect the amount of retirement benefit a retiree receives?",
        answer:
          "The retirement benefits of a retiree is determined by the parameters such as RSA balance at retirement and Gender amongst others."
      }
    ]
  }
];

export const careerWhyData: careerWhyProps[] = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support.",
    icon: "/icons/heart.svg"
  },
  {
    title: "Career Growth",
    description: "Professional development opportunities, training programs, and clear career paths.",
    icon: "/icons/growth.svg"
  },
  {
    title: "Recognition",
    description: "Performance-based bonuses, employee recognition programs, and achievement awards.",
    icon: "/icons/award.svg"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements, generous leave policies, and family support.",
    icon: "/icons/users.svg"
  },
]

export const valuesData: valueProps[] = [
  {
    title: "Trust & Security",
    description: "We prioritize the security of your funds with robust investment strategies and transparent reporting.",
    icon: "/icons/guard.svg"
  },
  {
    title: "Excellence",
    description: "We strive for excellence in all our services, continuously improving to exceed expectations.",
    icon: "/icons/excellence.svg"
  },
  {
    title: "Client-Centric",
    description: "Your financial well-being is our priority. We provide personalized service and support.",
    icon: "/icons/heart.svg"
  },
  {
    title: "Integrity",
    description: "We operate with the highest ethical standards and complete transparency in all our dealings.",
    icon: "/icons/users.svg"
  },
]