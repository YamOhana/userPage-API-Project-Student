//This is the class that will manage all your APIs


class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {

        $.ajax({
            url: 'https://randomuser.me/api/?results=1',
            dataType: 'json',
            success: (data1) => {
                this.data.users = data1.results
                console.log(this.data.users[0].name.first)
            }
        });
    }

    loadFriends() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: (data1) => {
                this.data.friends = data1.results

            }
        });
    }

    loadKanye() {
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: (data1) => {
                this.data.quote = data1

            }
        });
    }

    loadPokemon() {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 130)}`,
            dataType: 'json',
            success: (data1) => {
                this.data.pokemon = data1

            }
        });
    }

    loadMeat() {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1',
            dataType: 'json',
            success: (data1) => {
                this.data.meat = data1

            }
        });
    }

    loadPageData() {
        this.loadData()
        this.loadFriends()  
        this.loadKanye()
        this.loadPokemon()
        this.loadMeat()
    }

    saveUserData() {

        localStorage.setItem(this.data.users[0].name.first, JSON.stringify(this.data))
    }
}