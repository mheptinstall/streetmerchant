import {config, defaultStoreData} from '../../config';
import {AmazonUk} from './amazon-uk';
import {AmdUk} from './amd-uk';
import {AO} from './ao';
import {Argos} from './argos';
import {Aria} from './aria';
import {ASDA} from './asda';
import {Box} from './box';
import {Ccl} from './ccl';
import {CorsairUK} from './corsair-uk';
import {Currys} from './currys';
import {Ebuyer} from './ebuyer';
import {Game} from './game';
import {JohnLewis} from './johnlewis';
import {Overclockers} from './overclockers';
import {Scan} from './scan';
import {SimplyGames} from './simplygames';
import {ShopTo} from './shopto';
import {SmythsToys} from './smythstoys';
import {Store} from './store';
import {Very} from './very';
import {logger} from '../../logger';

export const storeList = new Map([
  [AmazonUk.name, AmazonUk],
  [AmdUk.name, AmdUk],
  [AO.name, AO],
  [Argos.name, Argos],
  [Aria.name, Aria],
  [ASDA.name, ASDA],
  [Box.name, Box],
  [Ccl.name, Ccl],
  [CorsairUK.name, CorsairUK],
  [Currys.name, Currys],
  [Ebuyer.name, Ebuyer],
  [Game.name, Game],
  [JohnLewis.name, JohnLewis],
  [Overclockers.name, Overclockers],
  [Scan.name, Scan],
  [SimplyGames.name, SimplyGames],
  [ShopTo.name, ShopTo],
  [SmythsToys.name, SmythsToys],
  [Very.name, Very],
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of storeList.values()) {
    for (const link of store.links) {
      brands.add(link.brand);
      series.add(link.series);
      models.add(link.model);
    }

    if (store.minPageSleep === undefined) {
      store.minPageSleep = defaultStoreData.minPageSleep;
    }

    if (store.maxPageSleep === undefined) {
      store.maxPageSleep = defaultStoreData.maxPageSleep;
    }
  }
}

function printConfig() {
  if (config.store.stores.length > 0) {
    logger.info(
      `ℹ selected stores: ${config.store.stores
        .map(store => store.name)
        .join(', ')}`
    );
  }

  if (config.store.showOnlyBrands.length > 0) {
    logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
  }

  if (config.store.showOnlyModels.length > 0) {
    logger.info(
      `ℹ selected models: ${config.store.showOnlyModels
        .map(entry => {
          return entry.series
            ? entry.name + ' (' + entry.series + ')'
            : entry.name;
        })
        .join(', ')}`
    );
  }

  if (config.store.showOnlySeries.length > 0) {
    logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
  }
}

function warnIfStoreDeprecated(store: Store) {
  switch (store.name) {
    case 'evga':
      logger.warn(
        `${store.name} is deprecated since they only support queuing`
      );
      break;
    default:
  }
}

export function updateStores() {
  stores.clear();

  for (const storeData of config.store.stores) {
    const store = storeList.get(storeData.name);

    if (store) {
      warnIfStoreDeprecated(store);
      stores.set(storeData.name, store);
      store.minPageSleep = storeData.minPageSleep;
      store.maxPageSleep = storeData.maxPageSleep;
      store.proxyList = storeData.proxyList;
    } else {
      logger.warn(`No store named ${storeData.name}, skipping.`);
    }
  }

  filterBrandsSeriesModels();
  printConfig();
}

updateStores();

export function getAllBrands() {
  return [...brands];
}

export function getAllSeries() {
  return [...series];
}

export function getAllModels() {
  return [...models];
}

export function getStores() {
  return stores;
}

export * from './store';
