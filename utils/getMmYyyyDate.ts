const getMmYyyyDate = (date: Date): string => {
  const stringDate = date.toISOString();
  const correctDateFormat = stringDate
    .split('-')
    .slice(0, 2)
    .reverse()
    .join('/');
  return correctDateFormat;
};

export default getMmYyyyDate;
