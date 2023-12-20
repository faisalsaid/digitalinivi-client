import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const STORY_DATA = [
  {
    date: '08-12-2006',
    text: 'Text lorem ipsum number 1',
  },
  {
    date: '08-12-2010',
    text: 'Text lorem ipsum number 2',
  },
  {
    date: '08-12-2016',
    text: 'Text lorem ipsum number 3',
  },
];

const TimeLine = ({ theme, colorTheme, decoration, detail }) => {
  const Wraper = ({ date, text }) => {
    return (
      <div className=" bg-white rounded-lg p-3 opacity-60">
        <div className="flex flex-col gap-2 ">
          <span className=" p-2 text-white rounded-lg" style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}>
            {date}
          </span>
          <div>{text}</div>
        </div>
      </div>
    );
  };

  if (Object.keys(detail).length === 0) {
    return (
      <>
        <p>...loading</p>
      </>
    );
  }

  return (
    <div className="py-4">
      <Timeline position="alternate-reverse">
        {STORY_DATA.map((data, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />
              <TimelineConnector style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />
            </TimelineSeparator>
            <TimelineContent>
              <Wraper date={data.date} text={data.text} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
