import type {NextPage } from 'next';

// Define a type for the individual proverb
interface Dialogues {
    id: number;
    text:string
    series: string;
    character: string;
  }
  
  // Define a type for the array of proverbs
  type DialoguesResponse = Dialogues[];
  
// Function to fetch proverbs
async function getAllProverbs(): Promise<DialoguesResponse> {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/dialogues");
    return await response.json();
  }
  
  
  const DialoguesPage: NextPage = async () => {
     const allProverbs = await getAllProverbs();
   
    return (
   
  <div className='min-h-screen bg-white text-black pb-10'>
     
      <div className="container mx-auto pt-10">
        <h1 className='w-full my-5 mb-10 text-center text-6xl font-bold'>Dialogues</h1>
        <div className='shadow-2xl flex flex-col  items-center justify-center pb-10'>
          <div className='flex w-[80%] font-semibold text-2xl'> <h3 className='w-1/4'>series</h3> <h3 className='w-1/4'>character</h3> <h3>Dialogues</h3></div>
          <div className='mt-10 w-[80%] flex flex-col gap-8' >
            {allProverbs.map((data) => (
              <div key={data.id} className='flex '>
                <p className='w-1/4'>{data.series}</p>
                <p className='w-1/4'>{data.character}</p>
                <p className='break-all'>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
};






export default DialoguesPage;