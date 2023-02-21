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

function userChoose(clicked_id) {
    let randomIndex = Math.floor(Math.random() * system.length);

    switch (clicked_id + system[randomIndex]) {
        case stoneUser + stoneSystem :
            result.innerHTML='ფრე. შენ აირჩიე ქვა | სისტემამ აირჩია ქვა';
            stoneSystemDiv.classList.add("bg-danger");
            scissorsSystemDiv.classList.remove("bg-danger");
            paperSystemDiv.classList.remove("bg-danger");
            console.log(stoneUser, system[randomIndex])
            break;
        case stoneUser + scissorsSystem :
            result.innerHTML='მოიგე. შენ აირჩიე ქვა | სისტემამ აირჩია მაკრატელი';
            scissorsSystemDiv.classList.add("bg-danger");
            stoneSystemDiv.classList.remove("bg-danger");
            paperSystemDiv.classList.remove("bg-danger");
            console.log(stoneUser, system[randomIndex])
            break;
        case stoneUser + paperSystem :
            result.innerHTML='წააგე. შენ აირჩიე ქვა | სისტემამ აირჩია ქაღალდი';
            paperSystemDiv.classList.add("bg-danger");
            stoneSystemDiv.classList.remove("bg-danger");
            scissorsSystemDiv.classList.remove("bg-danger");
            console.log(stoneUser, system[randomIndex])
            break;
        case scissorsUser + stoneSystem :
            result.innerHTML='წააგე. შენ აირჩიე მაკრატელი | სისტემამ აირჩია ქვა';
            stoneSystemDiv.classList.add("bg-danger");
            scissorsSystemDiv.classList.remove("bg-danger");
            paperSystemDiv.classList.remove("bg-danger");
            console.log(scissorsUser, system[randomIndex])
            break;
        case scissorsUser + scissorsSystem :
            result.innerHTML='ფრე. შენ აირჩიე მაკრატელი |  სისტემამ აირჩია მაკრატელი';
            scissorsSystemDiv.classList.add("bg-danger");
            stoneSystemDiv.classList.remove("bg-danger");
            paperSystemDiv.classList.remove("bg-danger");
            console.log(scissorsUser, system[randomIndex])
            break;
        case scissorsUser + paperSystem :
            result.innerHTML='მოიგე. შენ აირჩიე მაკრატელი |  სისტემამ აირჩია ქაღალდი';
            paperSystemDiv.classList.add("bg-danger");
            stoneSystemDiv.classList.remove("bg-danger");
            scissorsSystemDiv.classList.remove("bg-danger");
            console.log(scissorsUser, system[randomIndex])
            break;
        case paperUser + stoneSystem :
            result.innerHTML='მოიგე. შენ აირჩიე ქაღალდი |  სისტემამ აირჩია ქვა';
            stoneSystemDiv.classList.add("bg-danger");
            scissorsSystemDiv.classList.remove("bg-danger");
            paperSystemDiv.classList.remove("bg-danger");
            console.log(paperUser, system[randomIndex])
            break;
        case paperUser +  scissorsSystem :
            result.innerHTML='წააგე. შენ აირჩიე ქაღალდი | სისტემამ აირჩია მაკრატელი';
            scissorsSystemDiv.classList.add("bg-danger");
            stoneSystemDiv.classList.remove("bg-danger");
            paperSystemDiv.classList.remove("bg-danger");
            console.log(paperUser, system[randomIndex])
            break;
        case paperUser + paperSystem :
            result.innerHTML='ფრე. შენ აირჩიე ქაღალდი | სისტემამ აირჩია ქაღალდი';
            paperSystemDiv.classList.add("bg-danger");
            stoneSystemDiv.classList.remove("bg-danger");
            scissorsSystemDiv.classList.remove("bg-danger");
            console.log(paperUser, system[randomIndex])
            break;
    }

}





