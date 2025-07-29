import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navigation() {
    const { t } = useTranslation();

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                <li><Link to="/">{t('navigation.home')}</Link></li>
                <li><Link to="/about-me">{t('navigation.aboutMe')}</Link></li>
                <li><Link to="/contact">{t('navigation.contact')}</Link></li>
            </ul>
            <LanguageSwitcher />
        </nav>
    );
}

export default Navigation;