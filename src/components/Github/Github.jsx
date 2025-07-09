import React from 'react'
// import GitHubCalendars from "github-calendar";
import GitHubCalendar from 'react-github-calendar';
// import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
import "./Github.css"
// import "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"


const Github = () => {

  // function MyGitHubCalendar() {
   
  //   useEffect(() => {
  //     GitHubCalendars(".calendar", "RuchiAgrawal9186", { responsive: true });
  //   }, []);
  
  //   return <div className="calendar">Loading the data just for you.</div>;
  // }

    // useEffect(() => {
    //     GitHubCalendars(".calendar", "RuchiAgrawal9186", { responsive: true });
    //   }, []);

  return (
    <div className='github_data'>

       <h1>Statistics & Calender</h1>
        <div> 
        <a href="https://github.com/RuchiAgrawal9186/github-readme-stats">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=RuchiAgrawal9186&hide_progress=true"
            alt="github-top-langs"
            id="github-top-langs"
          />
        </a>
      </div>

      <div className="mystatistics-card">
        <div>
          <a href="https://github-readme-streak-stats.herokuapp.com">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=RuchiAgrawal9186&theme=tokyonight"
              alt="github-streak-stats"
              id="github-streak-stats"
            />
          </a>
        </div>

        <div>
          <a href="https://github.com/RuchiAgrawal9186/github-readme-stats">
            <img
              src="https://github-readme-stats.vercel.app/api?username=RuchiAgrawal9186&theme=tokyonight&show_icons=true"
              alt="github-stats-card"
              id="github-stats-card"
            />
          </a>
        </div>
      </div>

      <div className="calender react-activity-calendar" style={{marginTop:"3%"}}>
        {/* <MyGitHubCalendar className="react-activity-calendar" /> */}
        {/* <GitHubCalendar username="RuchiAgrawal9186" className="react-activity-calendar" style={{ responsive: true }}/> */}
        {/* {GitHubCalendar("RuchiAgrawal9186", { responsive: true })} */}
        {<GitHubCalendar username="RuchiAgrawal9186" blockSize={22} blockMargin={5} responsive style={{width:"100%"}}/>}
      </div>
      </div>

    
  )
}

export default Github