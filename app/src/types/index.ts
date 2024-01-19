export enum EExperiencePosition {
  DEVELOPER = "developer",
  PRODUCT_MANAGER = "product_manager",
  OWNER = "owner",
}

export type TExperienceYear =
  | "2023"
  | "2022"
  | "2021"
  | "2020"
  | "2019"
  | "2018"
  | "2017"
  | "2016"
  | "2015"
  | "2014"
  | "2013"
  | "2012"
  | "2011";

export interface IExperienceContract {
  location?: string;
  position?: string;
  type?: string;
  refYear?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
}

export interface ICompany {
  name: string;
  description?: string;
  logo?: any;
  links?: {
    website?: string;
    linkedin?: string;
  };
}

export interface IExperience {
  meta?: {
    disableChildrenAvatar: boolean;
  };
  contract?: IExperienceContract;
  /**
   * Represents the company ID
   */
  company: string;
  description?: string;
  children?: IExperience[];
  group?: (TExperienceYear | EExperiencePosition)[];
}
