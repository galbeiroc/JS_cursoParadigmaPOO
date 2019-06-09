;
((c)=>{
    c('*****Patron Obsevador*****')

    class Click {
        constructor () {
            this.handlers = []
        }
        subscribe (fn) {
            this.handlers.push(fn)
       
        }
        unsubscribe (fn) {
            this.handlers = this.handlers.filter( item => ( item !== fn) ? item : false )
        }

        fire (msg) {
            this.handlers.forEach( element => element(msg) )
        }
    }

    
    class Log {
        constructor () {
            this.log= ''
        }
        add (msg) {
            this.log += `${msg}\n`;
        }
        show () {
            c(this.log)
            this.log = ''
        }
    }

    const clic = new Click(),
        clicHandlers = item => log.add(`Dispara: ${item}`),
        log = new Log()
    clic.subscribe(clicHandlers)
    clic.fire('Seguidor 1')
    clic.unsubscribe(clicHandlers)
    clic.fire('Seguidor 2')
    clic.subscribe(clicHandlers)
    clic.fire('Seguidor 3')
    log.show()
})(console.log);

((c)=>{
    //Pub
    class Player {
        constructor () {
            this.players = []
        }
        add (observer) {
            this.players.push(observer)
        }
        notify (obj) {
            this.players.forEach( play => play(obj))
        }
   }
   //Sub
   class Figth {
        constructor (fighter1, fighter2) {
            this.player = new Player()
            this.fighter1 = fighter1
            this.fighter2 = fighter2
            this.round = 1
        }
        readyGo() {
            let match = {}

            if (Math.floor( (Math.random() * 2) + 1 ) ===1) {
                match = {
                    winner: this.fighter1,
                    losser: this.fighter2
                }
            }else {
                match = {
                    winner: this.fighter2,
                    losser: this.fighter1
                }
            }
            match.round = this.round
            this.round++

            this.player.notify(match)
        }
   }
   const mortal = new Figth('Ryder', 'Scorpion')
   mortal.player.add(item => console.log(`Ronda: ${item.round} \n Ganador: ${item.winner} :) \n Losser: ${item.losser} :(`))
   mortal.readyGo()
   mortal.readyGo()
   mortal.readyGo()
})(console.log)