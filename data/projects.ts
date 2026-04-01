export interface Project {
  name: string;
  url: string;
  category: string;
}

export const projects: Project[] = [
  { name: "Gogenesis Pvt Limited", url: "https://www.gogenesis.com.au/", category: "Business" },
  { name: "Lawmen Alliance", url: "https://www.lawmenalliance.com/", category: "Legal" },
  { name: "The Maple House", url: "https://www.themaplehouse.com/", category: "Lifestyle" },
  { name: "Policy Wings CRM Panel", url: "https://www.policywings.co/login", category: "SaaS" },
  { name: "Sewer Death Platform", url: "https://sewer-death-panel.vercel.app/login", category: "SaaS" },
  { name: "The Bright Smile", url: "https://thebrightsmile.in/", category: "Healthcare" },
  { name: "Chauhan and Sanoriya", url: "https://chauhanandsanoriyalawoffices.com/", category: "Legal" },
  { name: "Aipply", url: "https://www.aipply.io/", category: "SaaS" },
  { name: "Dr Mayank Chauhan", url: "https://www.drmayankortho.in/", category: "Healthcare" },
  { name: "Dr Shachi Singh", url: "https://www.drshachi.com/", category: "Healthcare" },
  { name: "RevX", url: "https://revx.co.in/", category: "Business" },
  { name: "Renew Dental", url: "https://www.renewdental.in/", category: "Healthcare" },
  { name: "Prakash Hospital", url: "https://www.prakashhospitals.in/", category: "Healthcare" },
  { name: "Dr Ankur Singh", url: "https://www.drankursingh.com/", category: "Healthcare" },
  { name: "Ishan Educational Institute", url: "https://www.ishan.ac/", category: "Education" },
  { name: "Ishan Ayurvedic", url: "https://research.ishanayurved.com/", category: "Education" },
  { name: "Ishan Law", url: "https://lawjournal.ishan.ac/", category: "Education" },
  { name: "Ishan Management", url: "https://ms.ishan.ac/", category: "Education" },
  { name: "Ishan Hospital", url: "https://ishan-ayurvedic-hospital.vercel.app/", category: "Healthcare" },
  { name: "Ishan IIMT", url: "https://ishan-iimt.vercel.app/", category: "Education" },
  { name: "MGA", url: "https://www.mgatelier.co/", category: "Lifestyle" },
  { name: "Revibe", url: "https://www.revibeindia.com/", category: "E-Commerce" },
  { name: "Revibe Admin Panel", url: "https://admin.revibeindia.com/", category: "SaaS" },
  { name: "Chefadora", url: "https://www.chefadora.com/", category: "Lifestyle" },
  { name: "Chefadora Mobile App", url: "https://apps.apple.com/in/app/chefadora/id6670755498", category: "Mobile App" },
  { name: "Optima", url: "https://www.optimalearn.com/", category: "Education" },
  { name: "Vflex", url: "https://vflex-website.vercel.app/", category: "Business" },
  { name: "Moondune", url: "https://www.moondune.co/", category: "Business" },
  { name: "The Blood App", url: "https://www.thebloodapp.com/", category: "Healthcare" },
  { name: "Noida Media House", url: "https://www.nmhnoida.com/", category: "Media" },
  { name: "FMS", url: "https://www.fms.edu/", category: "Education" },
  { name: "JLLP", url: "https://www.jllp.co.in/", category: "Legal" },
  { name: "House of Morganite", url: "https://www.houseofmorganite.com/", category: "E-Commerce" },
  { name: "Promosync", url: "https://www.promosync.ai/", category: "SaaS" },
  { name: "Menoob", url: "https://www.menoob.in/", category: "Business" },
  { name: "Saurabh Aggrawal and Co", url: "https://saurabh-aggrawal-and-co.vercel.app/", category: "Legal" },
  { name: "Claire Derma", url: "https://www.clairederma.com/", category: "Healthcare" },
  { name: "Ratnanjali", url: "https://ratnanjali-xi.vercel.app/", category: "E-Commerce" },
  { name: "Policywings Website", url: "https://policywings-website.vercel.app/", category: "Business" },
  { name: "Anika Kumar Vashishth", url: "https://www.connectanika.com/", category: "Lifestyle" },
  { name: "Srishe Legal", url: "https://www.srishe.com/", category: "Legal" },
  { name: "Zarle Infotech", url: "https://www.zarleinfotech.com/", category: "Business" },
  { name: "HrOne", url: "https://hr-one-landing-pages.vercel.app/", category: "SaaS" },
  { name: "Evaan Roofing", url: "https://evan-roofing-and-structure.vercel.app/", category: "Business" },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category))).sort()];
