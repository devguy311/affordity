export const getLanguage = () => {
    return sessionStorage.getItem("affordify-language");
}

export const setLanguage = (language: string) => {
    sessionStorage.setItem("affordify-language", language);
}