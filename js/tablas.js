document.addEventListener("DOMContentLoaded", () => {
    let tablas = document.getElementsByTagName("table");
    console.log(tablas);
    console.log(tablas.length);

    for (var i = 0; i < tablas.length; i++) {
        console.log(i);
        var td_method = document.querySelectorAll(".yes_no tr td");
        console.log(document.querySelectorAll(".yes_no tr td"));
        for (var j = 0; j < td_method.length; j++) {
            if(td_method[i].innerHTML == "Sí" || td_method[i].innerHTML == "Yes") {
                td_method[i].style.fontWeight = "bold";
                td_method[i].style.backgroundColor = "#C1FFA7";
            } else if (td_method[i].innerHTML == "No") {
                td_method[i].style.fontWeight = "bold";
                td_method[i].style.backgroundColor = "#E94C4C";
            }
        }
    }
});