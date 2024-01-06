import "./search-panel.css";
import {Component} from "react";
class SearchPanel extends Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		}
	}

	onUpdateSearch = (event) => {
		const value = event.target.value;
		this.setState({
			inputValue: value
		});

		this.props.onUpdateSearch(value);
	}
	render() {
		const {inputValue} = this.state;
		return (
			<input
				value={inputValue}
				onChange={this.onUpdateSearch}
				className="input-search"
				placeholder="Найти сотрудника"
				type="text"
			/>
		);
	}
};

export default SearchPanel;
