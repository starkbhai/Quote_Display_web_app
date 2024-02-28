import type {NextPage } from 'next';

// Define a type for the individual proverb
interface Proverb {
    id: number;
    text: string;
    origin: string;
  }
  
  // Define a type for the array of proverbs
  type ProverbsResponse = Proverb[];
  
// Function to fetch proverbs
async function getAllProverbs(): Promise<ProverbsResponse> {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/proverbs");
    return await response.json();
  }
  
  
  const ProverbsPage: NextPage = async () => {
     const allProverbs = await getAllProverbs();
     console.log("getAll : " , JSON.stringify(allProverbs));
    return (
   
  <div className='min-h-screen bg-white text-black pb-10'>
     
      <div className="container mx-auto pt-10">
        <h1 className='w-full my-5 mb-10 text-center text-6xl font-bold'>PROVERBS</h1>
        <div className='shadow-2xl flex flex-col  items-center justify-center pb-10'>
          <div className='flex w-[80%] font-semibold text-2xl'> <h3 className='w-1/4'>Origin</h3> <h3>Proverbs</h3></div>
          <div className='mt-10 w-[80%] flex flex-col gap-8' >
            {allProverbs.map((data) => (
              <div key={data.id} className='flex '>
                <p className='w-1/4'>{data.origin}</p>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
};






export default ProverbsPage;