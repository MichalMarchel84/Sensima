import { faEnvelope, faHandPointRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Home.module.css';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formValid, setFormValid] = useState(false);

    const validateForm = () =>{
        const emailValid = email.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const messageValid = message.length > 0;
        setFormValid(!!emailValid && messageValid);
    }

    const onEmailChange = (ev: any) => {
        setEmail(ev.target.value);
    }

    const onMessageChange = (ev: any) => {
        setMessage(ev.target.value);
    }

    useEffect(() => {
        validateForm();
    }, [email, message]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.navBar}>
                <a className={styles.navBarItem} href='#'>Home</a>
                <a className={styles.navBarItem} href='#aboutMe'>O mnie</a>
                <a className={styles.navBarItem} href='#offer'>Oferta</a>
                <a className={styles.navBarItem} href='#gallery'>Galeria</a>
                <a className={styles.navBarItem} href='#pricing'>Cennik</a>
                <a className={styles.navBarItem} href='#contact'>Kontakt</a>
                <a className={styles.navFacebook} href="https://www.facebook.com/pages/Sensima-gabinet-psychologiczny/336614763133838" target='_blank' rel='noopener noreferrer'>
                    {/* @ts-ignore icon prop error*/}
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
            </div>
            <div className={styles.logoContainer}>
                <img src="/img/logo-full.png" className={styles.logo}/>
                <div className={styles.contacts}>
                    <div>
                        <a style={{color: '#d4e800'}} href="tel:+48602672952" className={styles.contact}>
                            <FontAwesomeIcon icon={faPhone} className={styles.contactIcon}/>
                            +48 602 672 952
                        </a>
                        <div style={{color: '#d4e800'}} className={styles.contact}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon}/>
                            gabinet@sensima.com.pl
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.firstSlideContainer}>
                <div className={`${styles.firstSlideText} ${styles.size1}`}>
                    Sensima
                </div>
                <div className={`${styles.firstSlideText} ${styles.size2}`}>
                    gabinet psychologiczny
                </div>
                <a href='#contact' className={styles.locationButton}>
                    <FontAwesomeIcon icon={faHandPointRight} className={styles.locationIcon}/>
                    GABINET W URSUSIE
                </a>
                <div className={styles.divider}></div>
                <div className={`${styles.firstSlideText} ${styles.size2}`}>
                    ul. Dzieci Warszawy 26
                </div>
            </div>
            <div className={styles.firstHeader}>
                Zapraszam na konsultację,<br/>
                psychoterapię indywidualną.
            </div>
            <div className={styles.secondSlide}>
                <div className={styles.headerText}>
                    Zapraszam osoby, które:
                </div>
                <ul className={styles.contentText}>
                    <li className={styles.contentItem}>Nie radzą sobie z napotykanymi trudnościami (w domu, w szkole, w pracy).</li>
                    <li className={styles.contentItem}>Znalazły się w trudnej sytuacji zawodowej, rodzinnej bądź osobistej.</li>
                    <li className={styles.contentItem}>Cierpią z powodu lęku, smutku i przygnębienia.</li>
                    <li className={styles.contentItem}>Przeżywają konflikty i kryzysy w relacjach międzyludzkich.</li>
                    <li className={styles.contentItem}>Chciałyby lepiej poznać siebie, zrozumieć swoje odczucia i potrzeby.</li>
                    <li className={styles.contentItem}>Odczuwają dolegliwości fizyczne wywołane czynnikami psychicznymi jak bóle brzucha, duszności, bóle głowy, zmęczenie.</li>
                    <li className={styles.contentItem}>Odczuwają kłopoty ze snem lub odżywianiem.</li>
                    <li className={styles.contentItem}>Czują męczącą potrzebę kontroli.</li>
                    <li className={styles.contentItem}>Chcą odnaleźć sens życia.</li>
                </ul>
                <div className={styles.divider}></div>
                <div className={styles.headerText}>
                    Jak również tych, którzy przeżywając żałobę po śmierci bliskiej osoby czują, że:
                </div>
                <ul className={styles.contentText}>
                    <li className={styles.contentItem}>Piją wiecej alkoholu lub zażywają wiecej leków niż dotychczas.</li>
                    <li className={styles.contentItem}>Zauważają u siebie niepokojące symptomy związane z używaniem jakiegoś środka psychoaktywnego.</li>
                    <li className={styles.contentItem}>Dolegliwości związane z żałobą ich przerastają.</li>
                    <li className={styles.contentItem}>Pojawiła się u nich bezsenność czy myśli samobójcze.</li>
                    <li className={styles.contentItem}>Brakuje im osoby, z którą będą mogli podzielić się swoimi uczuciami</li>
                </ul>
            </div>
            <div className={styles.aboutMeHeader} id='aboutMe'>
                O mnie
            </div>
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeDescription}>
                    <img src="/img/MŻ-zdjęcie-lazurowa-300x262.jpg"/>
                    <div className={styles.name}>
                        Magdalena Żbikowska
                    </div>
                    <div className={styles.title}>
                        Psycholog, psychoterapeuta
                    </div>
                    <ul className={styles.descriptionList}>
                        <li className={styles.descriptionListItem}>
                            Certyfikowany psychoterapeuta poznawczo-behawioralny (nr 1277) po czteroletnim kursie w Szkole Psychoterapii Poznawczo-Behawioralnej Centrum CBT,
                            która jest ośrodkiem rekomendowanym przez Polskie Towarzystwo Terapii Poznawczo-behawioralnej (PTTPB) i członkiem European Associaton for Behavioural and Cognitive Therapies (EABCT).
                        </li>
                        <li className={styles.descriptionListItem}>
                            Absolwentka psychologii klinicznej w Szkole Wyższej Psychologii Społecznej, specjalizacja: psychoterapia uzależnień, stany nagłe i interwencje w psychiatrii.
                        </li>
                        <li className={styles.descriptionListItem}>
                            Ukończyła studia na Wydziale Pedagogiki we Wszechnicy Polskiej Szkole Wyższej Towarzystwa Wiedzy Powszechnej na kierunku profilaktyka i terapia uzależnień.
                        </li>
                        <li className={styles.descriptionListItem}>
                            Uczestniczyła w szkoleniu specjalistycznym Studium Terapii Uzależnienia od Narkotyków prowadzonym przez Instytut Psychologii Zdrowia Polskiego Towarzystwa Psychologicznego.
                        </li>
                        <li className={styles.descriptionListItem}>
                            Doświadczenie w pracy terapeutycznej zdobyła między innymi w Komitecie Ochrony Praw Dziecka, Środowiskowym Domu Samopomocy dla Osób z Zaburzeniami Psychicznymi oraz Mazowieckim Specjalistycznym Centrum Zdrowia
                            im. prof. Jana Mazurkiewicza w Pruszkowie tj. Tworki. Jak również w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych „Drewnica” w Ząbkach, Poradni Przystań Psychologiczna i Ośrodku Readaptacyjno-Rehabilitacyjnym w Karczewie.
                        </li>
                        <li className={styles.descriptionListItem}>
                            Pracuje w podejściu poznawczo-behawioralnym z wykorzystaniem psychologii pozytywnej.
                        </li>
                        <li className={styles.descriptionListItem}>
                            Kieruje się zasadami Kodeksu Etyczno-Zawodowego Psychologa oraz Kodeksu Etycznego Psychoterapeuty Polskiego Towarzystwa Psychiatrycznego.
                        </li>
                        <li className={styles.descriptionListItem}>
                            Pracuje pod stałą superwizją.
                        </li>
                    </ul>
                </div>
                <div className={styles.aboutMeIframe}>
                    <iframe
                        frameBorder="0"
                        scrolling="no"
                        data-id="y5c3lrqvpt"
                        src="https://widgets.znanylekarz.pl/doctor/widget/big/magdalena-zbikowska?customUtm=null&amp;id=y5c3lrqvpt&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=https%3A%2F%2Fsensima.com.pl%2F&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false&amp;saasonly=false"
                        style={{border: 'none', overflow: 'hidden', width: '100%', height: '268px'}}
                    />
                </div>
            </div>
            <div className={styles.offerHeader} id="offer">
                <div className={styles.offerHeaderSize1}>
                    Oferta
                </div>
                <div className={styles.offerHeaderSize2}>
                    Formy pomocy
                </div>
            </div>
            <div className={styles.offerContainer}>
                <div className={styles.offerItemRow}>
                    <div className={styles.offerItem}>
                        <img src="/img/offer1.png" className={styles.offerItemImage}/>
                        <div className={styles.offerItemHeader}>
                            Konsultacja psychologiczna
                        </div>
                        <div className={styles.offerItemText}>
                            Jest to pierwsze spotkanie klienta z terapeutą, najczęściej jako wstęp do dalszej terapii. Takie sesje odbywają się w formie 1-3 spotkań, raz w tygodniu, każde po 50 minut.
                            Służą określeniu warunków dalszej współpracy, ustalonych wspólnie przez klienta i terapeutę, jak również przyjrzeniu się bliżej temu z jaką trudnością klient przychodzi.
                            Istnieje również możliwość skorzystania wyłącznie z konsultacji, gdzie w ramach jednego, dwóch spotkań klient otrzyma niezbędne wskazówki, jakie podjąć dalsze kroki w celu uporania się z problemem.
                        </div>
                    </div>
                    <div className={styles.offerItem}>
                        <img src="/img/offer1.png" className={styles.offerItemImage}/>
                        <div className={styles.offerItemHeader}>
                            Psychoterapia indywidualna
                        </div>
                        <div className={styles.offerItemText}>
                            Opiera się na bezpośrednim kontakcie klienta z terapeutą. To co jest ważne w takiej formie aktywnej współpracy to między innymi empatyczne reagowanie, otwartość i życzliwość.
                            Klient i terapeuta w czasie rozmowy dążą do określonego celu, a sposoby dążenia do niego i ewentualne trudności są omawiane w czasie terapii. Każda sesja terapeutyczna trwa 50 minut i odbywa się o stałej porze, raz w tygodniu.
                            Czas trwania terapii będzie zależał od wyznaczonego celu, a to co stanowi priorytet to rozwiązanie problemu.
                        </div>
                    </div>
                </div>
                <div className={styles.offerItemRow}>
                    <div className={styles.offerItem}>
                        <img src="/img/offer33.png" className={styles.offerItemImage}/>
                        <div className={styles.offerItemHeader}>
                            Konsultacje i terapia on-line
                        </div>
                        <div className={styles.offerItemText}>
                            Zapraszam do skorzystania z nowej możliwości pracy terapeutycznej poprzez wybrane formy komunikatorów internetowych. Jest to znaczne ułatwienie w dobie ostatnich wydarzeń w kraju i na świecie i może na dłużej zagościć w Naszej rzeczywistości.
                            Praca poprzez Skype czy Zoom jest alternatywą do pracy w gabinecie i pozwala na bieżąco przyjrzeć się i popracować nad trudnościami jakie mogły pojawić się w ostatnim czasie.
                        </div>
                    </div>
                    <div className={styles.offerItem}>
                        <img src="/img/offer4.png" className={styles.offerItemImage}/>
                        <div className={styles.offerItemHeader}>
                            Psychoterapia uzależnień
                        </div>
                        <div className={styles.offerItemText}>
                            Polega na spotkaniach z terapeutą, odbywających się raz w tygodniu. To co różni psychoterapię uzależnień od indywidualnej to główny temat pracy.
                            Niejednokrotnie okazuje się, że uzależnienie jest ściśle związane z innymi problemami np. emocjonalnymi, jednak to co skłania do leczenia to właśnie uzależnienie.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.galleryHeader} id="gallery">
                Galeria
            </div>
            <div className={styles.galleryContainer}>
                <img src="/img/gabinet-1.jpg" className={styles.galleryImage}/>
                <img src="/img/gabinet-2.jpg" className={styles.galleryImage}/>
            </div>
            <div className={styles.pricingHeader} id="pricing">
                Cennik
            </div>
            <div className={styles.pricingContainer}>
                <div className={styles.pricingItem}>
                    Konsultacja psychologiczna:<br/>
                    50 min - 220 zł
                </div>
                <div className={styles.pricingItem}>
                    Psychoterapia indywidualna:<br/>
                    50 min - 220 zł
                </div>
                <div className={styles.pricingItem}>
                    Terapia on-line:<br/>
                    50 min - 200 zł
                </div>
                <div className={styles.pricingFooter}>
                    Płatność gotówką lub kartą<br/>
                    W przypadku terapii on-line, proszę dokonywać wpłaty na konto o numerze 26 1600 1462 1888 4140 0000 0001
                </div>
            </div>
            <div className={styles.contactContainer} id="contact">
                <div className={styles.contactHeader}>
                    Kontakt
                </div>
                <div className={styles.contactLogoContainer}>
                    <div className={styles.contactLogo}>
                        <img src="/img/logo-sensima.svg"/>
                    </div>
                    <div className={styles.contactSensima}>Sensima</div>
                </div>
                <div className={styles.contactDetails}>
                    ul. Dzieci Warszawy 26 m 12<br/>
                    02-495 Warszawa<br/>
                    tel: 602-672-952<br/>
                    gabinet@sensima.com.pl
                </div>
            </div>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4891.396766481433!2d20.906045!3d52.194355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7b92582c8851c7!2sSensima!5e0!3m2!1spl!2spl!4v1548263616459"
                    frameBorder="0"
                    allowFullScreen
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.contactFormContainer}>
                <form id="contactForm" className={styles.contactForm} onSubmit={(ev: any) => {ev.preventDefault(); alert('Jeszcze nie otwarte ;)')}}>
                {/* <form id="contactForm" className={styles.contactForm} action="https://formsubmit.co/michal.marchel84@gmail.com" method="POST"> */}
                    <div className={styles.contactFormHeader}>
                        Formularz kontaktowy
                    </div>
                    Email:
                    <input name='email' type='email' className={styles.contactFormEntity} onInput={onEmailChange} value={email}/>
                    Wiadomość:
                    <textarea name='message' form='contactForm' rows={10} className={styles.contactFormEntity} onInput={onMessageChange} value={message}></textarea>
                    <input type='submit' value='Wyślij' className={`${styles.contactFormSubmit} ${formValid ? styles.buttonActive : ''}`} disabled={!formValid}/>
                </form>
            </div>
        </div>
    );
}

