import './employees-list.scss';
import EmployeersListItem from "../employees-list-item/employees-list-item"

const EmployeersList = ({ data, onDelete, onToggleProp, onSalaryAdd }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeersListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryAdd={(e) => onSalaryAdd(id, e.currentTarget.value)}
            />
        )
    })

    return (
        <ul className="app__list list-group">
            {elements}
        </ul>
    )
}

export default EmployeersList;