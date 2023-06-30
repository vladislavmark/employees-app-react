import { Component } from 'react'; // для створення компонента через Class

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Vlad March', salary: 800, increase: true, rise: true, id: 1 },
                { name: 'Alex Mop', salary: 1000, increase: false, rise: false, id: 2 },
                { name: 'Nik Levand', salary: 1800, increase: false, rise: false, id: 3 },
                { name: 'Jacek K.', salary: 2800, increase: false, rise: false, id: 4 }
            ]
        }
        this.maxId = 5;
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
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // оптимізація onToggleProp
    // onToggleIncrease = (id) => {
    //     // Old method
    //     // this.setState(({ data }) => {
    //     //     const index = data.findIndex(elem => elem.id === id);
    //     //     const old = data[index];
    //     //     const newItem = { ...old, increase: !old.increase };
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })

    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // оптимізація onToggleProp
    // onToggleRise = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, rise: !item.rise }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteEmployerItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise} 
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;