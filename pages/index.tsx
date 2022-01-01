import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
// import { services } from '../data';

const index = ({services}) => {
  
  
  return (
    <div>
      <h1>Hi world</h1>
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

export const getStaticProps = async (context:GetStaticPropsContext) => {

  // whatever happens here is returned as props

  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();  
  console.log('inside server');
  
  return {
    props:{
      services: data.services,
    }
  }

}
