export const requiredField = value => {
    console.log( value );
    if (value) {
        return undefined;
    }
    return 'Field is required';
};

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) {
        return `Max length is ${maxLenght} symbols`;
    }
    return undefined;
}
