/*** Functions for manipulating the UI ***/
/* global $ localStorage */

/* Add movie poster to home page */
function addMoviePoster(section, id, name, image, rating, price) {
    $(`${section}`).append(
        `<div class="col-12 col-lg-3 mb-4">` +
            `<a class="movie" href="movie.php?id=${id}">` +
                `<div class="movie-poster-container position-relative rounded-lg">` +
                    `<img src="${image}" class="movie-poster card-img" alt="${name} poster">` +
                    `<div class="badge badge-pill badge-info movie-rating shadow position-absolute mt-2 mr-2 p-2">` +
                        `<span class="rating">${rating}</span><i class="fas fa-star ml-1"></i>` +
                    `</div>` +
                `</div>` +
                `<h5 class="movie-title text-dark mt-2 mb-0">${name}</h5>` +
                `<h6 class="text-muted">$${price}</h6>` +
            `</a>` +
        `</div>`
    );
}

/* Admin movie item (not being used yet) */
function addMovieAdmin(id, url, name, img, rating, price) {
    $("#all-movies").append(
        `<div class="col-12 col-lg-3 mb-4">` +
                `<div class="admin-movie movie-poster-container position-relative rounded-lg">` +
                
                    /* action sheet overlay */
                    `<div class="movie-overlay position-absolute w-100 h-100">` +
                    
                        `<div class="card-body h-100 d-flex flex-column justify-content-center">` +
                        
                            `<a class="btn btn-info btn-block" href="movie.php?id=${id}">View</a>` +
                            
                            `<a class="btn btn-primary my-2" href="addProducts.php?productId=${id}">Update</a>` +
                            
                            `<form action="api/deleteItem.php" method="post" onsubmit="return confirm('Are you sure you want to delete this item?')">` +
                                `<button class="m-delete btn btn-block btn-danger" name="id" value="${id}">Delete</button>` +
                            `</form>` +
                            
                        `</div>` +
                        
                    `</div>` +
                    
                    /* the movie poster */
                    `<img src="${img}" class="movie-poster card-img" alt="${name} poster">` +
                `</div>` +
                
            `<h5 class="movie-title text-dark mt-2 mb-0">${name}</h5>` +
        `</div>`
    );
}

