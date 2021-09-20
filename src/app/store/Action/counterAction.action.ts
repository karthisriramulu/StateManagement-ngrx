

export class IncrementAction{

    type : string = 'increment'
    payload : number

    constructor(payload : number){
        this.payload = payload
    }
}

export class DecrementAction{

    type : string = 'decrement'
    payload : number

    constructor(payload : number){
        this.payload = payload
    }
}