# photo_gallery_v3 (Treehouse Front End Web Development Project 4)

### Project Overview

-   #### Build the web page layout using HTML and CSS, using the layout in the gallery_mockup.png file.

    -   Create a gallery using the provided thumbnail images.
    -   Create a search box field.
    -   The design does not need to be exact, but the general spacing and arrangement of the elements should match the design of the mockups.
    
````
<header>
  <input class="search-box" type="text" name="search" value="" placeholder="Search">
</header>
````

-   #### Research, find and implement a jQuery plugin for a lightbox. This must include the following functionality and features:

    -   The ability to click on thumbnail images in the gallery and view them in a lightbox.
    -   A background overlay that appears and covers the entire window when displaying a larger image.
    -   The ability to add text captions to each image in the lightbox.
    -   Back and forward arrows to switch between photos when the lightbox is visible.
    -   Make sure there is a way to close the lightbox and return to the gallery view.
    
````
//Lightbox config

lightbox.option({
    'maxWidth': 600
});

````
    
  -   #### Include a mobile first design for both the gallery page and the lightbox:
  
````
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
````

  -   Use media queries to make sure that the photos and layout adjusts for mobile-friendly experience.
  
````
@media (min-width: 768px) {

  .search-box {
  width: 30em;
  }

  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 1em 4em 1em 4em;
    max-width: 900px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .image-links {
    width: 20%;
    height: 20%;
    margin: 0 1em 5em 0;
  }

}

@media (min-width: 1024px) {

  .search-box {
  width: 50em;
  }

  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 1em 4em 1em 4em;
    max-width: 1200px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .image-links {
    width: 23%;
    height: 23%;
    margin: 0 1em 5em 0;
  }

}
````
