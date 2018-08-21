import { connect } from 'react-redux';
import Basic from 'components/Basic/Basic';
import {
  addItem,
  removeItem,
  removeAllItems,
  doSearch,
  fetchItems
} from 'actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
    removeItem: id => dispatch(removeItem(id)),
    removeAllItems: () => dispatch(removeAllItems()),
    doSearch: keyword => dispatch(doSearch(keyword)),
    fetchItems: () => dispatch(fetchItems())
  };
};

const BasicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basic);

export default BasicContainer;
