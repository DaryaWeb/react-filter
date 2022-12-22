import './app-filter.scss';

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'increase', label: 'На повышение' },
        { name: 'more', label: 'З/п больше 1000$' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;