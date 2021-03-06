import { ROOT_ENDPOINT } from '../config/config';

export const fetchBeer = (food) => {
    const endpoint = ROOT_ENDPOINT + `beers?food=${food}`;

    return fetch(endpoint)
        .then(response => response.json());
};
