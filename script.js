function insert_Row() {
    //Write your code here
	let existing_Table = document.querySelector("#sampleTable");
	let new_Row = document.createElement ("tr");
	existing_Table.prepend(new_Row);

	let new_Cell1 = document.createElement("td");
	let new_Cell2 = document.createElement("td");

	new_Cell1.innerText = "New Cell 1";
	new_Cell2.innerText = "New Cell 2";
	

	new_Row.appendChild(new_Cell1);
	new_Row.appendChild(new_Cell2);
}
