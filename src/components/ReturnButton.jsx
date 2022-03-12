import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function ReturnButton({ buttonText, theme }) {
  const darkArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="15"
      height="15"
      style={{ marginRight: '.4rem' }}
    >
      <path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z" />
    </svg>
  )

  const lightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="15"
      height="15"
      fill="white"
      style={{ marginRight: '.4rem' }}
    >
      <path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z" />
    </svg>
  )
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="return-button">
        {theme === 'light' ? darkArrow : lightArrow}
        <span className="return-button__text">{buttonText}</span>
      </div>
    </Link>
  )
}
