const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/K2HqJRY/hat.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/wyzH3wr/jackets.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/YP7r0p2/sneakers.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/QJ326wD/woman.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
      // eslint-disable-next-line
      size: 'large',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/42tzGFq/men.jpg',
      size: 'large',
      id: 5,
      // eslint-disable-next-line
      size: 'large',
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
