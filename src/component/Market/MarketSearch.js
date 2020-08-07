import React from 'react';
import PropTypes from 'prop-types';
// import TabSearch from '../TabSearch';
// import MarketTabs from './MarketTabs';

const MarketTabs = {};

const MarketSearch = (props) => {
  const { search } = props;
  console.log(props);
  return (
    <>
      <div>
        {search.map((s) => (
          <MarketTabs key={s.id} tab={s.tab} />
        ))}
      </div>
    </>
  );
};

export default MarketSearch;
MarketSearch.defaultProps = {
  search: [],
};

MarketSearch.propTypes = {
  search: PropTypes.arrayOf(PropTypes.shape({})),
};
