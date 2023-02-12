export interface IOpportunities {
  oppId: number;
  oppName: string;
  salesRepName: string;
  amount: number;
  product: string;
  stage: string;
  repProbability: number;
  pilytixTier: string;
  pilytixProbability: number;
  probabilityHistory: ProbabilityHistory[] | null;
  pilytixFactorsIncreasingWin: PilytixFactorsCreasingWin[] | null;
  pilytixFactorsDecreasingWin: PilytixFactorsCreasingWin[] | null;
}

export interface IPilytixFactorsCreasingWin {
  name: string;
  message: string;
  weight: Weight;
}

export interface IWeight {
  value: number;
  description: Description;
}

export enum Description {
  MediumNegative = 'Medium Negative',
  MediumPositive = 'Medium Positive',
  StrongNegative = 'Strong Negative',
  StrongPositive = 'Strong Positive',
  WeakNegative = 'Weak Negative',
  WeakPositive = 'Weak Positive',
}

export interface IProbabilityHistory {
  daysAgo: number;
  pilytixProb: number;
  repProb: number;
}
