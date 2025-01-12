function insert_Row() {
    //Write your code here
	//getting element by ID using querySelector
	let existing_Table = document.querySelector("#sampleTable");
	
	//creating new row element
	let new_Row = document.createElement ("tr");

	//creating table data element
	let new_Cell1 = document.createElement("td");
	let new_Cell2 = document.createElement("td");

	//adding text in td element
	new_Cell1.textContent = "New Cell1";
	new_Cell2.textContent = "New Cell2";

	//adding cells in row
	new_Row.appendChild(new_Cell1);
	new_Row.appendChild(new_Cell2);

	//adding new row at start of the table.
	existing_Table.prepend(new_Row);
}
