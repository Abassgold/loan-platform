import './typewriter.css'
interface TypewriterProps {
    text: string;
  }
  
const Typewriter = ({text}: TypewriterProps) => {
    return (
<div>
    <span className="mr-2">{text}</span>
    <span className="ping-dot">.</span>
    <span className="ping-dot">.</span>
    <span className="ping-dot">.</span>
</div>



    )
}

export default Typewriter