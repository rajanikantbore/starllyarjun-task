import React from "react";

const data = [
{ first_name: "Anom",last_name:"bore", phone: 11111111, age: 20, gender: "Male" },
{ first_name: "Anom",last_name:"bore", phone: 11111111,age: 20, gender: "Male" },
{ first_name: "Anom",last_name:"bore", phone: 11111111,age: 20, gender: "Male" },
{ first_name: "Anom",last_name:"bore", phone: 11111111, age: 20, gender: "Male" },
{ first_name: "Anom",last_name:"bore", phone: 11111111, age: 20, gender: "Male" },
{ first_name: "Anom",last_name:"bore", phone: 11111111, age: 20, gender: "Male" },
]

function Tables() {
return (
	<div>
	<table>
		<tr>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Phone</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.first_name}</td>
			<td>{val.last_name}</td>
			<td>{val.phone}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Tables;
