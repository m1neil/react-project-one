import "./form-add-employee.css";
import { Component } from "react";
class FormAddEmployee extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			salary: "",
		};
	}

	onChangeInputField = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	addData = (event) => {
		event.preventDefault();
		for (const key in this.state) {
			if (!this.state[key].length) return;
		}
		const { onAddEmployee } = this.props;
		onAddEmployee(this.state.name, this.state.salary);
		this.setState({
			name: "",
			salary: "",
		});
	};

	render() {
		const { name, salary } = this.state;

		return (
			<div className="form-add-employee">
				<div className="form-add-employee__title">
					Добавить нового сотрдуника
				</div>
				<form
					onSubmit={this.addData}
					action="#"
					className="form-add-employee__form form__employee"
				>
					<input
						type="text"
						name="name"
						className="form__employee__input"
						placeholder="Как его зовут?"
						onChange={this.onChangeInputField}
						value={name}
					/>
					<input
						type="text"
						name="salary"
						className="form__employee__input"
						placeholder="З/П в $"
						onChange={this.onChangeInputField}
						value={salary}
					/>
					<button className="form__employee__button">Добавить</button>
				</form>
			</div>
		);
	}
}

export default FormAddEmployee;
