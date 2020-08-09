import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.components';
import CollectionOveriew from './collection-overview.components';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOveriewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOveriew);
export default CollectionOveriewContainer;
