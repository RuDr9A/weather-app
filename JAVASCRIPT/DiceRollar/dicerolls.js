function rollDice(){
    const noOfrolls = document.getElementById("rolls").value ;
    const result = document.getElementById("result") ;
    const diceimages = document.getElementById("Images") ;

    const values = [];
    const images = [];

    for(let i = 0 ;i< noOfrolls ;i++){
        const value = Math.floor(Math.random()*6)+1 ;
        values.push(value) ;
       images.push(
            `<img src="diceImg/Dice${value}.png" alt="Dice ${value}">`
        );
    
    }
    console.log(values) ;

    result.textContent = `Dice : ${values.join(" , ")}`
    diceimages.innerHTML = images.join(' ') ;


}