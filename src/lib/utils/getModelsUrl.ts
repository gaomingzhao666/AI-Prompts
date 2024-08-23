export const getModelsUrl = (models: string[]): string[] => {
	const prefixPath: string = '/src/lib/imgs/'
	const suffixPath: string = '.svg'

	// models url array
	const modelsPaths: string[] = models.map((data) => prefixPath + data + suffixPath)

	return modelsPaths
}
