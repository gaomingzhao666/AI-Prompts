export const getModelsUrl = (models: string[]): string[] => {
	const prefixPath: string = '/src/lib/imgs/';
	const suffixPath: string = '.svg';

	const modelsPathes: string[] = models.map((data) => prefixPath + data + suffixPath);

	return modelsPathes;
};
