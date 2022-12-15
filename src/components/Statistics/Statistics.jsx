import PropTypes from 'prop-types';
import {
  Title,
  Ul,
  Li,
  Percentage,
  StatisticsSection,
} from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title ? <Title>{title}</Title> : ``}
      <Ul>
        {stats.map(item => (
          <Li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <Percentage>{item.percentage}</Percentage>
          </Li>
        ))}
      </Ul>
    </StatisticsSection>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
