import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../images/facebook-logo.png'
import LinkedInLogo from '../images/linkedin-logo.svg'
import GitHubLogo from '../images/github-logo.svg'

function Footer() {
  return (
    <Wrap>
      <h2>Beach Resort</h2>
      <Container>
        <div className='desc'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem modi dignissimos sequi vel vero consequuntur
            architecto nihil molestias reprehenderit facilis, similique
            laudantium natus, magni, minus quisquam voluptates illo quas?
          </p>
        </div>
        <div className='info'>
          <div>
            <span>Email: </span>
            <a href='mohamedelnafad4@gmail.com'>mohamedelnafad4@gmail.com</a>
          </div>
          <div>
            <span>Phone: </span>
            <span>+201274219646</span>
          </div>
          <div>
            <span>Address: </span>
            <span>Cairo, Egypt</span>
          </div>
          <div className='icons'>
            <a href='https://www.facebook.com/m.elnafad98'>
              <img src={FacebookIcon} alt='' />
            </a>
            <a href='https://www.linkedin.com/in/elnafad911/'>
              <img src={LinkedInLogo} alt='' />
            </a>
            <a href='https://github.com/mohamedElnafad'>
              <img src={GitHubLogo} alt='' />
            </a>
          </div>
        </div>
      </Container>
    </Wrap>
  )
}

export default Footer
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px;
  background: #cfcfcf;
`
const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .desc {
    max-width: 600px;
    p {
      letter-spacing: 1.2px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .icons {
    display: flex;
    gap: 30px;
    img {
      height: 35px;
      width: 35px;
    }
  }
  @media (max-width: 990px) {
    grid-gap: 30px;
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
