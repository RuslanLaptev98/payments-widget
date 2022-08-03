import getMmYyyyDate from '../getMmYyyyDate';

describe('getMmYyyyDate', () => {
  it('formats Date object to mm/yyyy string', () => {
    const date = new Date('2025-03');

    expect(getMmYyyyDate(date)).toEqual('03/2025');
  });
});
