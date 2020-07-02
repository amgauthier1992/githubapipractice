// Review GitHub's API documentation for the list user repositories endpoint to understand how this endpoint works.
//     Create an app and push it to GitHub (X)
//     When you're done, submit the link to your GitHub repo at the bottom of the page.
//     Requirements:
//         -The user must be able to search for a GitHub user handle.
//         -The search must trigger a call to GitHub's API.
//         -The repos associated with that handle must be displayed on the page.
//              -You must display the repo name and link to the repo URL.
//         -The user must be able to make multiple searches and see only the results for the current search.

//GET /users/:username/repos

'use strict';

// function formatQueryParams(params) {
//     const queryItems = Object.keys(params)
//         .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//     return queryItems.join('&');
// }

// function displayResults(responseJson, maxResults){
//     console.log(responseJson);
//     $('#results-list').empty();
//     for (let i = 0; i < responseJson.value.length && i < maxResults ; i++){
//         $('#results-list').append(
//             //repos go here
//         )};
//     $('results').removeClass('hidden');
// };

// function getRepos(query) {
//     const params = {
//         q: query,
//         pageSize: maxResults
//     };
//     const queryString = formatQueryParams(params)
//     const url = searchURL + '?' + queryString;

//     const options = {
//         headers: new Headers({

//         })
//     }
// };

// fetch(url, options)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error(response.statusText);
//     })
//     .then(responseJson => displayResults)

function watchForm() {
$('form').submit(function(event){
    event.preventDefault();
    const handle = $('#search-handle').val();
    console.log(handle);
    getRepos(handle)
    });
}

$(watchForm);
