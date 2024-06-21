import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';

const DonorHome = () => {
    const {user} = useSelector(state=>state.auth);
    return (
      <Layout>
        <div className='container'>
          <div className='d-flex flex-column mt-4'>
              <h1>Welcome Back, Donor -- <b className='text-success'>{user?.name}</b></h1>
              <h3 className='mt-2'>Food Donation Management</h3>
              <hr/>
              <p className='id'>
                  Your decision to join our food donation app reflects a deep commitment to making a positive impact on the world. By offering your surplus food or financial contributions, you are not only reducing waste but also nourishing those in need and supporting vulnerable communities.

As a donor, you have the power to alleviate hunger, provide comfort, and restore hope in the lives of individuals and families facing food insecurity. Your generosity transcends mere material donations; it embodies the spirit of empathy, compassion, and solidarity.

Through your contributions, you become a catalyst for change, inspiring others to embrace the values of giving and compassion. Your actions ripple outward, igniting a chain reaction of kindness and generosity that has the potential to transform lives and communities.

Your role as a donor extends beyond the act of giving; you are a beacon of hope and a symbol of solidarity in the fight against hunger. By leveraging our platform, you can connect with organizations and charities working tirelessly to address food insecurity, amplifying the impact of your contributions and ensuring that they reach those who need them the most.

Together, we can create a world where access to nutritious food is a fundamental right, not a privilege. Your generosity has the power to change lives and build a brighter future for generations to come.
              </p>
          </div>
        </div>
      </Layout>
    );
};

export default DonorHome;
