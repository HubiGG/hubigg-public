
const servicesLANG = {

}

function updateLang() {
    const lang = getLanguage();

    updateLangStatic(document, IsLegacy, lang, LANG);
}

function updateLangStatic(document, isLegacy, lang, { services }) {
    document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].textContent = services[lang];
}

if (typeof exports != 'undefined') {
    exports.updateLangStatic = updateLangStatic;
    exports.servicesLANG = servicesLANG
}
else {
    updateLang();
}