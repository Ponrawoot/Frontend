import HospitalCatalog from "@/components/HospitalCatalog"
import { render, screen, waitFor} from "@testing-library/react"


const mockResult = {
    "success": true,
    "count": 3,
    data: [
        {
            "_id": "65283d22f03b0c3ea90965a3",
            "name": "Chulalongkorn Hospital",
            "address": "1873 Rama IV Rd",
            "district": "Pathum Wan",
            "province": "Bangkok",
            "postalcode": "10330",
            "tel": "026494000",
            "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            "__v": 0,
            "id": "65283d22f03b0c3ea90965a3"
          },
          {
            "_id": "65283e31f03b0c3ea90965a8",
            "name": "Rajavithi Hospital",
            "address": "2 Phaya Thai Rd, Thung Phaya Thai",
            "district": "Ratchathewi",
            "province": "Bangkok",
            "postalcode": "10400",
            "tel": "022062900",
            "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            "__v": 0,
            "id": "65283e31f03b0c3ea90965a8"
          },
          {
            "_id": "65283ecdf03b0c3ea90965ad",
            "name": "Thammasat University Hospital",
            "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            "district": "Khlong Luang",
            "province": "Pathum Thani",
            "postalcode": "12120",
            "tel": "029269999",
            "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
            "__v": 0,
            "id": "65283ecdf03b0c3ea90965ad"
          },
    ]
}

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
      ...actualReact,
      useReducer: (reducer: (state: Map<string, number | null>, action: { type: string, hospitalName: string, rating: number | null }) => Map<string, number | null>, initialArg: Map<string, number | null>) => {
          return [new Map<string, number | null>(), jest.fn()];
      },
  };
});

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
      return children;
  };
});

describe('HospitalCatalog', ()=>{
    it('should have correct number of hospital images', async ()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson:mockResult})
        
        render(hospitalCatalog)
        await waitFor(
            ()=> {
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(3)

                const chulaHospitalName = screen.queryByText(/Chulalongkorn Hospital/i);
                expect(chulaHospitalName).toBeInTheDocument();

                const rajavithiHospitalName = screen.queryByText(/Rajavithi Hospital/i);
                expect(rajavithiHospitalName).toBeInTheDocument();

                const thammasatHospitalName = screen.queryByText(/Thammasat University Hospital/i);
                expect(thammasatHospitalName).toBeInTheDocument();
            }
        )
    })
})