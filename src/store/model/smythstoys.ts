import {Store} from './store';

export const SmythsToys: Store = {
  currency: '£',
  labels: {
    captcha: {
      container: '#main-iframe',
      text: [''],
    },
    inStock: {
      container: '.AddToCart-AddToCartAction #addToCartButton',
      text: [''],
    },
    maxPrice: {
      container: '.price_tag',
      euroFormat: false,
    },
    outOfStock: {
      container: '.AddToCart-AddToCartAction #addToCartButton[disabled="disabled"]',
      text: [''],
    },
  },
  links: [
    {
      
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.smythstoys.com/uk/en-gb/p/191951',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.smythstoys.com/uk/en-gb/p/197072',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.smythstoys.com/uk/en-gb/p/191259',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.smythstoys.com/uk/en-gb/p/191430',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.smythstoys.com/uk/en-gb/p/192012',
    }
  ],
  name: 'smythstoys',
};
