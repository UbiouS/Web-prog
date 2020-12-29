function openChat() {
    document.getElementById("chatView").style.visibility = "visible";
}

function closeChat() {
    document.getElementById("chatView").style.visibility = "hidden";
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nouns = ["Frog", "Yogurt", "Пасхалка", "Rick Roll", "Google", "Point", "leg", "A smooth criminal"];
const verbs = ["was eaten", " has found", "was scared", "has been destroyed", "have been struck by a", "was threatened", "was ignored by"];
const adjectives = ["Crazy", "Dumb", "Happy", "Murderous", "Dangerous", "Outrageous", "Shattering"];

class Calculator {

    static sortLambda = (a, b) => {
         if (a.priority < b.priority) {
            return -1;
        }
        if (a.priority > b.prioritys) {
            return 1;
        }
        return 0;
        };
    static actions = ["*", "/", "+", "-", "^", "log", "log10", "sqrt()"]
    static actionTypes = [
        {
            symbol: '*',
            action:  (a,b) => a*b,
            priority: 1,
        },
        {
            symbol: '/',
            action:  (a,b) => a/b,
            priority: 1,
        },
        {
            symbol: '+',
            action:  (a,b) => a+b,
            priority: 0,
        },
        {
            symbol: '-',
            action:  (a,b) => a-b,
            priority: 0,
        },
    ]

    static addOperation(symbol, action, priority) {
        this.actions.push(symbol);
        this.actionTypes.push({symbol,action,priority});
        this.actionTypes.sort(this.sortLambda);
    }

    static resolve(string){
        const isEquation = this.actions.some((item)=>string.includes(item));

        if(!isEquation){
        return console.log('not equation')
       }

       let resultString = string;
       let indexOfSymbol = -1;

       this.actionTypes.forEach(element => {
            do{
                indexOfSymbol = string.indexOf(element.symbol);
                if(indexOfSymbol !== -1){
                    let regexp = /\d+\D+/g;
                    regexp.lastIndex = indexOfSymbol;
                    const firstNumIndex = string.substring(0,indexOfSymbol).search(/\d+$/g);
                    const secondNumIndex = string.search(regexp);
                    console.log(element);
                    console.log('element',indexOfSymbol,'first',firstNumIndex,'second',secondNumIndex);
                    const [firstNum] = string.substring(0,indexOfSymbol).match(/\d+$/g);
                    const [secondNum] = string.match(regexp);
                    const result = element.action(firstNum,secondNum);
                
                    const secondNumEndRegexp = /[\D+,$]+/g;
                    secondNumEndRegexp.lastIndex = secondNumIndex;
                    const secondNumEnd = string.search(secondNumEndRegexp);
                    resultString = string.substring(0,firstNumIndex) + result + string.substring(secondNumEnd);
                    console.log('resultstring',resultString);
                }

            } while(indexOfSymbol !==  -1)
       });
       console.log('result',resultString);
       return resultString;
    }

   
}
function answer(expression = null) {
    let date = new Date();

    let x = Math.round(getRandomIntInclusive(0, 6));
    let y = Math.round(getRandomIntInclusive(0, 6));
    let z = Math.round(getRandomIntInclusive(0, 6));
    let reply = null;

    if (expression === null) {
        reply = adjectives[x] + " " + nouns[y] + " " + verbs[z];
    } else {
        Calculator.resolve(reply);
    }

    let tag = document.createElement("div");
    let closeButton = document.createElement("button");
    let a = document.createElement("a");
    let text = document.createTextNode(reply);
    a.appendChild(text);

    let timeTag = document.createElement("a");
    let time = document.createTextNode(((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()));
    timeTag.appendChild(time);

    closeButton.textContent = "✕";

    tag.style.width = "40%";
    tag.style.height = "auto";
    tag.style.backgroundColor = "#e83b24bb";
    tag.style.color = "#ffffff";
    tag.style.borderRadius = "20px";
    tag.style.padding = "2%";
    tag.style.display = "flex";
    tag.style.border = "solid 2px #e83b24aa";
    tag.style.justifyContent = "space-between";
    tag.style.flexDirection = "column";

    closeButton.style.alignSelf = "flex-end";
    closeButton.style.width = "15px";
    closeButton.style.height = "15px";
    closeButton.style.display = "flex";
    closeButton.style.alignItems = "center";
    closeButton.style.justifyContent = "center";
    closeButton.style.fontSize = "7.5px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#e83b24";
    closeButton.style.borderRadius = "7.5px";
    closeButton.style.color = "#FDF3F2"

    a.style.fontFamily = "Verdana";
    a.style.fontSize = "10px";

    timeTag.style.fontFamily = "Verdana";
    timeTag.style.fontSize = "8px";
    timeTag.style.alignSelf = "flex-end";

    closeButton.onclick = () => {
        document.getElementById("chatWindow").removeChild(tag)
    };

    tag.appendChild(closeButton);
    tag.appendChild(a);
    tag.appendChild(timeTag);

    let element = document.getElementById("chatWindow");
    element.appendChild(tag);
    element.scrollTop = element.scrollHeight;
}


function sendMessage() {
    let date = new Date();
    let message = document.getElementById("inputLine").value;
    if (message === "") {
        return;
    }
    document.getElementById("inputLine").value = "";

    let tag = document.createElement("div");
    let closeButton = document.createElement("button");
    let a = document.createElement("a");
    let text = document.createTextNode(message);
    a.appendChild(text);

    let timeTag = document.createElement("a");
    let time = document.createTextNode(((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()));
    timeTag.appendChild(time);

    closeButton.textContent = "✕";

    tag.style.width = "40%";
    tag.style.height = "auto";
    tag.style.backgroundColor = "#e83b2455";
    tag.style.color = "#ffffff";
    tag.style.borderRadius = "20px";
    tag.style.padding = "2%";
    tag.style.display = "flex";
    tag.style.alignSelf = "flex-end";
    tag.style.border = "solid 2px #e83b2499";
    tag.style.flexDirection = "column";

    closeButton.style.alignSelf = "flex-end";
    closeButton.style.width = "15px";
    closeButton.style.height = "15px";
    closeButton.style.display = "flex";
    closeButton.style.alignItems = "center";
    closeButton.style.justifyContent = "center";
    closeButton.style.fontSize = "8px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#e83b24";
    closeButton.style.borderRadius = "7.5px";
    closeButton.style.color = "#FDF3F2"

    a.style.fontFamily = "Verdana";
    a.style.fontSize = "10px";

    timeTag.style.fontFamily = "Verdana";
    timeTag.style.fontSize = "8px";
    timeTag.style.alignSelf = "flex-end";

    closeButton.onclick = () => {
        document.getElementById("chatWindow").removeChild(tag)
    };

    tag.appendChild(closeButton);
    tag.appendChild(a);
    tag.appendChild(timeTag);
    let element = document.getElementById("chatWindow");
    element.appendChild(tag);
    if (message.includes(Calculator.actions)) {
        console.log('resolved',Calculator.resolve(message));
        setTimeout(answer(expression = message.replace(/= /gi, "")), 1000);
        element.scrollTop = element.scrollHeight;
        return;
    }
    setTimeout(answer, 1000);
    element.scrollTop = element.scrollHeight;
}

let input = document.getElementById("inputLine");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendMessage();
    }
});