function boxshadow(options) {
    let images = document.querySelectorAll(".boxshadow");

    if (options.box_type === "hard") {
        options.box_type = "0px";
    }
    else {
        options.box_type = "15px";
    }

    images.forEach(i => {
        i.style.boxshadow = `10px 10px ${options.box_type} 1px black`;

        if (options.padding) {
            i.style.padding = '1em';
        }
    })
}

module.exports.boxshadow = boxshadow;