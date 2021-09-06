class MockedService {
  getCardsInformation() {
    const mockedData = [
      {
        title: "Petra",
        image:
          "https://cdn.holidayguru.es/wp-content/uploads/2020/04/Petra-Jordanien_188863790_900x600-1-707x471.jpg",
      },
      {
        title: "Taj Mahal",
        image:
          "https://cdn.holidayguru.es/wp-content/uploads/2018/11/Taj_mahal_sunrise_Palast_india_shutterstock_180918317-707x471.jpg",
      },
      {
        title: "Machu Picchu",
        image:
          "https://cdn.holidayguru.es/wp-content/uploads/2019/01/Machu-Picchu-shutterstock_389136313-707x470.jpg",
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockedData);
      }, 250);
    });
  }
}

const instanceService = new MockedService();
export default instanceService;
