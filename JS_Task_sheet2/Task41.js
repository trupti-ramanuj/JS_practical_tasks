const user = {
    id: 1,
    profile: {
        personal: {
            name: 'John',
            address: {
                city: 'Ahmedabad',
                pin: 380001
            }
        }
    }
};

function getValue(object, path, defaultValue = undefined) {
    const keys = path.split('.');

    let result = object;

    for (const key of keys) {
        if (result == null || !(key in result)) {
            return defaultValue;
        }

        result = result[key];
    }

    return result;
}

console.log(getValue(user, 'profile.personal.address.city'));


console.log(getValue(user, 'profile.personal.address.pin'));


console.log(
    getValue(user, 'profile.personal.phone', 'Not available')
);

