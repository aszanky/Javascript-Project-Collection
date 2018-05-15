// instantiate github class and UI class
const github = new Github();
const ui = new UserInterface();
// get id
const searchUser = document.getElementById('searchUser');

// event listener
searchUser.addEventListener('keyup', (e) => {

    // get input typing
    const userInput = e.target.value;

    if (userInput !== '') {
        // make http call
        github.getUser(userInput)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else  {
                ui.showProfile(data.profile);
                // console.log(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
})
