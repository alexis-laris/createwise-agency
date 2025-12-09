import { getTranslations, type Language } from './translations';

export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (lang === 'en') return 'en';
    return 'es';
}


export function setupLanguageSystem() {
    const currentLang = (localStorage.getItem('language') || 'es') as Language;


    updateActiveButtons(currentLang);


    updatePageLanguage(currentLang);

    const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-mobile');

    langButtons.forEach((button) => {
        button.addEventListener('click', function (this: HTMLElement) {
            const lang = this.getAttribute('data-lang') as Language;


            localStorage.setItem('language', lang);


            updateActiveButtons(lang);


            updatePageLanguage(lang);
        });
    });
}

function updateActiveButtons(lang: Language) {

    document.querySelectorAll('.lang-btn, .lang-btn-mobile').forEach((btn) => {
        btn.classList.remove('active');
    });


    document.querySelectorAll(`[data-lang="${lang}"]`).forEach((btn) => {
        btn.classList.add('active');
    });
}

function updatePageLanguage(lang: Language) {
    const t = getTranslations(lang);


    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            const keys = key.split('.');
            let value: any = t;


            for (const k of keys) {

                if (!isNaN(Number(k))) {
                    value = value?.[Number(k)];
                } else {
                    value = value?.[k];
                }
            }

            if (value && typeof value === 'string') {
                element.textContent = value;
            }
        }
    });


    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (key) {
            const keys = key.split('.');
            let value: any = t;


            for (const k of keys) {

                if (!isNaN(Number(k))) {
                    value = value?.[Number(k)];
                } else {
                    value = value?.[k];
                }
            }

            if (value && typeof value === 'string') {
                if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                    element.placeholder = value;
                }
            }
        }
    });
}