let link = ["1st.mp3", "2nd.png", "3rd.mp3", "4th.mp3"]
let pic = ["1st.png", "2nd.png", "3rd.png", "4th.png"]
let nam = ["First", "Second", "Third", "Fouth"]
let singer = ["ADEEL", "KHAN", "AHMAD", "NADEEM"]


let index = 0;
document.querySelector("#previous").addEventListener("click", () => {
    if (index == 0) {
        index = link.length;
    }
    index = index - 1;

    let lin = link[index]
    // document.getElementById("img").innerHTML=`<img class="img" src=${img} alt="">`
    document.querySelector(".audio").src = lin
    document.getElementsByClassName("details")[0].innerHTML = `<div class="details"> SONG Name: ${nam[index]} <br> Singer: ${singer[index]} </div>`
})

document.querySelector(".next").addEventListener("click", () => {
    if (index == link.length - 1) {
        index = -1;
    }
    index = index + 1;

    let lin = link[index]
    // document.getElementById("img").innerHTML=`<img class="img" src=${img} alt="">`
    document.querySelector(".audio").src = lin
    document.getElementsByClassName("details")[0].innerHTML = `<div class="details"> SONG Name: ${nam[index]} <br> Singer: ${singer[index]} </div>`
})
document.querySelector(".rside").addEventListener("click", () => {
    if (index == link.length - 1) {
        index = -1;
    }
    index = index + 1;

    let lin = link[index]
    document.getElementById("img").innerHTML=`<img class="img" src=${img} alt="">`
    document.querySelector(".audio").src = lin
    document.getElementsByClassName("details")[0].innerHTML = `<div class="details"> SONG Name: ${nam[index]} <br> Singer: ${singer[index]} </div>`
    document.getElementsByClassName("rside")[0].innerHTML = `
                    <div>
                        <h1>NEXT SONG </h1>
                        <h2>SONG NAME: ${nam[index]} </h2>
                        <h2>SINGER: ${singer[index]} </h2>
                        </div>
                        <h1 class="play">PLAY NOW</h1>
                        `
})
document.querySelector(".lside").addEventListener("click", () => {
    if (index == 0) {
        index = link.length;
    }
    index = index - 1;

    let lin = link[index]
    // document.getElementById("img").innerHTML=`<img class="img" src=${img} alt="">`
    document.querySelector(".audio").src = lin
    document.getElementsByClassName("details")[0].innerHTML = `<div class="details"> SONG Name: ${nam[index]} <br> Singer: ${singer[index]} </div>`
    document.getElementsByClassName("lside")[0].innerHTML = ` 
                    <div>
                        <h1>PREVIOUS SONG </h1>
                        <h2>SONG NAME: ${nam[index]} </h2>
                        <h2>SINGER: ${singer[index]} </h2>
                        </div>
                        <h1 class="play">PLAY NOW</h1>
                        `
})
