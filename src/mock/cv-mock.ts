import {CV} from '../cv/model/cv';
import {PersonalData} from '../cv/model/personal-data';
import {SectionData} from '../cv/model/section-data';
import {SubsectionData} from '../cv/model/subsection-data';


export class CvMock {

    getCV() : CV {
        const cv = new CV();

        cv.name = 'Jakub';
        cv.surname = 'Bigolas';
        cv.footer = 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)';
        cv.portrait.path = 'C:\Users\jbigo\OneDrive\Desktop\cv\image.png';

        cv.personalData.push(new PersonalData('Data urodzenia', '6 październik 1993 r.'));
        cv.personalData.push(new PersonalData('Adres', 'Aleksandrowo 9/1 \n88-192 Piechcin'));
        cv.personalData.push(new PersonalData('Telefon', '664 339 906'));
        cv.personalData.push(new PersonalData('E-mail', 'jbigolas@gmail.com'));

        let section = new SectionData('Doświadczenie');
        cv.sections.push(section);
        section.subsections.push(new SubsectionData(
            'Zatrudnienie na pełny etat w firmie BSB w Bydgoszczy',
            'Praca na stanowisku programisty w kilkunastu projektach informatycznych głównie dla sektora finansowego działających w technologii Java EE',
            '03.2016',
            'dziś'));
        section.subsections.push(new SubsectionData(
            'Nauka praktyczna w firmie Logon SA w Bydgoszczy',
            'Konfiguracja systemu monitoringu GeoVision, samodzielne zaprojektowanie aplikacji mobilnej dla systemu Android',
            '04.2015',
            '01.2016'));
        section.subsections.push(new SubsectionData(
            'Nauka praktyczna w firmie Mobica Limited Sp. z o.o. oddział w Polsce, Bydgoszcz',
            'Konfigurowanie oraz serwisowanie stacji roboczych, wdrążanie sieci LAN, przydzielanie dostępu do zasobów oraz dodawanie użytkowników do domeny firmowej przy użyciu Windows Serwer 2008 R2, zaprojektowanie topologii sieci w budynku firmy przy użyciu programu Inkscape',
            '07.2014',
            '08.2014'));
        section.subsections.push(new SubsectionData(
            'Nauka praktyczna w Komendzie Miejskiej Policji w Bydgoszczy w Wydziale Łączności',
            'Konfigurowanie oraz serwisowanie stacji roboczych w firmie',
            '05.2012',
            '06.2012'));
        section = new SectionData('Wykształcenie');
        cv.sections.push(section);
        section.subsections.push(new SubsectionData(
            'Wyższa Szkoła Gospodarki w Bydgoszczy',
            'Wydział Studiów Stosowanych, specjalność programowanie',
            '2013',
            '2017'));
        section.subsections.push(new SubsectionData(
            'Technikum w Zespole Szkół Ponadgimnazjalnych nr 3 im. Franciszka Zubrzyckiego w Inowrocławiu',
            'Profil informatyczny, ukończone z dyplomem potwierdzającym kwalifikacje zawodowe',
            '2009',
            '2013'));
        section = new SectionData('Dodatkowe kwalifikacje', 'simple');
        cv.sections.push(section);
        section.subsections.push(new SubsectionData(undefined, 'Prawo jazdy kategorii B2', '01.12.2012', ''));

        section = new SectionData('Umiejętności', 'simple');
        cv.sections.push(section);
        section.subsections.push(new SubsectionData(undefined, 'Znajomość języka Java umożliwiająca płynną pracę', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Znajomość technologii Java EE takich jak CDI, EJB, JPA (Hibernate), JSF (PrimeFaces), JSP, JTA, JDBC', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Znajomość języka SQL oraz platform bazodanowych Oracle i PostgreSQL', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Podstawowa znajomość technologii Spring oraz Spring Boot', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Podstawowa znajomość technologii generownia raportów JasperReports', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Podstawowa znajomość obsługi serwerów aplikacyjnych JBoss/Wildfly, WebLogic', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Początkująca znajomośc pisania mikroserwisów (REST/SOAP)', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Znajomość środowisk programistycznych Netbeans, IntelliJ oraz Eclipse', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Umiejętność tworzenia światów obiektów w technologii SAP Business Objects', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Znajomość narzędzi wersjonowania GIT oraz SVN', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Podstawowa znajomośc technologii HTML, JavaScript oraz CSS', undefined, undefined));
        section.subsections.push(new SubsectionData(undefined, 'Umiejętność pracy samodzielnej oraz zespołowej', undefined, undefined));

        section = new SectionData('Języki obce', 'simple');
        cv.sections.push(section);
        section.subsections.push(new SubsectionData(undefined, 'Angielski - na poziomie umożliwiającym swobodne czytanie dokumentacji', undefined, undefined));

        section = new SectionData('Zainteresowania', 'simple');
        cv.sections.push(section);
        section.subsections.push(new SubsectionData(undefined, 'Modelowanie i druk 3D', undefined, undefined));

        return cv;
    }


}