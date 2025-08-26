import Summary from './components/Summary';
import Header from './components/Header';
import WhyJoin from './components/WhyJoin';
import WhyFit from './components/WhyFit';
import TechStack from './components/TechStack';
import CoreStrengths from './components/CoreStrengths';
import TestBlock from './components/TestBlock';
import Footer from './components/Footer';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <Header />

      <h1 className={styles.title}>Motivation Letter!</h1>
      {/* <img className="responsive-img" src="./src/assets/images/bg.jpg" alt="clipmyhorse" /> */}

      <main className="container">
        <Summary />

        <WhyJoin />

        <WhyFit />

        <TechStack />

        <CoreStrengths />

        <TestBlock />

        <Footer />
      </main>
    </div>
  );
};

export default App;
