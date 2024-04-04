import TicketNum from "./TicketNum"
export default function Ticket({ticket}) { //ticket is an array by default 
    return (
        <div>
          { ticket.map((num, idx) => (
            <TicketNum num= {num} key={idx}/>
          ))}
        </div>
    )


}