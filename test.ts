#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

function displayWelcomeMessage() {
    return new Promise((resolve) => {
        const welcome = chalkAnimation.rainbow('\n<<<===>>> WELCOME ~ TO ~ AN ~ ADVENTURE ~ GAME <<<===>>>\n');
        setTimeout(() => {
            welcome.stop();
            resolve("");
        }, 2000);
    });
}

class player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name

    }
    decreaceFuel() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    increaseFuel() {
        this.fuel = 100

    }
}
class opponent {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name

    }
    decreaceFuel() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    increaseFuel() {
        this.fuel = 100
    }
}
async function startGame() {
    await displayWelcomeMessage()

    let userName = await inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: chalk.blue('enter your name:')
    }])

    let selectOponent = await inquirer.prompt([{
        name: 'enemy',
        type: 'list',
        message: chalk.redBright('select your oponent:'),
        choices: ['Skeleton', 'Zombie', 'Piarat', 'Robot']
    }])
    let p = new player(userName.name)
    let o = new opponent(selectOponent.enemy)
    do {
        if (selectOponent.enemy === 'Skeleton') {
            let ask = await inquirer.prompt([{
                name: 'do',
                type: 'list',
                message: chalk.cyan('what do you want to do?'),
                choices: ['Attack', 'heal', 'run for your life']
            }])
            if (ask.do === 'Attack') {
                let randomAttack = Math.floor(Math.random() * 2)
                if (randomAttack > 0) {
                    p.decreaceFuel()
                    console.log(chalk.red(`\nOOPS!! you got attacked, now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`the opponent fuel is ${o.fuel}\n`))
                }
                else {
                    o.decreaceFuel()
                    console.log(chalk.green(`\nwell-done , you attacked well.Now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`And opponent fuel is ${o.fuel}\n`))
                }
                if (p.fuel === 0) {
                    console.log(chalk.red('\nyou lose!! better luck next time'))
                    process.exit()
                }
                else if (o.fuel === 0) {
                    console.log(chalk.green(`\nCONGRATULATIONS!!! ${p.name} you won`))
                    process.exit()
                }
            }
            else if (ask.do === 'heal') {
                p.increaseFuel()
                console.log(chalk.green(`\nYou healed your fuel , now your fuel is ${p.fuel} `))
            }
            else {
                console.log(chalk.red(`\nwe are sorry${p.name} you lost the game!! better luck next time`))
                process.exit()
            }
        }
        else if (selectOponent.enemy === 'Zombie') {
            let ask = await inquirer.prompt([{
                name: 'do',
                type: 'list',
                message: chalk.cyan('what do you want to do?'),
                choices: ['Attack', 'heal', 'run for your life']
            }])
            if (ask.do === 'Attack') {
                let randomAttack = Math.floor(Math.random() * 2)
                if (randomAttack > 0) {
                    p.decreaceFuel()
                    console.log(chalk.red(`\nOOPS!! you got attacked, now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`the opponent fuel is ${o.fuel}\n`))
                }
                else {
                    o.decreaceFuel()
                    console.log(chalk.green(`\nwell-done , you attacked well.Now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`And opponent fuel is ${o.fuel}\n`))
                }
                if (p.fuel === 0) {
                    console.log(chalk.red('\nyou lose!! better luck next time'))
                    process.exit()
                }
                else if (o.fuel === 0) {
                    console.log(chalk.green(`\nCONGRATULATIONS!!! ${p.name} you won`))
                    process.exit()
                }
            }
            else if (ask.do === 'heal') {
                p.increaseFuel()
                console.log(chalk.green(`\nYou healed your fuel , now your fuel is ${p.fuel} `))
            }
            else {
                console.log(chalk.red(`\nwe are sorry${p.name} you lost the game!! better luck next time`))
                process.exit()
            }
        }
        else if (selectOponent.enemy === 'Piarat') {
            let ask = await inquirer.prompt([{
                name: 'do',
                type: 'list',
                message: chalk.cyan('what do you want to do?'),
                choices: ['Attack', 'heal', 'run for your life']
            }])
            if (ask.do === 'Attack') {
                let randomAttack = Math.floor(Math.random() * 2)
                if (randomAttack > 0) {
                    p.decreaceFuel()
                    console.log(chalk.red(`\nOOPS!! you got attacked, now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`the opponent fuel is ${o.fuel}\n`))
                }
                else {
                    o.decreaceFuel()
                    console.log(chalk.green(`\nwell-done , you attacked well.Now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`And opponent fuel is ${o.fuel}\n`))
                }
                if (p.fuel === 0) {
                    console.log(chalk.red('\nyou lose!! better luck next time'))
                    process.exit()
                }
                else if (o.fuel === 0) {
                    console.log(chalk.green(`\nCONGRATULATIONS!!! ${p.name} you won`))
                    process.exit()
                }
            }
            else if (ask.do === 'heal') {
                p.increaseFuel()
                console.log(chalk.green(`\nYou healed your fuel , now your fuel is ${p.fuel} `))
            }
            else {
                console.log(chalk.red(`\nwe are sorry${p.name} you lost the game!! better luck next time`))
                process.exit()
            }
        }
        else {
            let ask = await inquirer.prompt([{
                name: 'do',
                type: 'list',
                message: chalk.cyan('what do you want to do?'),
                choices: ['Attack', 'heal', 'run for your life']
            }])
            if (ask.do === 'Attack') {
                let randomAttack = Math.floor(Math.random() * 2)
                if (randomAttack > 0) {
                    p.decreaceFuel()
                    console.log(chalk.red(`\nOOPS!! you got attacked, now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`the opponent fuel is ${o.fuel}\n`))
                }
                else {
                    o.decreaceFuel()
                    console.log(chalk.green(`\nwell-done , you attacked well.Now your fuel is ${p.fuel}`))
                    console.log(chalk.yellow(`And opponent fuel is ${o.fuel}\n`))
                }
                if (p.fuel === 0) {
                    console.log(chalk.red('\nyou lose!! better luck next time'))
                    process.exit()
                }
                else if (o.fuel === 0) {
                    console.log(chalk.green(`\nCONGRATULATIONS!!! ${p.name} you won`))
                    process.exit()
                }
            }
            else if (ask.do === 'heal') {
                p.increaseFuel()
                console.log(chalk.green(`\nYou healed your fuel , now your fuel is ${p.fuel} `))
            }
            else {
                console.log(chalk.red(`\nwe are sorry${p.name} you lost the game!! better luck next time`))
                process.exit()
            }
        }
       

    } while (true)
        
}

startGame()
