import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRice }) => {


    // const elements = data.map(item => {
    //     // return <EmployersListItem name={item.name} salary={item.salary} />
    //     return <EmployersListItem {...item} />
    // })

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return <EmployersListItem
            key={id}
            {...itemProps}
            onDelete={() => { onDelete(id) }}
            onToggleIncrease={() => { onToggleIncrease(id) }}
            onToggleRice={() => { onToggleRice(id) }} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;