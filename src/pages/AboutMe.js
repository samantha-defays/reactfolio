import { useTranslation } from 'react-i18next';
import { PERSONAL_INFO } from '../config/constants';
import { calculateAge } from '../utils/dateUtils';

function AboutMe() {
    const { t } = useTranslation();
    const age = calculateAge(PERSONAL_INFO.birthDate);
    const currentYear = new Date().getFullYear();
    const yearsInDev = currentYear - PERSONAL_INFO.developperFirstYear;

    return (
        <div>
            <h1>{t('aboutMe.title')}</h1>
            <p>{t('aboutMe.age', { age })}</p>
            <p>
                {t('aboutMe.reconversion', {
                    years: yearsInDev,
                    plural: yearsInDev > 1 ? 's' : ''
                })}
            </p>
            <p>{t('aboutMe.description')}</p>
        </div>
    );
}

export default AboutMe;