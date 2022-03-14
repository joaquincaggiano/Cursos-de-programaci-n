window.addEventListener("load", function(){
    let estadoSecreto = 0;
    let inputTitle = document.querySelector("#title");

    inputTitle.addEventListener("keypress", function(e){
        let key = e.key;
        if(estadoSecreto == 0 && key == "s"){
            estadoSecreto = 1
        } else if (estadoSecreto == 1 && key == "e"){
            estadoSecreto = 2
        } else if (estadoSecreto == 2 && key == "c"){
            estadoSecreto = 3
        } else if (estadoSecreto == 3 && key == "r"){
            estadoSecreto = 4
        } else if (estadoSecreto == 4 && key == "e"){
            estadoSecreto = 5
        } else if (estadoSecreto == 5 && key == "t"){
            estadoSecreto = 6
        } else if (estadoSecreto == 6 && key == "o"){
            alert("SECRETO MÁGICO");
        } else {
            estadoSecreto = 0;
        }
    })
})