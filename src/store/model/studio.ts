import { Store } from './store';

export const Studio: Store = {
    currency: '£',
    labels: {
        inStock: {
            container: 'div.egl_stock_message span',
            text: ['In Stock', 'Available to order'],
        },
        outOfStock: {
            container: 'div.egl_stock_message span',
            text: ['Too late! They\'re all gone']
        }
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.studio.co.uk/shop/xbox-one-x-1tb-console-p-24387851--1',
        },
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.studio.co.uk/shop/xbox-one%3A-mass-effect-legendary-edition-p-24814199',
        },
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://www.studio.co.uk/shop/ps5-console',
        },
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://www.studio.co.uk/shop/xbox-series-x-console',
        }
    ],
    name: 'studio',
};
