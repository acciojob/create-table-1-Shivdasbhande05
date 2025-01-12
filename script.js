function insert_Row() {
 //    //Write your code here
	// //getting element by ID using querySelector
	// let existing_Table = document.querySelector("#sampleTable");
	
	// //creating new row element
	// let new_Row = document.createElement ("tr");

	// //creating table data element
	// let new_Cell1 = document.createElement("td");
	// let new_Cell2 = document.createElement("td");

	// //adding text in td element
	// new_Cell1.textContent = "New Cell1";
	// new_Cell2.textContent = "New Cell2";

	// //adding cells in row
	// new_Row.appendChild(new_Cell1);
	// new_Row.appendChild(new_Cell2);

	// //adding new row at start of the table.
	// existing_Table.insertBefore(new_Row,existing_Table.firstChild);

	// Get the reference to the table
  const table = document.getElementById("sampleTable");

  // Create a new row (<tr>)
  const newRow = table.insertRow(0);  // Insert at position 1, just below the header row

  // Create the left cell (td) for the new row
  const cell1 = newRow.insertCell(0);  // Insert at position 0 (left cell)
  cell1.innerText = "New Cell1";  // Set the text content to "New Cell1"

  // Create the right cell (td) for the new row
  const cell2 = newRow.insertCell(1);  // Insert at position 1 (right cell)
  cell2.textContent = "New Cell2";  // Set the text content to "New Cell2"
}
