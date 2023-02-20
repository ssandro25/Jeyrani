const stoneUser = 'stone_user' // ქვა

const scissorsUser = 'scissors_user' //მაკრატელი

const paperUser = 'paper_user' //ფურცელი

const stoneSystem = 'stone_system' //ქვა

const scissorsSystem = 'scissors_system' //მაკრატელი

const paperSystem = 'paper_system' //ფურცელი

const system = [stoneSystem, scissorsSystem, paperSystem]

const result = document.getElementById('result')

function userChoose(clicked_id) {
    let randomIndex = Math.floor(Math.random() * system.length);

    switch (clicked_id + system[randomIndex]) {
        case stoneUser + stoneSystem :  result.innerHTML='ფრე';
            break;
        case stoneUser + scissorsSystem : result.innerHTML='მოიგე';
            break;
        case stoneUser + paperSystem : result.innerHTML='წააგე';
            break;
        case scissorsUser + stoneSystem :  result.innerHTML='წააგე';
            break;
        case scissorsUser + scissorsSystem : result.innerHTML='ფრე';
            break;
        case scissorsUser + paperSystem : result.innerHTML='მოიგე';
            break;
        case paperUser + stoneSystem :  result.innerHTML='ფრე';
            break;
        case paperUser +  scissorsSystem : result.innerHTML='მოიგე';
            break;
        case paperUser + paperSystem : result.innerHTML='წააგე';
            break;
    }
}





