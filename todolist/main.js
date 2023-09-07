// Create a new list item when clicking on the "Add" button
function addListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-box").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("ul-list").appendChild(li);
    }
    document.getElementById("input-box").value = "";

}
