import {Store} from './store';

export const JohnLewis: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: 'button[data-test="add to basket"]',
      text: ['Add to your basket'],
    },
    outOfStock: {
      container: 'p.out-of-stock_outOfStock__29pcm',
      text: ['Out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.johnlewis.com/search?search-term=5192093',
      cartUrl:
        'https://www.johnlewis.com/sony-playstation-5-dualsense-wireless-controller-white/p5192093',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.johnlewis.com/search?search-term=5115192',
      cartUrl:
        'https://www.johnlewis.com/sony-playstation-5-console-with-dualsense-controller/white/p5115192',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.johnlewis.com/search?search-term=5151987',
      cartUrl: 'https://www.johnlewis.com/microsoft-xbox-series-x-console-1tb-with-wireless-controller-black/p5151987',
    }
  ],
  name: 'johnlewis',
};
