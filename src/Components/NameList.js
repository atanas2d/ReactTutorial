import React from "react";
import Person from "./person";

function NameList() {
	const names = ["Nasco", "Pavli", "Mitko", "Lubka"];
	const persons = [
		{
			id: 1,
			name: "first",
			age: 28,
			skill: "vue",
		},
		{
			id: 2,
			name: "second",
			age: 38,
		},
	];
	const nameList = names.map(name => <h2>{name}</h2>);
	const personList = persons.map(person => <Person person={person} />);

	return (
		<div>
			{" "}
			{nameList} <br /> {personList}{" "}
		</div>
	);
}

export default NameList;
