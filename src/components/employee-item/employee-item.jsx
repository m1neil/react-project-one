import "./employee-item.css";

const EmployeeItem = (props) => {
	const { name, salary, onDelete, onToggleProps, increase, favorite } = props;

	let classNames = "employee-item";

	if (increase) {
		classNames += " increase";
	}
	if (favorite) {
		classNames += " star";
	}

	return (
		<li className={classNames}>
			<div className="employee-item__employee">
				<span
					data-toggle="favorite"
					onClick={onToggleProps}
				>
					{name}
				</span>
			</div>
			<input
				type="text"
				className="employee-item__salary"
				defaultValue={salary + "$"}
			></input>
			<div className="employee-item__actions">
				<button
					data-toggle="increase"
					onClick={onToggleProps}
					className="employee__button employee-item__favorites"
				>
					<i className="fa-sharp fa-solid fa-heart"></i>
				</button>
				<button
					onClick={onDelete}
					className="employee__button employee-item__trash "
				>
					<i className="fa-solid fa-trash"></i>
				</button>
				<i className="fa-solid fa-star"></i>
			</div>
		</li>
	);
};

export default EmployeeItem;
