let friends = [];

function addFriend() {
    let name = document.getElementById("friend").value.trim();

    if(name === " "){
        alert("Please enter a valid name.");
        return
    }

    if(friends.includes(name)){
        alert("This name has already been added.");
        return
    }

    amigos.push(name);
    document.getElementById("friend").value = "";
    showFriends();
}

function showFriends() {
    let list = document.getElementById("friendsList");
    list.innerHTML = "";
    for(let friend of friends){
        let li= document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    }
}


