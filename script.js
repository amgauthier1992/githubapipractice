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

// Parameters
// Name 	  Type 	   Description
// type 	  string   Can be one of all, owner, member. Default: owner
// sort 	  string   Can be one of created, updated, pushed, full_name. Default: full_name
// direction  string   Can be one of asc or desc. Default: asc when using full_name, otherwise desc

'use strict';

function displayRepos(responseJson){
    //responseJson is an array of objects
    $('#results-list').empty();
    $('#results').removeClass('hidden')
    for (let i = 0; i < responseJson.length; i++){
        $('#results-list').append(
            `<li>
            <h2>${responseJson[i].name}</h2>
            <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a> 
            </li>`   
        )
    }
}

function getRepos(handle){
//use backticks as we are dynamically adding handle to url
const url = `https://api.github.com/users/${handle}/repos`
console.log(url);
// const options = {
//     method: "GET",
//     headers: {
//         //typically API key is string. some are unique numbers. depends on API 
//         api_key: "123456"
//     }
//     //we can clarify info here about different headers and pass through to fetch
// }
// fetch(url,options)
fetch(url)
    .then(response => { 
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
        })
    .then(responseJson => displayRepos(responseJson))
}

function watchForm() {
$('form').submit(function(event){
    console.log(`watchForm ran`);
    event.preventDefault();
    const handle = $('#search-handle').val();
    console.log(handle);
    //pass it through to function getRepos. In order to get the repos we need to
    //parse the url. In order to parse the url we need the person's github handle.
    getRepos(handle)
    });
}

//only have 1 event handle, dont need to make a larger master function. 
watchForm();

// first read through js
// -event binded to Form
// -when you click submit event is triggered

// fetch-a method that is prepared to connect with `apis`
// acts similar to postman