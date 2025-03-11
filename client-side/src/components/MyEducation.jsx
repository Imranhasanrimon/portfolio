import { VerticalTimeline, VerticalTimelineElement } from
  'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuBookOpenText } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
const MyEducation = () => {
  return (
    <div>


      <VerticalTimeline
        lineColor="#2f3349"
        animate={true}
        layout="1-column"
      >
        <VerticalTimelineElement
          contentStyle={{ background: '#2f3349', }}
          className="vertical-timeline-element--work"
          date="2021 - present"
          contentArrowStyle={{ borderRight: '7px solid  #2f3349' }}
          iconStyle={{ background: '#ff014f', color: '#fff' }}
          icon={<FaUserGraduate />}
        >
          <h3 className="text-lg font-semibold">Bachelor of Business Administration (BBA)</h3>
          <h4 >Institute of Business Administration (IBA), University of Rajshahi</h4>
          <p>Major: Marketing</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=" "
          contentStyle={{ background: '#2f3349', }}
          contentArrowStyle={{ borderRight: '7px solid  #2f3349' }}
          date="2011 - 2020"
          iconStyle={{ background: '#ff014f', color: '#fff' }}
          icon={<LuBookOpenText />}
        >
          <h3 className="text-lg font-semibold">Higher Secondary Certificate in Business Studies</h3>
          <h4 className="">Govt. Shah Sultan College, Bogura</h4>

        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
  );
};

export default MyEducation;