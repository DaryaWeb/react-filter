import { Component } from 'react';

import './employees-add-form.scss';

class EmployeersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add__form">
                <h5>Добавьте нового сотрудника</h5>
                <form
                    onSubmit={this.onSubmitForm}
                    className="add__form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="ФИО"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/п в $"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeersAddForm;