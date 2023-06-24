import { Component } from 'react'; // для створення компонента через Class

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Vlad March', salary: 800, increase: true, id: 1 },
                { name: 'Alex Mop', salary: 1000, increase: true, id: 2 },
                { name: 'Nik Levand', salary: 1800, increase: false, id: 3 },
                { name: 'Jacek K.', salary: 2800, increase: false, id: 4 }
            ]
        }
        this.maxId = 4;
    }

    // Delete Item Employer
    deleteEmployerItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Add Item Employer
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        console.log(`Increase ${id}`);
    }

    onToggleRice = (id) => {
        console.log(`rise ${id}`);
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteEmployerItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRice={this.onToggleRice} />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

// function App() {
//     const data = [
//         { name: 'Vlad March', salary: 800, increase: true, id: 1 },
//         { name: 'Alex Mop', salary: 1000, increase: true, id: 2 },
//         { name: 'Nik Levand', salary: 1800, increase: false, id: 3 },
//         { name: 'Jacek K.', salary: 2800, increase: false, id: 4 }
//     ];
//     return (
//         <div className="app">
//             <AppInfo />

//             <div className="search-panel">
//                 <SearchPanel />
//                 <AppFilter />
//             </div>

//             <EmployersList
//                 data={data}
//                 onDelete={(id) => { console.log(id); }} />
//             <EmployersAddForm />
//         </div>
//     );
// }

export default App;