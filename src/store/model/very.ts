import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Very: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '.stockMessaging .indicator',
      text: ['available', 'low stock'],
    },
    maxPrice: {
      container: '.priceNow',
      euroFormat: false, // Note: Very uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.stockMessaging .indicator',
      text: ['pre-order', 'unavailable'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.very.co.uk/msi-geforce-gtx-1660-ti-gaming-x-6g-graphics-card/1600350984.prd',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.very.co.uk/playstation-5-mortal-kombat-11-ultimate/1600544541.prd',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.very.co.uk/playstation-5-call-of-duty-black-opsnbspcold-warnbsp/1600515317.prd',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
         url: 'https://www.very.co.uk/playstation-5-disc-console-with-optional-extras/1600568976.prd',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.very.co.uk/xbox-series-x-xbox-series-x-withnbspoptional-extras/1600503631.prd',
    }
  ],
  name: 'very',
};
