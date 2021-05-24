import Netflix from '../../assets/projects_images/Netflix.png'
import generatecat from '../../assets/projects_images/generatecat.png'
// import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import RPS from '../../assets/projects_images/RPS.png'
// import Memory from '../../assets/projects_images/memory.png'
import BlackJack from '../../assets/projects_images/BlackJack.png'
import iDragon from '../../assets/projects_images/iDragon.png'
// import COVID from '../../assets/projects_images/COVID.jpg'
import Tesla from '../../assets/projects_images/tesla.png'

const data_projects = [
    {
        name: 'Netflix Clone',
        image: Netflix,
        deployed_url: 'https://netflix-ec847.web.app/',
        github_url: 'https://github.com/Hafiz-Waqar/Netflix',
        category: [ 'react.js']
    },
    // {
    //     name: 'COVID 19 tracker',
    //     image: COVID,
    //     deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    //     github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
    //     category: ['react.js']
    // },

    {
        name: 'Tesla Clone',
        image: Tesla,
        deployed_url: 'https://tesla-clone-57a26.web.app/',
        github_url: 'https://github.com/Hafiz-Waqar/Tesla',
        category: [ 'react.js']
    },

    
    // {
    //     name: 'Shop Website',
    //     image: hardware_store,
    //     deployed_url: '!#',
    //     category: ['html_css', 'vanilla']
    // },
    {
        name: 'BlackJack',
        image: BlackJack,
        deployed_url: 'https://blackjack-javascript-game.netlify.app',
        github_url: 'https://github.com/Hafiz-Waqar/BlackJack',
        category: ['javascript']
    },
    {
        name: 'Rock Paper Scesior',
        image: RPS,
        deployed_url: 'https://rock-paper-scesior.netlify.app',
        github_url: 'https://github.com/Hafiz-Waqar/Rock-paper-scesior',
        category: ['javascript']
    },

    // {
    //     name: 'Memory Game',
    //     image: Memory,
    //     deployed_url: 'https://memory-game-by-me.netlify.app',
    //     github_url: 'https://github.com/Hafiz-Waqar/Memory-game',
    //     category: ['javascript']
    // },



    {
        name: 'iDragon',
        image: iDragon,
        deployed_url: 'https://idragon-game.netlify.app',
        github_url: 'https://github.com/Hafiz-Waqar/iDragon-Game',
        category: ['javascript']
    },
    {
        name: 'Generate Cat',
        image: generatecat,
        deployed_url: 'https://generate-cat.netlify.app',
        github_url: 'https://github.com/Hafiz-Waqar/Generate-Cat',
        category: ['javascript']
    },
]

export default data_projects;