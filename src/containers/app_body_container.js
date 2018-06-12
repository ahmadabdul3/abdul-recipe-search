import { connect } from 'react-redux';
import AppBody from 'components/app_body';
import { actions as appBodyActions } from 'redux/app_body';

export function mapStateToProps({ appBody }) {
  return {
    searchResults: appBody.searchResults,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    searchForRecipes: (searchTerm) => dispatch(appBodyActions.searchForRecipes(searchTerm)),
  };
}

const AppBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBody);

export default AppBodyContainer;
