/**
 * Created by Shikher on 22-Sep-16.
 */

function expandNavMobile() {
    var currentVisibilityStyle = document.getElementById("nav-desktop").style.visibility;

    if(currentVisibilityStyle === "hidden") {
        document.getElementById("nav-desktop").style.visibility = "visible";
    } else {
        document.getElementById("nav-desktop").style.visibility = "hidden";
    }
}

