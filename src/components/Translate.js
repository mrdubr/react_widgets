import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Russian",
        value: "ru"
    },
    {
        label: "Ukrainian",
        value: "ua"
    }
]; 


const Translate = () => {

    const [selectedLanguage, setLanguage] = useState(options[0]);
    const [textToTranslate, setTextToTranslate] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Text to translate: </label>
                    <input 
                        type="text" 
                        onChange={(e) => setTextToTranslate(e.target.value)}
                        value={textToTranslate}
                    />
                </div>
            </div>

            <Dropdown 
                promptText="Select Language"
                options={options} 
                selected={selectedLanguage}
                onSelectedChange={setLanguage}
            />

            <hr/>
            <h2>
                <Convert text={textToTranslate} language={selectedLanguage} />
            </h2>
        </div>
    );
}

export default Translate