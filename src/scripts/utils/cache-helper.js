import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(request) {
    const cache = await this._openCaches();
    cache.addAll(request);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  // eslint-disable-next-line no-empty-function
  async revelidateCaches(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }

    return this._fetchRequest(request);
  },

  async _openCaches() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCaches(request);
    return response;
  },

  async _addCaches(request) {
    const cache = await this._openCaches();
    cache.add(request);
  },
};

export default CacheHelper;
