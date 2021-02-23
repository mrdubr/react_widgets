import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange, promptText }) => {

    const ref = useRef();

    const [visible, setVisible] = useState(false);

    const onBodyClick = (e) => {
        if (ref.current && ref.current.contains(e.target)) {
            return;
        }
        setVisible(false);
    };

    useEffect(() => {
        document.body.addEventListener('click', onBodyClick);

        return (() => {
            console.log("Clean up");
            document.body.removeEventListener('click', onBodyClick)
        });
    }, []);



    const renderedOptions = options
        .filter((option) => {
            return !(option === selected)
        })
        .map((option) => {
            return (
                <div key={option.value}
                    onClick={() => {
                        onSelectedChange(option);
                    }}
                    className="item">
                    {option.label}
                </div>
            );
        });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{promptText}</label>
                <div className={`ui selection dropdown ${visible ? 'visible active' : ''}`}
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${visible ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
