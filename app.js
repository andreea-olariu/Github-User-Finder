// Init Github
const gitHub = new GitHub();

// Init UI
const ui = new UI();

const searchUser = document.querySelector("#search-user");

searchUser.addEventListener("keyup", (e) => {
    // Get the input text
    const userText = e.target.value;
    
    if(userText === '') {
        // Clear profile
        ui.clear();
    } else {
        gitHub.getUser(userText)
        .then(res => {
            console.log(res);
            if(res.profileData.message === "Not Found") {
                // Show alert
                ui.alert("User not found!");
            } else {
                // Show profile
                ui.createProfile(res.profileData);
            }

            // Show repos if there are any public
            if(res.reposData.length !== 0) {
                ui.createReposWrapper(res.reposData);
                
            }
        })
        .catch(err => console.log(err))
    }

    e.preventDefault();
})

