import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase-config';
import close from './blackcr.png';
import './Installments.css';

const Installments = ({ showInstallment, closeInstallment, courseId }) => {
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    const fetchInstallments = async () => {
      if (courseId) {
        try {
          const courseRef = doc(db, 'courses', courseId);
          const courseSnap = await getDoc(courseRef);
          
          if (courseSnap.exists()) {
            const courseData = courseSnap.data();
            setInstallments(courseData.installments || []);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching course data:', error);
        }
      }
    };

    fetchInstallments();
  }, [courseId]);

  return (
    <div className={showInstallment ? 'modal display-block' : 'modal display-none'}>
      <section className='modal-main1'>
        <div className='modal1header'>
          <div className='closebtn' onClick={closeInstallment}>
            <img src={close} alt='Close' />
          </div>
          <h1 className='heading'>Installments</h1>
        </div>

        <div className='mainc'>
          <div className='inputconteianer'>
            {installments.map((installment, index) => (
              <div key={index} className='box1'>
                <p>Installment {index + 1}</p>
                <input
                  type='text'
                  className='inputinstall'
                  value={`₹${installment.price}    ${installment.date}`}
                  readOnly
                />
              </div>
            ))}
          </div>

          <div className='btnc'>
            {/* Additional buttons or content can be added here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installments;
