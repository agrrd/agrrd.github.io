export type Position = {
  title: string,
  fromDate: Date,
  toDate?: Date,
  location: string,
  description: string,
};

export type CompanyExperience = {
  company: string,
  positions: Position[],
  breakPage: boolean,
}