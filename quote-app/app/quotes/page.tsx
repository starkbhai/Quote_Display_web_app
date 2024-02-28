import type {NextPage } from 'next';

// Define a type for the individual Quotes

interface allQuotes {
    authors:[],
    quotes:Quotes[]
}

interface Quotes {
    id: number;
    text:string
    author: string;
    
  }

 
  
  // Define a type for the array of Quotes
  type QuotesResponse = Quotes[];
  
// Function to fetch Quotes
async function getAllProverbs(): Promise<allQuotes> {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
    return await response.json();
  }
  
  
  const QuotesPage: NextPage = async () => {
     const allQuotes = await getAllProverbs();
  
    return (
   
  <div className='min-h-screen bg-white text-black pb-10'>
     
      <div className="container mx-auto pt-10">
        <h1 className='w-full my-5 mb-10 text-center text-6xl font-bold'>Dialogues</h1>
        <div className='shadow-2xl flex flex-col  items-center justify-center pb-10'>
          <div className='flex w-[80%] font-semibold text-2xl'> <h3 className='w-1/4'>author</h3> <h3> Quotes</h3></div>
          <div className='mt-10 w-[80%] flex flex-col gap-8' >
            {allQuotes?.quotes?.map((data) => (
              <div key={data.id} className='flex '>
                <p className='w-1/4'>{data.author}</p>
                <p className='w-1/4'>{data.text}</p>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
};






export default QuotesPage;