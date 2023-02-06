import React from 'react'
import Vector from "../images/Prev-logo.png"
import { ResumeBuilder } from "../components/ResumeBuilder"
import {ResumeSecondPage} from './ResumeSecondPage'
import { Link } from 'react-router-dom'

export const ResumeThirdPage = () => {
  return (
    <div className='main-page'>
      <section className='single-part-resume side-paddings bg-dark-white'>
        <header>
          <div>
            <Link to='/second_page' component={ResumeSecondPage}>
              <img src={Vector} alt="vector" />
            </Link>
          </div>
          <div className='info'>
            <h1>პირადი ინფო</h1>
            <h2>3/3</h2>
          </div>
        </header>
        <form className='form-container'>
          
        </form>
      </section>
      <section className='resume-builder side-paddings bg-white'>
        <ResumeBuilder />
      </section>
    </div>
  )
}





