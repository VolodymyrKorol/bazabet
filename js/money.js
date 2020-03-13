const moneyFrontLinks = [
     "img/money/moneyFrontFirst.png",
     "img/money/moneyFrontSecond.png",
     "img/money/moneyFrontThird.png",
     "img/money/moneyFrontFourth.png"
 ]
 const moneyBackLinks = [
     "img/money/moneyBackFirst.png",
     "img/money/moneyBackSecond.png",
     "img/money/moneyBackThird.png",
     "img/money/moneyBackFourth.png",
     "img/money/moneyBackFifth.png",
     "img/money/moneyBackSixth.png"
 ]
 const moneyDirection = [
     "moneyUp",
     "moneyLeft",
     "moneyRight"
 ]
 const getRandomInt = (min, max)=>
 {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

if(screen.width>1470) {
    setInterval(() => {
        $('.image-player-truck-container').append(
            `<img style = " z-index:100;position: absolute; top:` + getRandomInt(175, 183).toString() + `px; right:` + getRandomInt(0, 230).toString() + `px; " class="` + moneyDirection[getRandomInt(0, 2)] + ` moneyUpRemove" src="` + moneyFrontLinks[getRandomInt(0, 3)] + `">`
        )
        setTimeout(() => {
            $('.moneyUpRemove').remove()
        }, 900)
    }, 1000)
    let count = 0
    setInterval(() => {
        count++;
        $('.image-player-truck-container').append(
            `<img style = " width: 36px; height: 21px; z-index:4;position: absolute; top:` + getRandomInt(-190, -200).toString() + `px; right:` + getRandomInt(0, 600).toString() + `px; " class="moneyDown moneyDownRemove-` + count.toString() + `" src="` + moneyBackLinks[getRandomInt(0, 5)] + `">`
        )

    }, 1000)
    let countRem = 0;
    setTimeout(() => {
        setInterval(() => {
            let elem = '.moneyDownRemove-' + countRem.toString()
            $(elem).remove()
            countRem++
        }, 1000)
    }, 3100)
}
