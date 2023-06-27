let nameInput = document.getElementById("name")!
let raceInput = document.getElementById("race")!
let genderInput = document.getElementById("gender")!
let classInput = document.getElementById("class")!


let myEventListener = (event:Event) => {
    let userInput = ((event.target as HTMLInputElement).value)
    document.getElementById("nameH1")!.innerHTML = userInput
 }


 let myOtherEventListener = (event:Event) => {

    let gender = ((genderInput as HTMLInputElement).value)
    let race = ((raceInput as HTMLInputElement).value)
    let myImg = document.querySelectorAll("img")
        if ((gender === "male") && (race === "caucasian")) {
            myImg[0].src = "https://carbon-media.accelerator.net/0000000i7zK/cjL2ICbSaZkbltIIFpzTe6;original.gif"
        }   

        if ((gender === "female") && (race === "caucasian")) {
            myImg[0].src = "https://carbon-media.accelerator.net/0000000i7zK/fSMk0aj25yqd02SHqRiZ1B;original.gif"
           } 

           if ((gender === "female") && (race === "asian")) {
            myImg[0].src = "https://cdna.artstation.com/p/assets/images/images/050/231/012/original/lucas-luel-player-attack-down.gif?1654364725"
           } 

          if ((gender === "male") && (race === "asian")) {
            myImg[0].src = "https://i.pinimg.com/originals/05/c8/f8/05c8f834367e36d344233f5ba21931b9.gif"

            }

           if ((gender === "female") && (race === "african")) {
            myImg[0].src = "https://64.media.tumblr.com/240265973e4612baa177af3e895eda42/tumblr_inline_nxm9w60dJ51sy4zww_500.gifv"
           }

           if ((gender === "male") && (race === "african")) {
            myImg[0].src = "https://carbon-media.accelerator.net/0000000i7zK/e5e0mZ1190TbrmHfoIPo1F;original.gif"
           }
        }


        let myThirdEventListener = (event:Event) => {
            let charClass = ((classInput as HTMLInputElement).value)
            let myImg = document.querySelectorAll("img")
            if (charClass === "beginner"){
                myImg[1].src = "https://img.freepik.com/premium-vector/pixel-art-bitcoin-trophy-cryptocurrency-prize-vector-icon-8bit-game-white-background_360488-929.jpg?size=626&ext=jpg"
               } 

               if (charClass === "amateur"){
                myImg[1].src = "https://cdn-icons-png.flaticon.com/512/939/939241.png"
               } 

               if (charClass === "pro"){
                myImg[1].src = "https://img.freepik.com/premium-vector/pixel-art-trophy-icon-8bit_360488-200.jpg"
               } 

        }


nameInput.addEventListener("input", myEventListener)
raceInput.addEventListener("input", myOtherEventListener)
genderInput.addEventListener("input", myOtherEventListener)
classInput.addEventListener("input", myThirdEventListener)

