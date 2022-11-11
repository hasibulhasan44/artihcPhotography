import React from 'react';
import img from '../../../images/main-logo.png';
import { FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-300 mt-8 rounded-lg'>
            <div className='flex  items-center'>
                <img className='w-1/4 mr-4 mt-8' src={img} alt="" />
                
                <div className='mr-4'>
                    <h2 className="text-md mb-4 text-center">Follow us On</h2>
                    <div className='flex justify-evenly'>
                        <a target="_blank" rel="noreferrer" href="https://cutt.ly/RMtBS70"><FaFacebook className='w-12'></FaFacebook></a>
                        <a target="_blank" rel="noreferrer" href="https://cutt.ly/JMtNTC5"><FaYoutube className='w-12'></FaYoutube></a>
                        <a target="_blank" rel="noreferrer" href="https://cutt.ly/EMtNCxe"><FaGithub className='w-12'></FaGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;