let button = document.querySelector('.button')
let text = document.querySelector('.text')
let obb = 0
console.log(button)
console.log(text)

button.addEventListener("click", addobb);

function addobb() {
    console.log(obb)
    if(obb){
        obb = 0
    }else{
        obb = 1
    }
    display();

}

function display(){
    if(obb){
        button.classList.toggle("acceso")
        button.classList.toggle("spento")
        text.classList.toggle("spento2")
        text.classList.toggle("acceso2")

    }else{
        button.classList.toggle("spento")
        button.classList.toggle("acceso")
        text.classList.toggle("spento2")
        text.classList.toggle("acceso2")
        
    }
}

