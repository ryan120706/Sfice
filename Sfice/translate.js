function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'es,ur,pl,ar,fr,en',
        autoDisplay: false
    }, 'google_translate_element');
}

function translatePage(languageCode) {
    var googleSelect = document.querySelector('select.goog-te-combo');
    if (googleSelect) {
        googleSelect.value = languageCode;
        googleSelect.dispatchEvent(new Event('change'));
    }
}