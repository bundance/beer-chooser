import * as sagas from './search.sagas';

describe('beer sagas tests', () => {
    let mockBeerResponse;
    let mockState;
    
    describe('filterBeer()', () => {
        beforeEach(() => {
            mockBeerResponse = [{
                "id": 10,
                "name": "Bramling X",
                "ingredients": {
                    "malt": [{ "name": "Extra Pale" }],
                    "hops": [{ "name": "Bramling Cross" }],
                    "yeast": "Wyeast 1056 - American Ale™"
                },
                "food_pairing": [
                    "Warm blackberry pie",
                    "Vinegar doused fish and chips",
                    "Aromatic korma curry with lemon and garlic naan"
                ]
            }, {
                "id": 50, 
                "name": "Lost Dog (w/Lost Abbey)",
                "ingredients": {
                    "malt": [{ "name": "Extra Pale" }],
                    "hops": [{ "name": "First Gold" }],
                    "yeast": "Wyeast 1272 - American Ale II™"
                },
                "food_pairing": [
                    "Beef satay skewers",
                    "Venison & cranberry pie",
                    "Blackberry mocha gateaux"]
            }];
        });

        it('should return the first 2 prices', () => {
            
        });
    });
});
