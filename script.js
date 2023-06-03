var enterButton = document.getElementById('enter');
var clearButton = document.getElementById('clear')
var input = document.getElementById('userinput');
var unOrderList = document.getElementById("shoppinglist");

enterButton.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    unOrderList.appendChild(li)
    input.value = ""
})

clearButton.addEventListener("click", function(){
    unOrderList.innerHTML = null
})
