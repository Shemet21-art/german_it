const getFilteredResults = (value: string, inputValue: string) => {
  return value.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
};

export default getFilteredResults;
