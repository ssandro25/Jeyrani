const stoneUser = 'stone_user' // ქვა

const scissorsUser = 'scissors_user' //მაკრატელი

const paperUser = 'paper_user' //ფურცელი

const stoneSystem = 'stone_system' //ქვა

const scissorsSystem = 'scissors_system' //მაკრატელი

const paperSystem = 'paper_system' //ფურცელი

const stoneSystemDiv =  document.getElementById(stoneSystem) //ქვა

const scissorsSystemDiv = document.getElementById(scissorsSystem)  //მაკრატელი

const paperSystemDiv =  document.getElementById(paperSystem) //ფურცელი


const system = [stoneSystem, scissorsSystem, paperSystem]

const result = document.getElementById('result')

let success = `<span class="text-success">შენ მოიგე!</span>`

let lose = `<span class="text-danger">სამწუხაროდ წააგე!</span>`

let draw = `<span class="text-secondary">ფრე...</span>`
function userChoose(clicked_id) {
    let randomIndex = Math.floor(Math.random() * system.length);

    switch (clicked_id + system[randomIndex]) {
        case stoneUser + stoneSystem :
            result.innerHTML = draw + ' სისტემამ აირჩია ქვა';
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case stoneUser + scissorsSystem :
            result.innerHTML = success + ' სისტემამ აირჩია მაკრატელი';
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case stoneUser + paperSystem :
            result.innerHTML = lose + ' სისტემამ აირჩია ქაღალდი';
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + stoneSystem :
            result.innerHTML = lose + ' სისტემამ აირჩია ქვა';
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + scissorsSystem :
            result.innerHTML = draw + ' სისტემამ აირჩია მაკრატელი';
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + paperSystem :
            result.innerHTML = success + ' სისტემამ აირჩია ქაღალდი';
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
        case paperUser + stoneSystem :
            result.innerHTML = success + ' სისტემამ აირჩია ქვა';
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case paperUser +  scissorsSystem :
            result.innerHTML = lose + ' სისტემამ აირჩია მაკრატელი';
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case paperUser + paperSystem :
            result.innerHTML = draw + ' სისტემამ აირჩია ქაღალდი';
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
    }

}





