import {Store} from './store';

export const ShopTo: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#itemcard_right .orderbox_inventory',
      text: ['In Stock', 'Back Order'],
    },
    outOfStock: {
      container: '#itemcard_right .orderbox_inventory',
      text: ['Sold out']
    }
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.shopto.net/en/ps5de02-demon-souls-playstation-5-p195338/',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.shopto.net/en/ps5ac01-pulse-3d-wireless-headset-playstation-5-p195330/',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.shopto.net/en/ps5im07-immortals-fenyx-rising-gold-edition-p502367/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.shopto.net/en/ps5hw01-playstation-5-console-p191472/',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.shopto.net/en/ps5hw02-playstation-5-digital-console-p195341/',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.shopto.net/en/xbxhw01-xbox-series-x-p191471/'
    }
  ],
  name: 'shopto',
};
