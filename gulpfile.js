const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber=require('gulp-plumber');                 //para que no se deje de ejecutar el workflow

//src es para buscar un archivo
//dest nos permite almacenar info en una carpeta de estilo

function css(done) {

    src("src/scss/**/*.scss")                //identifica el archivo de sass
        .pipe( plumber())
        .pipe( sass() )                     //compilar sass
        .pipe( dest("build/css") );   //almacenar en el ssd

    done(); //callback
}

function dev(done){
    watch("src/scss/**/*.scss",css);

    done()
}

exports.css=css;
exports.dev=dev;