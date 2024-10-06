import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

const timelineData: TimelineEvent[] = [
  {
    date: '1685',
    title: 'First buildings on Gerrard Street',
    description: 'In the aftermath of the Great Fire of London, the first buildings appear on the site of present-day London Chinatown in Soho.',
  },
  {
    date: '1842',
    title: 'Britain takes control of Hong Kong',
    description: 'The First Opium War ends with the signing of the Treaty of Nanking, which cedes Hong Kong to Britain.',
  },
  {
    date: '1880-1900',
    title: 'Britain\'s Chinese population grows',
    description: 'An influx of Chinese seafarers causes the formation of a small Chinatown along the capital’s dockside streets and in the port cities of Liverpool, around Pitt Street, and Cardiff’s Tiger Bay area. Chinese migrants open lodging houses, stores, cafes, association halls, and laundries to cater to transient seamen and indentured labourers.',
  },
  {
    date: '1913',
    title: 'Sax Rohmer Publishes "The Mystery of Dr. Fu Manchu"',
    description: 'Throughout the 1910s, politicians and writers exploit public fears about Limehouse as a locus of drug-trafficking, gambling, and sexual deviance. Sax Rohmer publishes the first novel in a series of globally popular tales about evil "Chinamen" and their mysterious, criminal behavior.',
  },
  {
    date: '1930s',
    title: 'people moving away to Soho',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices tincidunt, nisl nunc aliquam nunc, ut ultrices nunc urna id nunc.',
  },
  {
    date: '1945',
    title: 'Event 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices tincidunt, nisl nunc aliquam nunc, ut ultrices nunc urna id nunc.',
  },
  // Add more objects here...
];

const Timeline = () => {
  return (
    <VerticalTimeline className='w-3/4 mx-auto'>
      {timelineData.map((event: TimelineEvent, index: number) => (
        <VerticalTimelineElement 
          key={index}
          className='vertical-timeline-element--work'
          date={event.date}
          dateClassName='timeline-date'
          icon=''
          iconStyle={{ background: '#e7e5e4'}}>
            <h3 className='vertical-timeline-element-title text-stone-900 text-xl'>{event.title}</h3>
            <p className='text-stone-900'>{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;