let user = new APIManager
let renderer = new Renderer

//load page data
$("#Load").on("click", function () {


    user.loadPageData()


})

//display user data
$("#Display").on("click", function () {


    renderer.render(user.data)


})

//save user data + render
$("#save").click(function () {
    user.saveUserData()
    renderer.render(user.data)
})


$(".shiftdown-content").on("click",".saved-names", function() {
    console.log("clicked")
    let name = $(this).text()
    console.log(name)
    renderer.render(JSON.parse(localStorage[name]))
})