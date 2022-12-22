import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Kirill M.', salary: 815, increase: true, rise: true, id: 1 },
                { name: 'Ivan K.', salary: 850, increase: false, rise: false, id: 2 },
                { name: 'Igor L.', salary: 3400, increase: true, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'increase':
                return items.filter(item => item.increase);
            case 'more':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onUpdateFilter = (filter) => {
        this.setState({ filter });
    }

    onSalaryAdd = (id, add) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: add.replace(/[^0-9]/g, "") }
                }
                return item;
            })
        }))
    }

    render() {
        const { data, term, filter } = this.state;
        const employeed = this.state.data.length;
        const rised = this.state.data.filter((item) => item.increase).length;
        const increased = this.state.data.filter((item) => item.increase).map((item, i, data) => {
            return data.length === i + 1 ? item.name : `${item.name}, `;
        });
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    amountEmployees={employeed}
                    whoGetRise={increased}
                    howManyGetRise={rised}
                />
                <div className="search__panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter} />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryAdd={this.onSalaryAdd} />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App;
