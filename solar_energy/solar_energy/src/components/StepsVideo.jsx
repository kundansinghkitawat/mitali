import React from 'react';

const steps = [
  { num: '01', id: 'section01', title: <>Assessment & Feasibility:<span className="row">Feasibility studies & property energy audits</span></> },
  { num: '02', id: 'section02', title: <>Design & Engineering:<span className="row">Max Efficiency, panel layout & wiring diagrams</span></> },
  { num: '03', id: 'section03', title: <>Procurement & Supply:<span className="row">Top-tier panels, inverters & trusted mounting</span></> },
  { num: '04', id: 'section04', title: <>Installation & Commissioning:<span className="row">Expert seamless residential solar integration</span></> },
  { num: '05', id: 'section05', title: <>Permits & Approvals:<span className="row">GEDA, Surya Gujarat & Net Metering handled</span></> },
  { num: '06', id: 'section06', title: <>Operations & Maintenance:<span className="row">Routine cleaning, monitoring & fault resolution</span></> },
];

const StepsVideo = () => {
  return (
    <section className="row content_steps_video bg_change_video" id="steps">
      {steps.map((step) => (
        <div key={step.id} className={`row content_item item${step.num} classView`} id={step.id}>
          <div className="box">
            <span className="row number">{step.num}</span>
            <h3 className="row">{step.title}</h3>
          </div>
        </div>
      ))}

      {/* Sticky Video Container */}
      <div className="row content_sticky">
        <div className="row content_video">
          <ul className="content_menu">
            {steps.map((step) => (
              <li className="row" key={step.id}>
                <a href="#" className="row link_items" data-section={step.id}>
                  <span className="circle"></span>
                  <span className="number">{step.num}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="row content_video_mask">
            <video
              playsInline
              webkit-playsinline="true"
              preload="auto"
              muted
              className="video-background"
            ></video>
          </div>
          <div id="container" className=""></div>
        </div>
      </div>
    </section>
  );
};

export default StepsVideo;
