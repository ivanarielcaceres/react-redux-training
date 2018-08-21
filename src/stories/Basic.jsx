import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
/* eslint-enable */
import Basic from 'components/Basic/Basic';
import Search from 'components/Search/Search';

const items = [
  { id: 0, name: 'Item 1' },
  { id: 1, name: 'Item 2' },
  { id: 2, name: 'Item 3' }
];

storiesOf('Basic', module)
  .addDecorator(withKnobs)
  .add('Basic with no items', () => (
    <Basic
      addItem={action('click to addItem')}
      removeItem={action('Click to remove item')}
      removeAllItems={action('Click to remove all items')}
    />
  ))
  .add('Basic with one item', () => (
    <Basic
      items={items}
      addItem={action('click to addItem')}
      removeItem={action('Click to remove item')}
      removeAllItems={action('Click to remove all items')}
    />
  ))
  .add('No search perform', () => (
    <Search doSearch={action('click to perform Search')} />
  ));
