import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

const Sidebar = () => {
    return(
        <section className="flex flex-col gap-5 p-8 bg-secondary min-h-screen">
        <Link href="">Home</Link>
        <Link href="">Search</Link>
        <Link href="">Library</Link>
        <ModeToggle></ModeToggle>
    </section>
    )
}

export default Sidebar