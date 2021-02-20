import { Store } from './store';

export const SimplyGames: Store = {
    currency: '£',
    labels: {
        inStock: {
            container: 'span.in_stock',
            text: ['In Stock'],
        },
        outOfStock: {
            container: 'span.pre_order, span.out_of_stock',
            text: ['Pre-Order', 'Out Of Stock']
        }
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.simplygames.com/p/yakuza-like-a-dragon-xbox-one',
        },
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://www.simplygames.com/p/ps5-console-ps4',
        },
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://www.simplygames.com/p/xbox-series-x-console-xbox-one'
        }
    ],
    name: 'simplygames',
};
