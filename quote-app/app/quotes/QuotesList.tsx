'use client'

import React, { useEffect, useState } from 'react'

interface Quotes {
    id: number;
    text:string
    author: string;
    
  }

interface QutotesFilterTabProps {
    authors: string[];
    quotes:  Quotes[];
  }

const QutotesFilterTab: React.FC<QutotesFilterTabProps> = ({ authors ,quotes}) => {
    const [curAuthor, setCurAuthor] = useState<string>("all");
    const [filteredQuotes, setFilteredQuotes] = useState<Quotes[]>(quotes);

    
    useEffect(()=>{
        if(curAuthor === "all"){
            setFilteredQuotes(quotes);
        }else{
        setFilteredQuotes(quotes?.filter((quotes)=> quotes?.author === curAuthor))
        }
    },[curAuthor])


  return (
 <>
        
        <form className="w-full p-10">
                    <fieldset>
                        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
                        <label className="sr-only">My field</label>
                        <select className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever" value={curAuthor} onChange={(e)=>setCurAuthor(e.target.value)}>
                            <option value="all">All Author &hellip;</option>
                            {authors?.map((author,idx)=>(
                            <option key={idx} value={author}>{author}</option>
                            ))}
                            
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    </fieldset>
         </form>
          

         <div className='shadow-2xl flex flex-col  items-center justify-center pb-10'>
          <div className='flex w-[80%] font-semibold text-2xl'> <h3 className='w-1/4'>author</h3> <h3> Quotes</h3></div>
          <div className='mt-10 w-[80%] flex flex-col gap-8' >
            {filteredQuotes?.map((data) => (
              <div key={data.id} className='flex '>
                <p className='w-1/4'>{data.author}</p>
                <p className='w-1/4'>{data.text}</p>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>


        </>
  )
}

export default QutotesFilterTab