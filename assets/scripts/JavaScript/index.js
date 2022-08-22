function toggleMobileNavigationMenu(){
    const navigationMenu = document.querySelector('#navigationMenu');
    
    navigationMenu.classList.toggle('is-active');
}
function displayWork(id){
    switch(id){
        case "infodat":
            document.getElementById("infodatDesc").style.display = "block";
            document.getElementById("uohDesc").style.display = "none";
            document.getElementById("perspectaiDesc").style.display = "none";
            break;
        case "uoh":
            document.getElementById("infodatDesc").style.display = "none";
            document.getElementById("uohDesc").style.display = "block";
            document.getElementById("perspectaiDesc").style.display = "none";
            break;
        default:
            document.getElementById("infodatDesc").style.display = "none";
            document.getElementById("uohDesc").style.display = "none";
            document.getElementById("perspectaiDesc").style.display = "block";
            break;
    }
}
