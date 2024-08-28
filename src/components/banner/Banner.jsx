import React from 'react';
import { Container } from '../../utils/Container';
import { useSelector } from 'react-redux';

const Banner = () => {
    const data = useSelector((state) => state.searchData);
    console.log(data)
   
    return (
        <>
            <Container>
                <div className='bg-banner bg-cover bg-center rounded-lg h-[450px] mt-[50px] box-shadow'>
                    <div className='bg-linear-color w-full h-full '>
                        {data && ( 
                            <>
                                <div className='flex justify-between items-center p-4 '>
                                    <div className='mt-[100px]'>
                                        <h2>
                                            <img
                                                className='w-[100px]'
                                                src={data.current.condition.icon}
                                                alt="Weather Icon"
                                            />
                                        </h2>
                                        <h2 className='text-white text-9xl font-semibold'>
                                            {data.current.temp_c}°C
                                        </h2>
                                        <br />
                                        <div className='flex gap-4 items-center ml-4 '>
                                            <h1 className='text-white text-4xl font-bold'>
                                                {data.location.country},
                                            </h1>
                                            <h1 className='text-white text-4xl font-bold'>
                                                {data.location.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='mt-[300px] ml-4'>
                                        <h1 className='text-white text-2xl font-bold'>
                                            {new Date(data.location.localtime).toLocaleTimeString()}
                                        </h1>
                                        <h2 className='text-white text-lg'>
                                            {new Date(data.location.localtime).toLocaleDateString()}
                                        </h2>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;