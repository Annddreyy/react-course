export const requiredField = value => {
    console.log( value );
    if (value) {
        return undefined;
    }
    console.log( 1 );
    return 'Field is required';
};

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) {
        return `Max length is ${maxLenght} symbols`;
    }
    return undefined;
}
