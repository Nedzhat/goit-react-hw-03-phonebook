import PropTypes from 'prop-types';

import { Box } from 'components/Box';

export const Filter = ({text, onChange}) => {
    return <Box display="flex" flexDirection="column" alignItems="center"><p>{text}</p>
      <input type="text" name="find" onChange={onChange}/></Box>
}

Filter.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}