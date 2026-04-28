import { useUiStore } from "../store/useUiStore"
import Lobby from "../views/lobby/Lobby";
import Relation from "../views/relation/Relation";
import Title from "../views/title/Title";
import Training from "../views/training/Training";

export const RenderPage = () => {
    const { scene } = useUiStore();

    switch(scene){
        case "TITLE" : return <Title/>;
        case "LOBBY" : return <Lobby/>;
        case "RELATION" : return <Relation/>;
        case "TRAINING" : return <Training/>;
    }
}