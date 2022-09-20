import React from 'react'
import { Timeline,TimelineEvent } from 'react-event-timeline'
import { BsFillCalendarDateFill} from 'react-icons/bs'
import {BsFillAlarmFill} from 'react-icons/bs'
const TimeLine = () => {
  return (
   <>
   <Timeline>
            <TimelineEvent 
            title="John Doe sent a SMS"
             createdAt="2022-09-15 10:06 PM"
             icon={<BsFillAlarmFill/>}                    
            >
                I received the payment .
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2022-10-02 09:06 AM"
            icon={<BsFillCalendarDateFill/>}
            >
            </TimelineEvent>
    </Timeline>,
   </>
  )
}

export default TimeLine