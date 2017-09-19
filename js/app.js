//1. The search box at the top of the page shall filter photos based on the caption.

const searchBox = document.querySelector(".search-box");

//2. The photos should filter in real-time as you type

searchBox.addEventListener("keyup", () => {
    const searchInput = searchBox.value.toLowerCase(),
          imageArray = document.querySelectorAll(".image-links");

    //2a. Only the results shall display.

    for (i = 0; i < imageArray.length; i++) {
        const dataTitles = imageArray[i].getAttribute("data-title");

        if(dataTitles.toLowerCase().indexOf(searchInput) > -1) {
            imageArray[i].style.display = "";
        } else {
            imageArray[i].style.display = "none";
        }
    }

});



