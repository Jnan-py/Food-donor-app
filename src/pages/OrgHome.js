import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';

const OrgHome = () => {
    const {user} = useSelector(state=>state.auth);
    return (
      <Layout>
        <div className='container'>
          <div className='d-flex flex-column mt-4'>
              <h1>Welcome Back, Organisation -- <b className='text-success'>{user?.organisationName}</b></h1>
              <h3 className='mt-2'>Food Donation Management</h3>
              <hr/>
              <p className='id'>
                  Your participation in our food donation app signifies your commitment to making a meaningful impact on the lives of others. As an integral part of our network, your organization plays a crucial role in bridging the gap between surplus food and those experiencing hunger.

By utilizing our platform, you can efficiently coordinate logistics, engage volunteers, and distribute resources to where they are needed most. Your dedication fosters a sense of community and collaboration, uniting individuals and organizations in the shared mission of alleviating food insecurity.

Your role as an organization extends beyond the mere provision of food; you are a catalyst for social change and community empowerment. Through your advocacy efforts, educational programs, and outreach initiatives, you raise awareness about the root causes of hunger and advocate for systemic solutions.

By partnering with our app, you gain access to a wider network of donors, charities, and volunteers, enhancing your capacity to make a positive impact. Together, we can build a more resilient and compassionate society, where no one is left behind, and everyone has access to the resources they need to thrive.




              </p>
          </div>
        </div>
      </Layout>
    );
};

export default OrgHome;
