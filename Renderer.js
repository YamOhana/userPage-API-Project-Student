
class Renderer {
    _renderUsers(users) {
        const source = $('#first-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( users );
        $(".user-container").empty().append(newHTML);
    }

    _renderFriends(users) {
        const source = $('#third-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( {users} );
        $(".friends-container").empty().append(newHTML);
    }

    _renderQuote(quoteInfo) {
        const source = $('#second-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( quoteInfo );
        $(".quote-container").empty().append(newHTML);
    }

    _renderPokemon(pokemonInfo) {
        const source = $('#fourth-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( pokemonInfo );
        $(".pokemon-container").empty().append(newHTML);
    }
    

    _renderMeat(meatText) {
        const source = $('#fifth-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( meatText );
        $(".meat-container").empty().append(newHTML);
    }

    _renderStorage(storage) {
        const source = $('#sixth-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( {storage} );
        $(".dropdown-content").empty().append(newHTML);
    }

    render(data) {
        this._renderUsers(data)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.meat)
        this._renderStorage(Object.keys(localStorage))
    }
}