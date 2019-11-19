'use strict';
function getRepos(githubUsername){
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => printRepos(responseJson, githubUsername))
    .catch(err => {
        $('#results-list').empty();
        $('#js-error-message').text(`Sorry theres been an error: ${err.message}`)
    });
}

function printRepos(responseJson, githubUsername){
    console.log(responseJson.length);
    $('#results-list').empty();
    $('#results').removeClass('hidden');
    for(let i=0; i < responseJson.length; i++){
        console.log(responseJson[i].name);
        $('#results-list').append(`<li><a href="${responseJson[i].html_url}">
        ${responseJson[i].name}</a></li>`);
    }

}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        const githubUsername = $('#username').val();
        getRepos(githubUsername);
    });
}

$(watchForm);