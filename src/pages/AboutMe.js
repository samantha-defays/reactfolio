import { PERSONAL_INFO } from '../config/constants';
import { calculateAge } from '../utils/dateUtils';

function AboutMe() {
    const age = calculateAge(PERSONAL_INFO.birthDate);
    const currentYear = new Date().getFullYear();
    const yearsInDev = currentYear - PERSONAL_INFO.developperFirstYear;
    
    return (
        <div>
            <h1>À propos de moi</h1>
            <p>Je suis une femme de {age} ans, souriante et j’aime beaucoup rire, j’apporte beaucoup d’importance à l’entente avec mes collègues, et il ne sera pas rare d’entendre un éclat de rire de ma part. Mais le sérieux du travail ne sera pas délaissé pour autant. On peut travailler dans la bonne humeur, c'est ma philosophie.</p>
            <p>Je suis issue d'une reconversion, et travaille désormais dans le développement depuis {yearsInDev} ans. J'ai travaillé principalement dans l'immobilier, mais je reste ouverte à tout autre milieu.</p>
        </div>
    );
}

export default AboutMe;