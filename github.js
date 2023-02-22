class GitHub {
    constructor() {
        this.config = {
            headers: {
                Authorization: 'token $TOKEN$'
            }
        }
        this.repos_count = 5;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config)
        const profileData = await profileResponse.json();

        const reposURL = profileData.repos_url + `?per_page=${this.repos_count}`;

        const reposResponse = await fetch(reposURL);

        const reposData = await reposResponse.json();

        return { profileData, reposData };

    }
}