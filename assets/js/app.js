function opentab(Tabid){
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((opentab) => {
        opentab.classList.add("d-none");
        opentab.classList.remove("d-block");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-block");
    opentabs.classList.remove("d-none");
}
function closetab(Tabid){
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((opentab) => {
        opentab.classList.add("d-block");
        opentab.classList.remove("d-none");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-none");
    opentabs.classList.remove("d-block");
}