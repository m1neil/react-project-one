import "./app-info.css";

const AppInfo = ({ countEmployees, countIncress }) => {
	return (
		<div className="app-info">
			<h1 className="app-title">Учет сотрудников в компании</h1>
			<h2 className="app-title">Общее число сотрудников: {countEmployees}</h2>
			<h2 className="app-title">Премию получат: {countIncress}</h2>
		</div>
	);
};

export default AppInfo;
