import React from 'react'
import SectionLabel from '../SectionLabel'


const About = () => {
    const schedule = [
        {
            day: "Monday",
            open: "8:00 AM",
            close: "6:00 PM"
        },
        {
            day: "Tuesday",
            open: "8:00 AM",
            close: "6:00 PM"
        },
        {
            day: "Wednesday",
            open: "8:00 AM",
            close: "6:00 PM"
        },
        {
            day: "Thursday",
            open: "8:00 AM",
            close: "6:00 PM"
        },
        {
            day: "Friday",
            open: "8:00 AM",
            close: "6:00 PM"
        },
        {
            day: "Saturday",
            open: "8:00 AM",
            close: "6:00 PM"
        },
        {
            day: "Sunday",
            open: "",
            close: "Closed"
        },

    ]
  return (
    <>
        <div className="p-2 mt-30">
            <SectionLabel text='About Us'/>
            <div className='mt-3 text-center justify-center'>
                <p className='text-xl md:text-2xl'>
                    At <span className='name'>Asaba.Inc</span>, we specialise in quality tires for all vehicle types.
                    With years of experience and a commitment to customer satisfaction, we help you drive 
                    safely and smoothly everday
                </p>
                <table cellPadding={10} cellSpacing="0" className='mt-3 border border-gray-200 rounded-md text-center w-full' border={1}>
                    <thead className="primary">
                        <tr className='text-white font-bold'>
                            <th className='py-2'>Day</th>
                            <th>Opening Time</th>
                            <th>Closing Time</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-x divide-gray-200'>
                       {
                            schedule.map((date, i) => (
                                <tr key={i}>
                                    <td className="py-1">{date.day}</td>
                                    <td>{date.open}</td>
                                    <td>{date.close}</td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
            <div className='mt-3'>
                <h1 className="font-bold text-xl">Location</h1>
                <p className='italic text-greay-500'>Location: 149 Main Street, Rosettenville, Johannesburg, South Africa</p>
            </div>
        </div>
    </>
    
  )
}

export default About