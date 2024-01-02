import "./employee-list.css";
import EmployeeItem from "../employee-item/employee-item";

const EmployeeList = ({ data }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeeItem
				key={id}
				{...itemProps}
			/>
		);
	});

	return <ul className="employee-list">{elements}</ul>;
};

export default EmployeeList;
