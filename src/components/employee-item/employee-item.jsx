import "./employee-item.css";

const EmployeeItem = ({ name, salary, increase }) => {
	let classNames = "employee-item";
	if (increase) {
		classNames += " increase";
	}

	return (
		<li className={classNames}>
			<div className="employee-item__employee">{name}</div>
			<input
				type="text"
				className="employee-item__salary"
				defaultValue={salary + "$"}
			></input>
			<div className="employee-item__actions">
				<button className="employee__button employee-item__favorites">
					<i className="fa-sharp fa-solid fa-heart"></i>
				</button>
				<button className="employee__button employee-item__trash ">
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</li>
	);
};

export default EmployeeItem;
