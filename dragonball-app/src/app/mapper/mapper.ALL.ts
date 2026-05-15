import { Character } from "../interfaces/characters.interface"
import { personaje } from "../interfaces/personajes"
import { planeta } from "../interfaces/planetas"
import { planet } from "../interfaces/planets.interface"

// id:          number;
// name:        string;
// ki:          string;
// maxKi:       string;
// race:        string;
// gender:      Gender;
// description: string;
// image:       string;
// affiliation: Affiliation;
// deletedAt:   null;
export class PersonajeMapper{
    static CharacterToPersonaje(item: Character):personaje{
        return{
            id:item.id,
            name:item.name,
            ki:item.ki,
            maxKi:item.maxKi,
            race:item.race,
            gender:item.gender,
            description:item.description,
            image:item.image,
            affiliation:item.affiliation,

        }
    }
    static CharactersToPersonajes(items:Character[]):personaje[]{
        return items.map(this.CharacterToPersonaje)
    }
}
    // id:          number;
    // name:        string;
    // isDestroyed: boolean;
    // description: string;
    // image:       string;
    // deletedAt:   null;
export class PlanetaMapper{
    static PlanetToPlaneta(item: planet):planeta{
        return{
            id:item.id,
            name:item.name,
            isDestroyed:item.isDestroyed,
            description:item.description,
            image:item.image,

        }
    }
    static PlanetsToPlanetas(items:planet[]):planeta[]{
        return items.map(this.PlanetToPlaneta)
    }
}