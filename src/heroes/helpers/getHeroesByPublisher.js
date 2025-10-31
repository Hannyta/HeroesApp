import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (Array.isArray(publisher)) {
        return heroes.filter(hero => publisher.includes(hero.publisher));
    }
    
    if ( !validPublishers.includes( publisher )) {
        throw new Error(`${ publisher } is not a valid publisher`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher);
} 