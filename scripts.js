

window.onload = function() {
    //variables
    var form = document.getElementById("pomodo-form");
    var input = document.getElementById("pomodo-input");
    var btn = document.getElementById("pomodo-btn");
    var list = document.getElementById("pomodo-list");
    var id = 1;

    //button event listener
    btn.addEventListener("click", addTodoItem);

    //list event listener
    list.addEventListener("click", boxChecked);

    //add todo item to list
    function addTodoItem() {
        if(input.value === "") {
            alert("Please enter a To Do List Item.");
        }
        else {
            if(list.style.borderTop === "") {
                list.style.borderTop = "2px solid #fff";
            }
            var text = input.value;
            var item = `<li id="li-${id}">${text}
                        <input id="box-${id}" 
                               class="checkboxes"
                               onclick="boxChecked(event)"
                               type="checkbox"></li>`;
            list.insertAdjacentHTML('beforeend', item);
            id++;
            input.value = ""; // reset the input value when button is clicked + not empty.
        }
    }

function boxChecked(event) {
        const element = event.target;
        if(element.type === "checkbox") {
            if( element.checked ){
                element.parentNode.style.textDecoration = "line-through";
                element.parentNode.style.opacity = 0.5;
    
                const parent = element.parentElement.parentElement;
                parent.appendChild(element.parentElement);
            }else{
                element.parentNode.style.textDecoration = "none";
                element.parentNode.style.opacity = 1;

                const parent = element.parentElement.parentElement;
                parent.insertBefore(element.parentElement, parent.firstChild);
            }
        }
    }
}


