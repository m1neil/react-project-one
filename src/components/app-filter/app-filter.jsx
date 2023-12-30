import "./app-filter.css";

const AppFilter = () => {
	return (
		<div className="app-filter">
			<button className="app-btn _active">Все сотрудники</button>
			<button className="app-btn">На повышение</button>
			<button className="app-btn">З/П больше 1000$</button>
		</div>
	);
};

export default AppFilter;
