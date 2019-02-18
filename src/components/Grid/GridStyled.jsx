import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridStyled = styled.div`
	display: flex;
	flex-flow: row wrap;

	> * {
		flex: 0 0 calc((100% / 12) * ${props => props.size});

		@media screen and (max-width: 768px) {
			flex: 0 0 ${props => props.sizeTablet};
		}

		@media screen and (max-width: 480px) {
			flex: 0 0 100%;
		}
	}
`;

GridStyled.propTypes = {
	size: PropTypes.string.isRequired,
	sizeTablet: PropTypes.string,
	sizeMobile: PropTypes.string
};

GridStyled.defaultProps = {
	sizeTablet: '100%',
	sizeMobile: '100%'
};

export default GridStyled;
