import React,{useState} from 'react';
import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Example() {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  }
  return (
    
    <div  className='calendar-container'>
     
     <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
     
     
      
    </div>
  );
}

export default Example;