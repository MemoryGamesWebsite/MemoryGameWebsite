import React, { Component } from 'react';
import styles from './webstyle.module.css';

class About extends Component {
    render(){
  return (
    <div>
      <p className={styles.about_title}>Apie projektą:
      </p>
      <p className={styles.about_main}>Mūsų komanda nusprendė sukurti interneto puslapį,
        kuriame būtų atminties lavinimui skirti žaidimai. Vartotojas turi prie svetainės
        prisiregistruoti. Sukurti trys skirtingi žaidimai, kurių rezultatus,
        pasiektus rekordus ir kitą informaciją vartotojas gali peržiūrėti skiltyje "Leaderboard".
        Taip pat vartotojui yra įmanoma pakeisti žaidimo nustatymus: pasirinkti tam tikrą
        lygį, pakeisti grafiką. Pirmojo žaidimo idėja – lavinti trumpalaikę atmintį atverčiant
        dvi vienodas užverstas korteles iš daugybės užverstų. Antrojo žaidimo idėja – lavinti
        trumpalaikę regimąją atmintį įsimenant korteles, kurios nuspalvintos tam tikra spalva.
        Trečio žaidimo idėja – patikrinti kiek skirtingų žodžių iš eilės per duotą laiką žaidėjas
        gali įsiminti.
      </p>
      <p className={styles.about_main}>Pagal dėstytojų rekomendacijas šiam projektui buvo panaudota:
       frontend – React, backend – node.js, o duomenų bazei – MongoDB.
      </p>
    </div>
  );
    }
}
export default About;