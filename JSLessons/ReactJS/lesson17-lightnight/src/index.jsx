import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import ModeBtn from './components/ModeBtn';
import ModeTop from './components/ModeTop';
import info from './data/data';
import MovieCard from './components/MovieCard';
import { useTranslation } from 'react-i18next';
import './multiLangConfig/i18next';

const App = () => {
    const [mode, setMode] = useState('light');
    useEffect(() => {
        document.body.className = mode;
    }, [mode])

    const { t, i18n } = useTranslation();
    const handlerClick=(lang)=>{
        i18n.changeLanguage(lang);
    }
    // function handlerClick(lang) {
    //     i18n.changeLanguage(lang);
    // }
    return (
       
        <div className='container mt-5'>

            <div className="mb-5">
                <button onClick={() => { handlerClick('az') }} className='btn btn-outline-dark'>AZ</button>
                <button onClick={() => { handlerClick('tr') }} className='btn btn-outline-dark'>TR</button>
                <button onClick={() => { handlerClick('en') }} className='btn btn-outline-dark'>EN</button>
            </div>

            <p>{t('a.1')}</p>

            <ModeTop color={mode} />
            <ModeBtn color={mode} setColor={setMode} />

            <div className="row mt-5">
                {info.fetchdata.map((gelendata,index) => {
                    return <MovieCard
                        title={t(`movies.${index}`)}
                        // title={gelendata.movieName}
                        budget={gelendata.movieBudget}
                        year={gelendata.movieYear} />
                })}
            </div>

        </div>
      
    )
}

ReactDOM.render(
    <Suspense fallback={(<div>Loading...</div>)}><App />  </Suspense>, document.getElementById('root'));

