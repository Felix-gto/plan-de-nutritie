// HOME
// 8 Reguli -> Arata mai mult... -> Click Button = Arata Regulile detaliate

document.querySelector(".btn_show").addEventListener("click", function() {
    document.querySelector(".hidden").classList.remove("hidden");
});

// 8 Reguli -> Ascunde -> Click Button = Ascunde Regulile detaliate cand

document.querySelector(".btn_hide").addEventListener("click", function() {
    document.querySelector(".display").classList.add("hidden");
});



