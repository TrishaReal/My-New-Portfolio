import Home from './Sections/Home';
import Skills from './Sections/Skills';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';

const AppIndex = () => {
    return (
        <main className='wrapper'>
            <Home />
            <Skills />
            <Portfolio />
            <Contact />
            <div className='right-effects'></div>
            <div className='left-effects'></div>
        </main>
    );
};

export default AppIndex;
