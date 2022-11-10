

async function getRedditUserAvatar() {

    // Making an API call (request)
    // and getting the response back
    var uri = "https://www.reddit.com/user/Infamous-Date-355/about.json"
    const response = await fetch(uri);
    console.log(response)


}

