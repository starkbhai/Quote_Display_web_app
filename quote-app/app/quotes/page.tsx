import QuotesList from '@/app/quotes/QuotesList';
import type {NextPage } from 'next';


// Define a type for the individual Quotes


interface Quotes {
  id: number;
  text:string
  author: string;
  
}
interface QuotesResponse {
    authors:string[],
    quotes:Quotes[]
}

  
  // Function to fetch Quotes
  async function getAllProverbs(): Promise<QuotesResponse> {
      const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
      return await response.json();
    }
  
  
  const QuotesPage: NextPage = async () => {

     const allQuotes = await getAllProverbs();
   
    return (
   
  <div className='min-h-screen bg-white text-black pb-10'>
     
      <div className="container mx-auto pt-10">
        <h1 className='w-full my-5 mb-4 text-center text-6xl font-bold'>Quotes</h1>

         <QuotesList authors={allQuotes?.authors} quotes={allQuotes?.quotes}/>
       </div>
    </div>
    )
};






export default QuotesPage;