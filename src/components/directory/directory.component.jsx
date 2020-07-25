import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/K2HqJRY/hat.jpg',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/wyzH3wr/jackets.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/YP7r0p2/sneakers.jpg',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/QJ326wD/woman.jpg',
          size: 'large',
          id: 4,
          linkUrl: '',
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
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProperties }) => (
          <MenuItem key={id} {...sectionProperties} />
        ))}
      </div>
    );
  }
}

export default Directory;
