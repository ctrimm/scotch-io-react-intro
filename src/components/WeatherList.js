import React from 'react';
import WeatherListItem from './WeatherListItem';


//Function Component below since it doesn't use any global state.
function WeatherList(props) {
    const { days, onDayClicked } = props;

        return <div className="weather-list flex-parent">
            {days.map((day, index) =>
                <WeatherListItem
                    key={day.dt}
                    day={day}
                    onDayClicked={onDayClicked}
                    index={index}
                />
            )}
        </div>
}

export default WeatherList
