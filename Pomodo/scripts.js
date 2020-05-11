window.onload = function() {
    //variables
    var form = document.getElementById("pomodo-form");
    var input = document.getElementById("pomodo-input");
    var btn = document.getElementById("pomodo-btn");
    var list = document.getElementById("pomodo-list");
    var id = 1;

    //button event listener on mouse click
    btn.addEventListener("click", addTodoItem);

    //button event listener on mouse click
    input.addEventListener('keyup',function(e){
        if (e.keyCode === 13) {
            addTodoItem()
            }
        });

    //list event listener
    list.addEventListener("click", boxChecked);
    
    //add todo item to list
    function addTodoItem() {
        if(input.value === "") {
            alert("Please enter a Task to proceed.");
        }
        else {
            if(list.style.borderTop === "") {
                list.style.borderTop = "2px solid #fff";
            }
            var text = input.value;
            var item = `<li id="li-${id}">${text}
                        <input id="box-${id}" 
                               class="checkboxes"
                               type="checkbox"></li>`;
            list.insertAdjacentHTML('beforeend', item);
            id++;
            input.value = ""; // reset the input value when button is clicked + not empty.
        }
    }

//Add Strikethrough on completed to do list items.
    function boxChecked(event) {
        const element = event.target;
        if(element.type === "checkbox") {
            if( element.checked ){
                element.parentNode.style.textDecoration = "line-through";
            }else{
                element.parentNode.style.textDecoration = "none";
            }
            
        }
    }
}

// Countdown timer code

const startingMinutes = 25;
let time = startingMinutes * 60;

const countdownEL = document.getElementById("countdownTimer");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
