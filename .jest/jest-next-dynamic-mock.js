import preloadAll from 'jest-next-dynamic'

jest.isolateModules(() => {
  beforeAll(async () => {
    await preloadAll();
  });
});
