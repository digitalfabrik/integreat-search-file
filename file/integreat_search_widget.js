const data = {
    city: "Augsburg",
    default_language: "de"
}

let button = document.querySelector("form");
let target_url = "https://www.integreat.app/" + data.city.toLowerCase() + "/" + data.default_language + "/search";
button.addEventListener("submit", function(event){ 
    event.preventDefault();
    let keyword = document.getElementById("integreat_search").value;
    if (keyword.length > 0) {
        target_url = target_url + "/?query=" + keyword;
    }
    window.open(target_url, "_blank");
});