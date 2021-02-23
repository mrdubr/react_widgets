import React, { useState, useEffect } from 'react';
import axios from 'axios'

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';




const Convert = ({ text, language }) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState('');

    const translate = (text, language) => {

        axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: text,
                    target: language.value,
                    key: API_KEY
                }
            }
        ).then((r) => setTranslated(r.data.data.translations[0].translatedText));
    
    };


    useEffect(() => {
        const t = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return( () => {clearTimeout(t) } );
    },
        [text, language]);

    useEffect(() => {
            translate(text, language);
        },
        [debouncedText, language]
    );

    return (
        <div>{translated}</div>
    );
};

export default Convert;