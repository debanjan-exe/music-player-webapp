import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Caravan",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist: "goosetaf, The Field Tapes, Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20122",
            color: ["#C7AADA","#E6BDB3"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "What If I Told You",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
            artist: "Juan Rios",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
            color: ["#3B1C3C","#FFE4B7"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Dreamstate",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
            artist: "Toonorth",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17947",
            color: ["#9FA0FC","#384C69"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Travelbag",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
            artist: "mommy, Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=19058",
            color: ["#5C8DCF","#393722"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Toddle",
            cover: "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/60bdce340c4f5aea948e0b55_chillcards-p-500.png",
            artist: "oddfish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16185",
            color: ["#D74B4A","#157873"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Perspective",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
            artist: "fantompower",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22794",
            color: ["#724176","#C8DBE1"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Wish",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            artist: "SwuM",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15230",
            color: ["#D4A87F","#764635"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Cascade",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13092",
            color: ["#82D3A9","#EDA04E"],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default chillHop