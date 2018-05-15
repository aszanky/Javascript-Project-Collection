class Github {
    constructor() {
        this.clientID = '6a49297cad16c4bd945d';
        this.clientSecret = '18c96d351828d1861f4b235d1d23376ed2d53db9';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
