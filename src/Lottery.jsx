import {useState} from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3, winCondition}) {//n and winningSum two props here we also pass default val
    let [ticket, setTicket] = useState(genTicket(n)); //state var 
    let isWinning = winCondition(ticket);

    let buyTicket = () => { //buyTicket ek fun h orr usme var ke tarah hamne ek val assign ki hui h
        setTicket(genTicket(n))
};

return ( //ticket props ko ticket state pass 
        <div> 
            <h1 className="text-xl text-blue-800 font-bold ">Lottery Game !...</h1>
            <div>
                <Ticket ticket={ticket}/> 
                <Button action={buyTicket}/>
            </div>
            <h1 className="text-blue-800 font-bold mt-6 text-lg">{isWinning && "Congratulation..you are won ..... "}</h1>
        </div>
    )
}
//buynew ticket genrate hone ka matlab h state rerender kho rhi h 
//react me jitna part code ka change hoga kebal bahi bas hissa rerender hota h
//jabki js me chhota sa part change hone per bhi pura dom rerender hota h bhai mere 
