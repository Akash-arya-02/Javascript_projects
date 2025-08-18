const form = document.querySelector('form')
// If we will add it here the usecase will give you empty as when the
// page will be loaded the value(empty) will stored because it is not inside form
    // const height = parseInt(document.querySelector('#height').value)
    // const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid heigth ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
        switch (true) {
            case bmi<18.6:
                resultguide.innerHTML = `<span>Under Weight</span>`
                break;
            case 18.6<bmi<24.9:
                resultguide.innerHTML = `<span>Normal Range</span>`
                break;
            case bmi>24.9:
                resultguide.innerHTML = `<span>OverWeight</span>`
                break;
        
            default:
                console.log("Didn't got a valid calculation");
                break;
        }
        
    }

})