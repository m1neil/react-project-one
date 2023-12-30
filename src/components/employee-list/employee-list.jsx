import "./employee-list.css";
import EmployeeItem from "../employee-item/employee-item";

const EmployeeList = () => {
	return (
		<ul className="employee-list">
			<EmployeeItem />
			<EmployeeItem />
			<EmployeeItem />
		</ul>
	);
};

export default EmployeeList;
