import './app-info.scss';

const AppInfo = ({ amountEmployees, whoGetRise, howManyGetRise }) => {
    return (
        <div className="app__info">
            <h3>Учёт сотрудников в компании Company</h3>
            <p>Общее число сотрудников: {amountEmployees}</p>
            <p>Премию получат: {whoGetRise} ({howManyGetRise})</p>
        </div>
    )
}

export default AppInfo;