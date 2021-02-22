// @ts-ignore
import React, {FC} from 'react'
import { IExperienceGitGraph, EStoryType } from './interfaces';

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  vertical: {
    transform: 'rotate(90deg)'
  },
  container : {
    display: "flex",
  },
  children: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})

const TreeLine = props => {
  const classes = useStyles()
  if(props.isGrey){
    return (
      <svg className={classes.children} xmlns="http://www.w3.org/2000/svg" width="81.715" height="4" viewBox="0 0 81.715 4">
        <path id="Trazado_7" data-name="Trazado 7" d="M83.715,0H2" transform="translate(-2 2)" fill="none" stroke="rgba(255,255,255,0.39)" stroke-width="4"/>
      </svg>
    )
  }
  if(props.isRight) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="242.4" height="86" viewBox="0 0 242.4 86">
        <path id="Trazado_1" data-name="Trazado 1" d="M264.5,74.2a41.056,41.056,0,0,1-41,41m41-41a41.056,41.056,0,0,1,41-41H465.9" transform="translate(-223.5 -31.2)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/>
      </svg>
    )
  }
  return (
    <svg className={classes.children} xmlns="http://www.w3.org/2000/svg" width="459" height="4" viewBox="0 0 459 4">
      <path  d="M83.715,0H2" transform="translate(-2 2)" fill="#b3e3ff" stroke="#fff" stroke-width="4"/>
    </svg>
  )
};
const Story = props => {
  const classes = useStyles()
  let storyType = (<div></div>)
  switch (props.theme) {
    case EStoryType.employee:
      storyType = (
        <svg className={classes.children} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
          <circle id="Elipse_6" data-name="Elipse 6" cx="21" cy="21" r="21" transform="translate(2 2)" fill="#b3e3ff" stroke="#404040" stroke-miterlimit="10" stroke-width="4"/>
          <g id="Rectángulo_6" data-name="Rectángulo 6" transform="translate(15.272 23.05) rotate(-45)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="11" height="11" stroke="none"/>
            <rect x="0.5" y="0.5" width="10" height="10" fill="none"/>
          </g>
        </svg>
      )
      break;
    case EStoryType.independent:
      storyType = (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
          <circle id="Elipse_3" data-name="Elipse 3" cx="21" cy="21" r="21" transform="translate(2 2)" fill="#4ed1a1" stroke="#404040" stroke-miterlimit="10" stroke-width="4"/>
          <g id="Polígono_1" data-name="Polígono 1" transform="translate(14.884 30.55) rotate(-90)" fill="#fff">
            <path d="M 14.19098567962646 14.5 L 0.8090154528617859 14.5 L 7.500000476837158 1.118029952049255 L 14.19098567962646 14.5 Z" stroke="none"/>
            <path d="M 7.500000476837158 2.236069679260254 L 1.618035316467285 14 L 13.38196563720703 14 L 7.500000476837158 2.236069679260254 M 7.500000476837158 0 L 15 15 L 9.5367431640625e-07 15 L 7.500000476837158 0 Z" stroke="none" fill="#707070"/>
          </g>
        </svg>
      )
      break;
    case EStoryType.side:
      storyType = (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
          <circle id="Elipse_2" data-name="Elipse 2" cx="21" cy="21" r="21" transform="translate(2 2)" fill="#b18be8" stroke="#404040" stroke-miterlimit="10" stroke-width="4"/>
          <g id="Elipse_11" data-name="Elipse 11" transform="translate(18.157 28.55) rotate(-90)" fill="#fff" stroke="#707070" stroke-width="1">
            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
          </g>
        </svg>
      )
      break;
    default:
      storyType = <TreeLine/>
      break;
  }
  return storyType
}

const ExperienceGitGraph: FC<IExperienceGitGraph> = ({experienceHistory, openOrClose}) => {
  const sortedExperience = experienceHistory.sort((a, b)=> {
    const aStartDate = new Date(a.startDate).getTime()
    const bStartDate = new Date(b.startDate).getTime();
    return aStartDate > bStartDate;
  })
  const classes = useStyles()
  return (
    <div className={classes.vertical}>
      {sortedExperience.map((story,index) => {
        return (
          <div key={`${story.company}-${index}`} className={classes.container}>
            <div className={classes.container}>
              <TreeLine isRight={true}/>
              <Story className={classes.children} theme={story.type}/>
            </div>
            <div className={classes.container}>
              <TreeLine isGrey={sortedExperience.length - 1 === index || index === 0}/>
              <Story className={classes.children} theme={story.type}/>
            </div>
            <div className={classes.container}>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(ExperienceGitGraph);