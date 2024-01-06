import "./app-filter.css";

const AppFilter = ({ onUpdateValueFilter, filter }) => {
	function updateValueFilter(event) {
		const target = event.target;
		if (!target.closest("[data-filter]")) return;
		onUpdateValueFilter(target.getAttribute("data-filter"));
	}

	const buttons = [
		{ nameFilter: "all", text: "Все сотрудники" },
		{ nameFilter: "favorite", text: "На повышение" },
		{ nameFilter: "salary", text: "З/П больше 1000$" },
	];

	const elements = buttons.map(({ nameFilter, text }) => {
		let classesForButtons = "app-btn";
		classesForButtons += nameFilter === filter ? " _active" : "";

		return (
			<button
				key={nameFilter}
				data-filter={nameFilter}
				className={classesForButtons}
			>
				{text}
			</button>
		);
	});

	return (
		<div
			onClick={updateValueFilter}
			className="app-filter"
		>
			{elements}
		</div>
	);
};

export default AppFilter;
