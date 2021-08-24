require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()
const Welcome = require("discord-welcome");

let opening;
let ending;


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


client.on("guildMemberAdd", (member) => {
    const channelID=`783075590911295509`
    const guild = member.guild;

    console.log(member);

    const channel = client.channels.cache.get(channelID)

    let num =  Math.floor((Math.random() * 6) + 1)

    switch(num)
    {
        case 1:
            opening = "All right, mavericks! Ready to see whose joinin' us today? ";
            break;
        case 2:
            opening = "All right, all right, all right. Let's see what we've got. ";
            break;
        case 3:
            opening = "Let's see what we've got. ";
            break;
        case 4:
            opening = "Enough foolin' around. ";
            break;
        case 5:
            opening = "Oooh! ";
            break;
        case 6:
            opening = "Ding, Ding, Ding, Ding, Ding! ";
            break;
    }

    let num2 =  Math.floor((Math.random() * 4) + 1)

    switch(num2)
    {
        case 1:
            ending=" on the horizon!";
            break;
        case 2:
            ending="! Bring a sword.";
            break;
        case 3:
            ending=" on the field!";
            break;
        case 4:
            ending=" approaching!";
            break;
    }

    let welcome = `${opening}${member.user}${ending}`;





    if(!channel)
    {
    console.log("error");
    }
    channel.send(welcome).catch(console.error);
  });

//   client.on("debug", function(info){
//     console.log(`debug -> ${info}`);
// });

client.login('NzgzNTM1NjI3NTMwMDEwNjI0.X8cKag.xk1-ZmzNr6WgXSD6Y-s9CaEJGjo')


