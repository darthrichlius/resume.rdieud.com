import CompaniesStatic from "@/static/models/companies";

// @todo Add test
const useCompany = (id: string) => {
  const companies = CompaniesStatic;
  if (companies && Array.isArray(companies) && companies.length) {
    const company = companies.find((company) => company.id === id);
    return company;
  }

  throw new Error("Internal Server Error");
};

export default useCompany;
