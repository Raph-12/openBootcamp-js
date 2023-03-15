// Una variable que contenga la lista de la compra (mínimo 5 elementos)

const shoppingList = ['Rice', 'meat', 'tomatoes', 'soda', 'wine'];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
shoppingList.splice(5,0,"Aceite de Girasol")
console.log(shoppingList);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
console.log(shoppingList.slice(0,5))

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const favMovies = {
    "movies" : [
        {
        movieTitle: 'IronMan',
        director: 'Shane Black',
        releaseDate: 2008
    },
    
       { 
        movieTitle: 'El Juez',
        director: 'David Dobkin',
        releaseDate: 2014
    },
    
        {
            movieTitle: 'Creed',
        director: 'Ryan Coogler',
        releaseDate: 2015
    }
]
    
}
console.log(favMovies)

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter);

const fechasBef2010 = favMovies.movies.filter(movie => movie.releaseDate < 2010)
console.log(fechasBef2010)

//  Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const dirOFMovies = favMovies.movies.map
((dir,i) => `${i + 1} ${dir.director}`)
console.log(dirOFMovies)

//  Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const moviesTitles = favMovies.movies.map
((title,i) => `${i + 1} ${title.movieTitle}`)
console.log(moviesTitles)

//  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const titlesAndDirs = dirOFMovies.concat(moviesTitles);
console.log(titlesAndDirs);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const titlesAndDirs1 = [...dirOFMovies, ...moviesTitles]
console.log(titlesAndDirs1) 