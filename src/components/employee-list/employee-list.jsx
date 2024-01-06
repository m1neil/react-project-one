import "./employee-list.css";
import EmployeeItem from "../employee-item/employee-item";

const EmployeeList = ({ data, onDelete, onToggleProps, onChangeSalary }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeeItem
				key={id}
				{...itemProps}
				onToggleProps={(e) => onToggleProps(id, e.currentTarget.dataset.toggle)}
				onDelete={() => onDelete(id)}
				onChangeSalary={(e) =>
					onChangeSalary(id, +e.target.value.replace("$", ""))
				}
			/>
		);
	});

	return <ul className="employee-list">{elements}</ul>;
};

export default EmployeeList;
