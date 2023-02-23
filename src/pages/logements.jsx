import Carrousel from "../composents/Caroussel"
import data from "../data/logements.json"

function Logements({logementID}) {
    const logement = data.find((logement) => logement.id===logementID)
    return (<Carrousel Pictures={logement.pictures}></Carrousel>)
}

export default Logements