const faker = require('faker');

module.exports = () => {
  return {
    context: {
      image: 'http://fakeimg.pl/900x558/',
      heading: faker.lorem.words(5),
      body: faker.lorem.paragraph(),
      cta: {
        url: '#',
        text: faker.lorem.words(2),
        buttonModifiers: ['underlined'],
        contextClass: 'm-card__cta',
      },
    },
    variants: [
      {
        name: 'centred',
        context: {
          modifiers: ['centred'],
          heading: faker.lorem.words(5),
          body: faker.lorem.paragraph()
        },
      }
    ],
  };
};
