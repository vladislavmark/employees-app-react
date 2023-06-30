import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRise, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => { onDelete(id) }}
            // onToggleIncrease={() => { onToggleIncrease(id) }}
            // onToggleRise={() => { onToggleRise(id) }}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;