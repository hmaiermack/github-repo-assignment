'use strict';
function getRepos(username){

}

function printRepos(username){
    console.log(username);
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        const username = $('#username').val();
        console.log(username);
        printRepos(username);
    });
}

$(watchForm);