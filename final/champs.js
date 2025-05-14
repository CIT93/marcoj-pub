//had to move this into its own module because it was using over 100 lines

//setting up class for making new champions.
// is this needed? input would be form based and therefore a new entry would be hardcoded with user inputs. doing for fun.
export class Champion{
    constructor (name, role, lane){
        this.name = name
        this.role = role
        this.metalanes = lane
        timesPlayed = 0
    }

}

const champList = [{
    name: "Vayne",
    role: "marksman",
    metalanes: {
        top: true,
        jungle: false,
        mid: false,
        adc: true,
        support: false,
    },
    timesPlayed: 3,
    image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/95/VayneSquare.png/revision/latest?cb=20170802170334"
},{
    name: "Ezreal",
    role: "marksman",
    metalanes: {
        top: false,
        jungle: false,
        mid: true,
        adc: true,
        support: false,
    },
    timesPlayed: 1,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/EzrealSquare.png/revision/latest?cb=20170801212628"
},{
    name: "Malzahar",
    role: "mage",
    metalanes:{
        top: true,
        jungle: false,
        mid: true,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a7/MalzaharSquare.png/revision/latest?cb=20170802052150"
},{
    name: "Lux",
    role: "mage",
    metalanes:{
        top: false,
        jungle: false,
        mid: true,
        adc: false,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/01/LuxSquare.png/revision/latest?cb=20170802043946"
},{
    name: "Talon",
    role: "assassin",
    metalanes:{
        top: true,
        jungle: false,
        mid: true,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f9/TalonSquare.png/revision/latest?cb=20170802145502"
},{
    name: "Teemo",
    role: "mage",
    metalanes:{
        top: true,
        jungle: false,
        mid: true,
        adc: false,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/04/TeemoSquare.png/revision/latest/scale-to-width-down/120?cb=20241009203450"
},{
    name: "Senna",
    role: "marksman",
    metalanes:{
        top: true ,
        jungle: false,
        mid: false,
        adc: true,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/21/SennaSquare.png/revision/latest?cb=20191102003549"
},{
    name: "Janna",
    role: "enchanter",
    metalanes:{
        top: false,
        jungle: false,
        mid: false,
        adc: true,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3f/JannaSquare.png/revision/latest?cb=20170802014752"
},{
    name: "Master Yi",
    role: "fighter",
    metalanes:{
        top: true,
        jungle: true,
        mid: false,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b2/Master_YiSquare.png/revision/latest?cb=20170802053355"
},{
    name: "Kayn",
    role: "fighter",
    metalanes:{
        top: false,
        jungle: true,
        mid: false,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/37/KaynSquare.png/revision/latest?cb=20170820224603"
},
//new
{
    name: "Garen",
    role: "tank",
    metalanes:{
        top: true,
        jungle: true,
        mid: false,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ea/GarenSquare.png/revision/latest?cb=20170801230538"
},{
    name: "Fiora",
    role: "fighter",
    metalanes:{
        top: true,
        jungle: false,
        mid: false,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d2/FioraSquare.png/revision/latest?cb=20170801220007"
},{
    name: "Dr. Mundo",
    role: "tank",
    metalanes:{
        top: true,
        jungle: false,
        mid: false,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/35/Dr._MundoSquare.png/revision/latest?cb=20210609045116"
},{
    name: "Galio",
    role: "tank",
    metalanes:{
        top: true,
        jungle: true,
        mid: true,
        adc: false,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/40/GalioSquare.png/revision/latest?cb=20170801225016"
},{
    name: "Braum",
    role: "tank",
    metalanes:{
        top: false,
        jungle: false,
        mid: false,
        adc: false,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b6/BraumSquare.png/revision/latest?cb=20170728193017"
},{
    name: "Brand",
    role: "mage",
    metalanes:{
        top: true,
        jungle: false,
        mid: true,
        adc: false,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ab/BrandSquare.png/revision/latest?cb=20170728192827"
},{
    name: "Jinx",
    role: "marksman",
    metalanes:{
        top: false,
        jungle: false,
        mid: false,
        adc: true,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e2/JinxSquare.png/revision/latest?cb=20170802020615"
},{
    name: "Vi",
    role: "fighter",
    metalanes:{
        top: true,
        jungle: true,
        mid: false,
        adc: false,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c0/ViSquare.png/revision/latest?cb=20170802171309"
},{
    name: "Karma",
    role: "enchanter",
    metalanes:{
        top: true,
        jungle: false,
        mid: true,
        adc: false,
        support: true,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4f/KarmaSquare.png/revision/latest?cb=20170802024408"
},{
    name: "Kai'sa",
    role: "marksman",
    metalanes:{
        top: true,
        jungle: false,
        mid: true,
        adc: true,
        support: false,
    },
    timesPlayed: 0,
    image:"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/49/Kai%27SaSquare.png/revision/latest?cb=20180222044444"
}]

//making sure other modules can use this array
export {champList}