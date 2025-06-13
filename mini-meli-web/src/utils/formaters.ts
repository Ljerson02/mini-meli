export const formatLAPrices = (price: number): string => {
  return new Intl.NumberFormat('de-DE', {
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const esConditions = {
  new: 'Nuevo',
  used: 'Reacondicionado',
};

export const translateConditionToEs = (condition: string): string => {
  return esConditions[condition.toLowerCase() as 'new' | 'used'];
};
