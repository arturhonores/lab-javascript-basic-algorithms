// Iteration 1: Names and Input

const hacker1 = prompt("The driver's name is...")
console.log(`The driver's name is ${hacker1}`)
const hacker2 = prompt("The navigator's name is...")
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals



if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1
const driverCapital = hacker1.toUpperCase();
let addName = " "

for (let i = 0; i < driverCapital.length; i++) {
    addName += driverCapital[i] + " "
}
console.log(addName)


//3.2
let newName = " "
for (let i = hacker2.length - 1; i >= 0; i--) {
    newName += hacker2[i];
}
console.log(newName)

//3.3

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What ? !You both have the same name ?")
}


//BONUS

const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga excepturi atque quod sapiente, nulla nemo quos mollitia, expedita asperiores repudiandae quam ipsam sunt ab natus laboriosam corporis architecto! Perspiciatis rem, incidunt at non quae vero ea ex impedit iusto eius nisi, voluptatem cupiditate voluptates dicta nulla velit maiores. Dolore obcaecati perferendis soluta! Blanditiis inventore voluptatibus architecto impedit optio repellendus, ratione nemo alias, unde quae ducimus! Reiciendis voluptate, eveniet suscipit possimus autem, ut voluptatibus illo assumenda velit molestias tempore doloremque itaque! Natus expedita nesciunt veritatis, quos magnam, neque alias velit obcaecati voluptates fugit modi voluptate. Odit, cumque quia quam asperiores autem recusandae itaque a fugiat dolore debitis consequatur exercitationem vel id modi eum architecto, qui praesentium optio nisi? Iste, eos dolor consequuntur dignissimos nemo itaque rem atque quaerat mollitia ipsam voluptatibus unde commodi eveniet libero, sit in odit exercitationem sapiente inventore numquam accusamus temporibus, doloribus non? Deserunt odio molestias dolorum libero. Consectetur doloremque quaerat quas nam vitae tenetur aliquid sed, laudantium est laborum qui accusamus assumenda consequatur minus harum commodi ex quos aspernatur tempore! Cumque harum sapiente necessitatibus deleniti voluptas neque explicabo similique iusto beatae, illo atque minima ab debitis doloremque aspernatur, voluptatem delectus a ratione aut consectetur quia. Asperiores tenetur aliquid tempore, officia, repudiandae esse ipsum excepturi eveniet quos odio porro expedita voluptates accusantium et saepe dolorem sed nulla eaque voluptate, fugit aut sunt! Consequatur, eum adipisci doloremque qui dolor tenetur natus dolores ad necessitatibus quibusdam porro id itaque exercitationem quia ratione eligendi saepe officia ullam accusantium esse laudantium temporibus. Voluptatem et, suscipit, dolorem autem neque fugiat, tempore vero nostrum iure voluptatibus illo! Veniam saepe ullam voluptatum placeat praesentium aspernatur sint cumque officiis voluptates corrupti eius doloribus non officia asperiores unde facilis nisi minima cum quia, nulla soluta molestiae pariatur quae! Placeat dolore hic ullam blanditiis, quo vel at!"

const words = longText.split(" ")
const wordsAmount = words.length
console.log(`La cantidad de palabras del párrafo es ${wordsAmount}`)

let count = 0;

for (let i = 0; i <= longText.length; i++) {
    const threeChars = longText[i] + longText[i + 1] + longText[i + 2];

    if (threeChars === " et") {
        count++;
    }
}

console.log(count)
