let friends = [];

function addFriend() {
    let input = document.getElementById("friend");
    let name = input.value.toLowerCase().trim();

    if(name === ""){
        alert("Please enter a valid name.");
        return;
    }

    if(friends.includes(name)){
        alert("This name has already been added.");
        return;
    }

    friends.push(name);
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

function drawName() {
    if (friends.length === 0) {
    alert("Add at least one name before drawing.");
    return;
  }

  const random = Math.floor(Math.random() * friends.length);
  const chosen = friends[random];
  document.getElementById("result").innerHTML = `<li>🎁 You drew: ${chosen}</li>`;

}
