import React from 'react'
import "./Skills.css"

const Skills = () => {

  const images = [
    {
      logo: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
      name: "HTML",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      name: "CSS",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      name: "JavaScript",
    },
    // {
    //   logo: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    //   name: "TypeScript",
    // },
    {
      logo: "https://cdn-icons-png.flaticon.com/128/760/760457.png",
      name: "React",
    },
    {
      logo: "https://cdn.worldvectorlogo.com/logos/redux.svg",
      name: "Redux",
    },
    // {
    //   logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png",
    //   name: "Next.js",
    // },
    {
      logo: "https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg",
      name: "Node.js",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4uaUIYoTYzsubUBtZx3rmOLXsq6aM4HRXAdyQpu0tv_qE1boBntIJBzNG2QQgz84r_NVWdYIf6Q&usqp=CAU&ec=48665699",
      name: "Express.js",
    },
    {
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
      name: "MongoDB",
    },
    {
      logo: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png",
      name: "Chakra UI",
    },
    {
      logo: "https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png",
      name: "Git",
    },
    {
      logo: "https://t4.ftcdn.net/jpg/02/50/30/59/240_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg",
      name: "GitHub",
    },
    {
      logo: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
      name: "Postman",
    },
  ];
  return (
    <div>
    <div id="skills">
        <h1>Skills</h1>
        <div className='skills_section'>
           {
            images.map((el,index)=>{
              return <div key={index+1} className='skills-card'>
                <img src={el.logo} alt="cardimg" className='skills-card-img'/>
                <p className='skills-card-name'>{el.name}</p>
              </div>
            })
           }
        </div>
    </div>
    </div>

  )
}

export default Skills