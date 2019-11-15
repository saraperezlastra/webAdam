window.onload = function () {
    $(document).on("click", ".circulo1", function () {
        TweenMax.to(".intro", 2, {
            display: "flex",
            right: "0",
            ease: Power4.easeOut

        })
    })
    $(document).on("click", ".circulo2", function () {
        TweenMax.to(".versionesmarca", 2, {
            display: "flex",
            right: "0",
            ease: Power4.easeOut

        })
    })
    $(document).on("click", ".circulo3", function () {
        TweenMax.to(".tipografiaycolores", 2, {
            display: "flex",
            right: "0",
            ease: Power4.easeOut

        })
    })
    $(document).on("click", ".circulo4", function () {
        TweenMax.to(".construcciondiv", 2, {
            display: "flex",
            right: "0",
            ease: Power4.easeOut

        })
    })
    $(document).on("click", ".circulo5", function () {
        TweenMax.to(".areadeprotecciondiv", 2, {
            display: "flex",
            right: "0",
            ease: Power4.easeOut

        })
    })
    $(document).on("click", ".circulo6", function () {
        TweenMax.to(".variacionesdemarca", 2, {
            display: "flex",
            right: "0",
            ease: Power4.easeOut

        })
    })
}
