alert("Note : Move that slide bar to generate random password of you lenght... Minimum lenght is 0 and Maximum lenght is 20.")


function passGenerator (a) {

    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!$%&*{}/<>"
    let passWord = ""
    
    for (var i = 0; i < a; i++) {
        let randIndex = Math.floor(Math.random()*char.length)
        passWord += char[randIndex]
    }
  document.getElementById("h1").innerText = passWord
}

passGenerator(20)

document.getElementById("range").addEventListener('change', function(){
let length = this.value;
passGenerator(length)

})
