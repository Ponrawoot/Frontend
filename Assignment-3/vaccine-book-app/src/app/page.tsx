import Banner from '@/components/Banner'
import HospitalCard from '@/components/HospitalCard'

export default function Home() {
  return (
    <main>
        <Banner/>
        <div style={{margin:"20px",display:"flex",flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
          <HospitalCard hospitalName='Chulalongkorn Hospital' imgSrc = '/img/chula.jpg'/>
          <HospitalCard hospitalName='Rajavithi Hospital' imgSrc = '/img/rajavithi.jpg'/>
          <HospitalCard hospitalName='Thammasat University Hospital' imgSrc = '/img/thammasat.jpg'/>
        </div>
    </main>
  )
}
