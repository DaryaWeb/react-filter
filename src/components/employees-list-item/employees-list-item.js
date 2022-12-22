import './employees-list-item.scss';

const EmployeersListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, increase, rise, onSalaryAdd } = props;

    let classNames = "list-group-item d-flex justify-content-center justify-content-sm-between";
    if (increase) {
        classNames += " increase";
    }
    if (rise) {
        classNames += " like";
    }

    return (
        <li className={classNames}>
            <span
                className="list-group-item-label"
                onKeyUp={onToggleProp}
                onClick={onToggleProp}
                data-toggle="rise"
                tabIndex={0}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onChange={onSalaryAdd} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-trophy"></i>
                </button>
                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeersListItem;