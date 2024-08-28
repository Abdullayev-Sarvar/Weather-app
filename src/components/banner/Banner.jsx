import { Container } from '../../utils/Container';
import { useSelector } from 'react-redux';

const Banner = () => {

    const data = useSelector(state=>state.searchData);
    console.log(data)

  return (
  <Container>
  <div className="bg-banner bg-cover bg-center rounded-[20px] h-[500px] mt-[50px] overflow-hidden">
    <div className="bg-linear-color w-full h-full flex justify-between items-end p-8">
      {data && (
        <>
          <div className="text-left">
          <img src={data.current.condition.icon} alt="Weather Icon" className="w-[60px] h-[60px]" />

            <p className="text-[120px] text-white">
              {data.current.temp_c}°
            </p>
            <h1 className="text-[22px] text-white">
              {data.location.country}, {data.location.region}
            </h1>
          </div>

          <div className="text-right ">
            <div className='flex gap-4'>
            <p className="text-[24px] text-white">
              {data.current.condition.text},
            </p>
            <p className="text-[24px] text-white">
              {new Date(data.location.localtime).toLocaleDateString('en-US', {
                weekday: 'long',
              })}
            </p>
            </div>
            <p className="text-[24px] text-white">
              {data.location.localtime}
            </p>
          </div>
        </>
      )}
    </div>
  </div>
  
</Container>

  )
}

export default Banner