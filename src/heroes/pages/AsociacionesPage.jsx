import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from '../components/HeroCard';

export const AsociacionesPage = () => {
  const publishers = ['Marvel Comics', 'DC Comics'];
  const heroes = publishers.flatMap(pub => getHeroesByPublisher(pub));

  return (
    <>
      <h1 className="animate__animated animate__fadeIn">Asociaciones</h1>
      <hr />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
    </>
  );
};