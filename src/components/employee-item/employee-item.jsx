import "./employee-item.css";

const EmployeeItem = () => {
	return (
		<li className="employee-item">
			<div className="employee-item__employee">John Smith</div>
			<input
				type="text"
				className="employee-item__salary"
				defaultValue="1000$"
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
