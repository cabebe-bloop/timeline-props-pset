import PropTypes from 'prop-types';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
    return (
        <div className='timeline-event'>
            <p className='event-person'>{props.person}</p>
            <Timestamp time={props.timestamp} className='event-time'/>
            <p className='event-status'>{props.status}</p>
        </div>
    )
};

export default TimelineEvent;

TimelineEvent.propTypes = {
    person: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired    
}