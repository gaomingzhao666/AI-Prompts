export const addSpaceBetweenUppercase = (vocabulary: string): string =>
	vocabulary.replace(/([A-Z])/g, ' $1').trim();

// Example usage
// const result = addSpaceBetweenUppercase("HelloWorldThisIsTypeScript");
// console.log(result); // "Hello World This Is Type Script"
