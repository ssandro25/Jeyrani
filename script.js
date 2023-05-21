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

const success = `<span class="text-success">შენ მოიგე!</span>`

const lose = `<span class="text-danger">სამწუხაროდ წააგე!</span>`

const draw = `<span class="text-secondary">ფრე...</span>`

const choseStone = `სისტემამ აირჩია ქვა <i class="fa-solid fa-hand-back-fist ms-2 text-white"></i>`

const choseScissors = `სისტემამ აირჩია მაკრატელი <i class="fa-solid fa-hand-scissors ms-2 text-white"></i>`

const chosePaper = `სისტემამ აირჩია ქაღალდი <i class="fa-solid fa-hand ms-2 text-white"></i>`

function userChoose(clicked_id) {
    let randomIndex = Math.floor(Math.random() * system.length);

    switch (clicked_id + system[randomIndex]) {
        case stoneUser + stoneSystem :
            result.innerHTML = draw + choseStone;
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case stoneUser + scissorsSystem :
            result.innerHTML = success + choseScissors;
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case stoneUser + paperSystem :
            result.innerHTML = lose + chosePaper;
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + stoneSystem :
            result.innerHTML = lose + choseStone;
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + scissorsSystem :
            result.innerHTML = draw + choseScissors;
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + paperSystem :
            result.innerHTML = success + chosePaper;
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
        case paperUser + stoneSystem :
            result.innerHTML = success + choseStone;
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case paperUser +  scissorsSystem :
            result.innerHTML = lose + choseScissors;
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case paperUser + paperSystem :
            result.innerHTML = draw + chosePaper;
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
    }

}





