import Home from './Sections/Home';
import About from './Sections/About';
import Resume from './Sections/Resume';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';

const AppIndex = () => {
    return (
        <main class='wrapper'>
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
            <div className='right-effects'></div>
            <div className='left-effects'></div>
        </main>
    );
};

export default AppIndex;
