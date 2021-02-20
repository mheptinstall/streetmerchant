import {Store} from './store';

export const AO: Store = {
    currency: '£',
    labels: {
        inStock: {
            container: 'a.addToBasket',
            text: ['Add to basket']
        },
        maxPrice: {
            container: 'span[itemprop="price"]',
            euroFormat: false
        },
        outOfStock: {
            container: 'h3.back-in-stock__heading',
            text: ['Back in stock soon']
        }
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://ao.com/product/p5readsny83592-sony-playstation-game-white-79588-293.aspx'
        },
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://ao.com/product/p5hehwsny39500-sony-playstation-playstation-5-console-white-79528-291.aspx'
        },
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://ao.com/product/rrt00007aokts1-xbox-series-x-console-black-79623-291.aspx'
        },
    ],
    name: 'ao',
    waitUntil: 'domcontentloaded'
};