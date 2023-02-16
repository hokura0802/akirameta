import React from "react";

const IncompleteTodos = () => {
	const { TodoText, onChange, onClick } = props;
	return (
		<div className="input_area">
			<input placeholder="TODOを追加" value={TodoText} onChange={onchange} />
			<button onClick={onClick}>追加</button>
		</div>
	);
};

export default IncompleteTodos;
