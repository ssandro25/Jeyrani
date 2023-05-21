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

const systemChoose = document.getElementById('system_choose')

const success = `<span class="text-success">შენ მოიგე!</span>`

const lose = `<span class="text-danger">სამწუხაროდ წააგე!</span>`

const draw = `<span class="text-secondary">ფრე...</span>`

const choseStone = ` სისტემამ აირჩია: <span class="text-primary">ქვა</span> <i class="fa-solid fa-hand-back-fist ms-2 text-white"></i>`

const choseScissors = ` სისტემამ აირჩია: <span class="text-warning">მაკრატელი</span> <i class="fa-solid fa-hand-scissors ms-2 text-white"></i>`

const chosePaper = ` სისტემამ აირჩია: <span class="text-danger">ქაღალდი</span> <i class="fa-solid fa-hand ms-2 text-white"></i>`

function userChoose(clicked_id) {
    let randomIndex = Math.floor(Math.random() * system.length);

    switch (clicked_id + system[randomIndex]) {
        case stoneUser + stoneSystem :
            result.innerHTML = draw;
            systemChoose.innerHTML = choseStone;
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case stoneUser + scissorsSystem :
            result.innerHTML = success;
            systemChoose.innerHTML = choseScissors;
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case stoneUser + paperSystem :
            result.innerHTML = lose;
            systemChoose.innerHTML = chosePaper;
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + stoneSystem :
            result.innerHTML = lose;
            systemChoose.innerHTML = hoseStone;
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + scissorsSystem :
            result.innerHTML = draw;
            systemChoose.innerHTML = choseScissors;
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case scissorsUser + paperSystem :
            result.innerHTML = success;
            systemChoose.innerHTML = chosePaper;
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
        case paperUser + stoneSystem :
            result.innerHTML = success;
            systemChoose.innerHTML = choseStone;
            stoneSystemDiv.classList.add("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case paperUser +  scissorsSystem :
            result.innerHTML = lose;
            systemChoose.innerHTML = choseScissors;
            scissorsSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            paperSystemDiv.classList.remove("chosen");
            break;
        case paperUser + paperSystem :
            result.innerHTML = draw;
            systemChoose.innerHTML = chosePaper;
            paperSystemDiv.classList.add("chosen");
            stoneSystemDiv.classList.remove("chosen");
            scissorsSystemDiv.classList.remove("chosen");
            break;
    }

}





