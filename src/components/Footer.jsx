import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
function Footer(){
    return <>
   <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Features</h5>

            <p>
              <li>Posting Images</li>
              <li>like and comment on posts.</li>
              <li>Chat between friends</li>
              <li>Sending,accepting,deleting requests.</li>
              <li>Updation of password,username,email and name.</li>
              
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Tech Stack Used</h5>

            <p>
              <li>Django Restframework</li>
              <li>JWT Authentication</li>
              <li>React</li>
              <li>Axios</li>
              <li>Bootstrap</li>
              
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          deen.com
        </a>
      </div>
    </MDBFooter>
    </>
}
export default Footer