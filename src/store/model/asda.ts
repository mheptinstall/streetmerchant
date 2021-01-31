import { Store } from './store';

export const ASDA: Store = {
    currency: '£',
    labels: {
        captcha: {
            container: 'div.recaptcha-heading',
            text: ['Sorry to interrupt you, we need to check you a real person before you can continue shopping'],
        },
        inStock: {
            container: 'button.add-to-bag',
            text: ['Add to bag']
        },
        maxPrice: {
            container: '.price'
        },
        outOfStock: {
            container: 'div.out-of-stock',
            text: ['Out of Stock']
        }
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://direct.asda.com/george/toys-character/electronic-educational/vtech/vtech-first-steps-baby-walker-2018-pink/050475994,default,pd.html'
        },
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://direct.asda.com/george/toys-character/gaming/gaming-consoles/playstation5-console/050887006,default,pd.html'
        },
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://direct.asda.com/george/toys-character/gaming/gaming-consoles/xbox-series-x/050888482,default,pd.html'
        },
        {
            brand: 'microsoft',
            model: 'xbox series s',
            series: 'xboxss',
            url: 'https://direct.asda.com/george/toys-character/gaming/gaming-consoles/xbox-series-s/050888483,default,pd.html'
        }
    ],
    name: 'asda'
};