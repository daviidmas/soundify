import FullScreenIcon from "./icons/fullScreenIcon"
import NextIcon from "./icons/nextIcon"
import PlayIcon from "./icons/playIcon"
import PrevIcon from "./icons/prevIcon"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"

const Player = () => {
    return(
        <section className="p-8 bg-secondary absolute bottom-0 min-w-full flex justify-between">
            <div className="flex gap-3">
                <div className="w-14 h-14 bg-white"></div>
                <div className="flex flex-col ">
                    <h1>Cancion</h1>
                    <h2>Autor</h2>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-center"> 
                <div className="flex gap-3">
                    <Button variant="outline" size="icon">
                        <PrevIcon></PrevIcon>
                    </Button>
                    <Button variant="outline" size="icon">
                        <PlayIcon></PlayIcon>
                    </Button>
                    <Button variant="outline" size="icon">
                        <NextIcon></NextIcon>
                    </Button>
                </div>
                <Progress value={100} className="w-56" ></Progress>
            </div>
            <div className="flex-none">
                <Button variant="outline" size="icon">
                    <FullScreenIcon></FullScreenIcon>
                </Button>
            </div>
        </section>
    )
}

export default Player