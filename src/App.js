import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is react',
        content: 'JS framework'
    },
    {
        title: 'Why react',
        content: 'Its good'
    },
    {
        title: 'Who wrote',
        content: 'FB'
    },
]

const colors = [
    {
        label: "Dark Green",
        value: "green"
    },
    {
        label: "Intense Red",
        value: "red"
    },
    {
        label: "Shade of Blue",
        value: "blue"
    },
    {
        label: "Brown is brown",
        value: "brown"
    }
];


export default () => {

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    

    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    selected={selectedColor}
                    onSelectedChange={setSelectedColor}
                    options={colors} />
                Selected color: {selectedColor.label}
            </Route>
        </div>
        
    );
}