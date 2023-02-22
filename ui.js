class UI {
    constructor() {
        this.body = document.querySelector("#profile");
    }

    clear() {
        this.body.innerHTML = '';
    }

    alert(msg) {
        this.clear();
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(msg));
        div.className = "alert alert-dismissible alert-danger";

        const body = document.querySelector('body');
        const app = document.querySelector('.search-container');

        body.insertBefore(div, app);
        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    createButton(text, className) {
        const btn = document.createElement('button');
        btn.className = className;
        btn.textContent = text;
        return btn;
    }
    createLi(text, className) {
        const elList = document.createElement('li');
        elList.className = className;
        elList.appendChild(document.createTextNode(text));
    }

    createLink(url, text, className) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.className = className;
        return link;
    }

    createProfile(user) {
        this.clear();
        const wrapper = document.createElement('div');
        wrapper.className = ' container p-3 profile-wrapper'

        // profile image
        const img = document.createElement('img');
        img.src = user.avatar_url;
        wrapper.appendChild(img);

        // see profile
        const profile = this.createLink(user.html_url, 'View profile', "btn btn-info");
        wrapper.appendChild(profile);

        // public_repos
        const btns = document.createElement('div');
        const publicRepos = this.createButton(`Public Repos: ${user.public_repos}`, 'btn btn-info');
        btns.appendChild(publicRepos);

        // followers
        const followers = this.createButton(`Followers: ${user.followers}`, 'btn btn-secondary');
        btns.appendChild(followers);

        // following
        const following = this.createButton(`Following: ${user.following}`, 'btn btn-warning');
        btns.appendChild(following);
        wrapper.appendChild(btns);

        // blog

        const ul = document.createElement('ul');
        const blog = document.createElement('li');
        blog.appendChild(document.createTextNode(`Website / blog: ${user.blog}`));
        ul.appendChild(blog);

        // location
        const location = document.createElement('li');
        location.appendChild(document.createTextNode(`Location: ${user.location}`));
        ul.appendChild(location);

        // created_at
        const memeberSince = document.createElement('li');
        memeberSince.appendChild(document.createTextNode(`Member since: ${user.created_at}`));
        ul.appendChild(memeberSince);

        wrapper.appendChild(ul);

        this.body.appendChild(wrapper);
    }

    createReposWrapper(reposData) {
        let reposHTML = '<h1> Latest repos are: </h1> <ul>';
        reposData.forEach(repo => {
            reposHTML += `<li> <a href=${repo.html_url}> ${repo.name} </a> </li>`
        })
        reposHTML += '</ul>'
        this.body.innerHTML += reposHTML;
    }
}