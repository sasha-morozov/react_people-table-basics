import React, { useEffect, useState } from 'react';
import { getPeople } from '../../api'

import './PeoplePage.scss';


export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[] | null>(null);

  useEffect(() => {
    (async () => {
      const peopleFromApi = await getPeople();
      
      setPeople(peopleFromApi);
    })();
  },[])

  return (
    <div>
      <h1 className="text-center py-2"> People Page </h1>
      <ul className="peopleList">
        {people?.map(person => (
          <li
            key={person.slug}
            className="peopleList__item"
          >
            <p><span className="text-muted">Name: </span>{person.name}</p>
            <p><span className="text-muted">Sex: </span>{person.sex}</p>
            <p><span className="text-muted">Year of birth: </span>{person.born}</p>
            <p><span className="text-muted">Year of death: </span>{person.died}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}