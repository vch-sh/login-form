export const usernameRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{5,}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%*])[a-zA-Z0-9!@#$%*]{8,}$/;

export const lettersCounter = /[a-zA-Z]/g;
export const digitsCounter = /\d/g;
export const passwordSymbols = /[!@#$%^&*()-+=]/g;