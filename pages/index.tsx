import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { services } from '../data';

import ServiceCard from '../components/serviceCard';

const index = () => { 
  return (
    <div>
      <h5>I am currently working as a Software Developer
        mainly focusing on frontend and backend development.
        I have 1+ year experience in web development and beginner 
        knowledge in system programming.
      </h5>
      <div>
        <h6>What I Offer</h6>
        <div>
          {
            // eslint-disable-next-line react/jsx-key
            services.map((service) => <ServiceCard service={service}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default index;

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {

//   // whatever happens here is returned as props

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();  

//   return {
//     props:{
//       services: data.services,
//     }
//   }

// }

// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   // whatever happens here is returned as props

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();  
//   console.log('inside server');
  
//   return {
//     props:{
//       services: data.services,
//     }
//   }

// }
