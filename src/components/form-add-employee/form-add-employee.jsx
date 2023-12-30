import "./form-add-employee.css";

const FormAddEmployee = () => {
	return (
		<div className="form-add-employee">
			<div className="form-add-employee__title">Добавить нового сотрдуника</div>
			<form
				action="#"
				className="form-add-employee__form form__employee"
			>
				<input
					type="text"
					className="form__employee__input"
					placeholder="Как его зовут?"
				/>
				<input
					type="text"
					className="form__employee__input"
					placeholder="З/П в $"
				/>
				<button className="form__employee__button">Добавить</button>
			</form>
		</div>
	);
};

export default FormAddEmployee;
