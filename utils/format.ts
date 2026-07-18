const populationFormatter = new Intl.NumberFormat("en-US");

const formatPopulation = (value: number) => populationFormatter.format(value);

export { formatPopulation };
