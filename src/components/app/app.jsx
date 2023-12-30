import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import FormAddEmployee from "../form-add-employee/form-add-employee";

function App() {
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeeList />
			<FormAddEmployee />
		</div>
	);
}

export default App;
