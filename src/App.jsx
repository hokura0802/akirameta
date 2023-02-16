import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./comporents/inputTodo";
import IncompleteTodos from "./comporents/InCompleteTodos";

const App = () => {
	const [TodoText, setTodoText] = useState("");

	const [inCompleteTodos, setinCompleteTodos] = useState([
		//useStateは[]の中（配列）の可変のものと変更させるものを…
		// "あああ",
		// "いいい"
	]);

	const [CompleteList, setCompleteList] = useState([
		// "うううううう"
	]);

	const onchangeTodoText = (event) => {
		setTodoText(event.target.value);
	}; //inputを取得する？valueを機能させる？基本構文である。eventとかもそう。

	const onClickAdd = () => {
		// alert();
		if (TodoText === "") return; //省略した書き方　何もせず処理終了の意味
		const newTodos = [...inCompleteTodos, TodoText]; //何個かいれるときは...使う
		setinCompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		// alert();
		const newTodos = [...inCompleteTodos];
		newTodos.splice(index, 1); //spliceは複数のデータのうち１つを消す。２つの引数をとる　1つ目は何番目か２つ目は何個消すか
		setinCompleteTodos(newTodos);
	};

	const onClickCompleate = (index) => {
		const newIncompleteTodos = [...inCompleteTodos];
		newIncompleteTodos.splice(index, 1);

		const newCompleteTodos = [...CompleteList, inCompleteTodos[index]];
		setinCompleteTodos(newIncompleteTodos);
		setCompleteList(newCompleteTodos);
	};

	const onClickBack = (index) => {
		const newCompleteTodos = [...CompleteList];
		newCompleteTodos.splice(index, 1);

		const newIncompleteTodos = [...inCompleteTodos, CompleteList[index]];
		setinCompleteTodos(newIncompleteTodos);
		setCompleteList(newCompleteTodos);
	};

	return (
		<>
			{/* <div className="input_area">
        <input placeholder="TODOを追加" value={TodoText} onChange={onchangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div> */}
			<InputTodo
				TodoText={TodoText}
				onChange={onchangeTodoText}
				onClick={onClickAdd}
			/>{" "}
			　{/*上から順番に処理して、ここまできたらinputTOdoのファイルに飛ぶ */}
			<div className="imcomplete_area">
				<p className="title">未完了のTODO</p>
				<ul>
					{inCompleteTodos.map((todo, index) => {
						//map関数でループを作る.持っている配列の文だけループする。持っている配列の分をDom…
						return (
							<li key={todo}>
								<div className="list_row">
									<p>{todo}</p>
									<button onClick={() => onClickCompleate(index)}>完了</button>
									<button onClick={() => onClickDelete(index)}>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="complete_area">
				<p className="title">完了のTODO</p>
				<ul>
					{CompleteList.map((todo, index) => {
						return (
							<li>
								<div className="list_row">
									<p>{todo}</p>
									<button onClick={() => onClickBack(index)}>戻す</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default App;
