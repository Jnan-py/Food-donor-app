import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';

const TrustHome = () => {
    const {user} = useSelector(state=>state.auth);
    return (
      <Layout>
        <div className='container'>
          <div className='d-flex flex-column mt-4'>
              <h1>Welcome Back, Charity -- <b className='text-success'>{user?.trustsName}</b></h1>
              <h3 className='mt-2'>Food Donation Management</h3>
              <hr/>
              <p className='id'>
                   As a registered charitable trust on our food donation app, you play a vital role in addressing food insecurity and supporting vulnerable communities. Your dedication to serving those in need embodies the essence of compassion, empathy, and social responsibility.

By leveraging our platform, you can efficiently manage donations, allocate resources, and extend your reach to individuals who require assistance the most. Your tireless efforts empower individuals to access nutritious meals and essential provisions, fostering dignity, resilience, and self-sufficiency.

Your role as a charity extends beyond the distribution of food; you are a beacon of hope and a catalyst for positive change in the lives of those you serve. Through your innovative programs and community initiatives, you provide holistic support to individuals and families, addressing not only their immediate needs but also empowering them to build a better future.

Your partnership with our app enables us to amplify your impact, connect you with donors and volunteers, and streamline the process of addressing food insecurity. Together, we can create a more equitable and compassionate society where everyone has access to the sustenance they need to thrive.
              </p>
          </div>
        </div>
      </Layout>
    );
};

export default TrustHome;