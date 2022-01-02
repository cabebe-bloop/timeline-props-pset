import PropTypes from 'prop-types';
import TimelineEvent from './TimelineEvent';
import './Timeline.css';

const Timeline = (props) => {
    const timelineEvents = []
    // console.log('these are props:' ,props.timelineData.events);
    const userTimelineEvents = [...props.timelineData.events]
    for (let event of userTimelineEvents) {
        // console.log(event);
        timelineEvents.push(
        <div>
            <TimelineEvent 
                person={event.person}
                status={event.status}
                timestamp={event.timestamp}/>
        </div>
        );
    }
    return (
        <div className='timeline'>
            {timelineEvents}
        </div>
    )
};

export default Timeline;

Timeline.propTypes = {
    userTimelineData : PropTypes.shape({
        person: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(PropTypes.shape({
            person: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired
        }))
    })
}