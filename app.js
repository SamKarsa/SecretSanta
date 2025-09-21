let friends = [];

function addFriend() {
    let name = document.getElementById("friend").value.trim();

    if(name === ""){
        alert("Please enter a valid name.");
        return
    }

    if(friends.includes(name)){
        alert("This name has already been added.");
        return
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
}



