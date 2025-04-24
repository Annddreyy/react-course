export let updateObjectInArray = (items, checkValue, objectPropName, newObjProps) => {
    return items.map(item => {
        if (item[objectPropName] === checkValue) {
            return { ...item, ...newObjProps }
        }
        return item;
    });
};
