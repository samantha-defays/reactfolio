import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button
                onClick={() => changeLanguage('fr')}
                style={{
                    background: i18n.language === 'fr' ? '#007bff' : 'transparent',
                    border: '1px solid #007bff',
                    color: i18n.language === 'fr' ? 'white' : '#007bff',
                    padding: '5px 10px',
                    cursor: 'pointer'
                }}
            >
                🇫🇷 FR
            </button>
            <button
                onClick={() => changeLanguage('en')}
                style={{
                    background: i18n.language === 'en' ? '#007bff' : 'transparent',
                    border: '1px solid #007bff',
                    color: i18n.language === 'en' ? 'white' : '#007bff',
                    padding: '5px 10px',
                    cursor: 'pointer'
                }}
            >
                🇬🇧 EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;