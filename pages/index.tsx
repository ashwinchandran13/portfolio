import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { services } from '../data';

import ServiceCard from '../components/serviceCard';

const index = () => { 
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">I am currently working as a Software Developer
        mainly focusing on frontend and backend development.
        I have 1+ year experience in web development and beginner 
        knowledge in system programming.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map((service, key) => 
            <div key={key} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service}/>
            </div>
          )}
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
