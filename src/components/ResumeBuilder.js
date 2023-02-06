import React from 'react'
import "../css/resumeBuilder.css"
import Logo1 from '../images/@-logo.png'
import Logo2 from '../images/phone-logo.png'
import { useGlobalContext } from '../context'



export const ResumeBuilder = () => {
  const {formData} = useGlobalContext()

  const {name, surname, email, phone_number, image, about_me, experiences} = formData

  const bottomLine = name || surname || email || phone_number || image || about_me ? true : false


  return (
    <div className='center-div'>
      <section className={`private-info ${bottomLine ? "bottom-line" : ""}`}>
        <div className='info'>
          <h1 className='name-surname red-font'>{`${name} ${surname}`}</h1>
          {email && 
            <p>
              <img src={Logo1} alt="logo1"/>
              {email}
            </p>
          }
          {phone_number &&
            <p>
              <img src={Logo2} alt="logo2"/>
              {phone_number}
            </p>
          }
          {about_me &&
          <>
            <h2 className='red-font'>ჩემ შესახებ</h2>
            <p>{about_me}</p>
          </>
          }
        </div>
        {image && 
          <div className='img-div'>
            <img src={image} alt="profile" />
          </div>
        }
      </section>
      <section className='experiences'>
        {experiences && experiences.map((experience, index) => {

          const {position, employer, start_date, due_date, description} = experience
          
          const showFlag = position || employer || start_date || due_date || description ? true : false
          return (
            <div className='single' key={index}>
              {showFlag && <h2 className='red-font'>გამოცდილება</h2>}
              {position ||  employer ? <p>{position}, {employer}</p> : ""}
              {start_date || due_date ? <small>{start_date} - {due_date}</small> : ""}
              {description && <p>{description}</p>}
            </div>
          )
        })}
      </section>
    </div>
  )
}

