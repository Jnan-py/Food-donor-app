import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';

const AdminHome = () => {
    const {user} = useSelector(state=>state.auth);
  return (
    <Layout>
      <div className='container'>
        <div className='d-flex flex-column mt-4'>
            <h1>Regards, Admin -- <b className='text-success'>{user?.name}</b></h1>
            <h3 className='mt-2'>Food Donation Management</h3>
            <hr/>
            <p className='id'>
                 As the administrator of our food donation app, you play a pivotal role in ensuring the smooth functioning of our platform and facilitating impactful contributions to society. Your responsibilities encompass a wide range of tasks, from managing user accounts and overseeing donation transactions to maintaining the integrity and security of our system.

One of the most crucial aspects of your role is to create an environment where donors, charities, and organizations feel empowered to participate actively. Through your efficient management and clear communication, you can foster trust and transparency among all users, ultimately encouraging greater engagement and collaboration.

Your role as an admin extends beyond mere technicalities; you are a catalyst for change and a driving force behind our mission to combat food insecurity. By implementing innovative strategies and leveraging technology, you can streamline processes, optimize resource allocation, and maximize the impact of every donation.

Your dedication and commitment have the power to transform lives and communities. Through your efforts, you enable individuals and organizations to connect, collaborate, and make a tangible difference in the fight against hunger. Together, we can build a more equitable and compassionate world where no one goes to bed hungry.
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
