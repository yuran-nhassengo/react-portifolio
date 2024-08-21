import React from 'react'
import { Element } from 'react-scroll'

export const Home = () => {
  return (
    <Element name="home" className="flex relative" >
       <div className="flex justify-between mt-24">
       <div className="w-36 h-36 mx-auto p-0 bg-white rounded-full shadow-md mt-4 mb-4 flex items-center justify-center">
            <img 
                src="https://via.placeholder.com/150" 
                alt="Imagem Circular" 
                className="w-full h-full rounded-full object-cover"
            />
        </div>
        <div className=" max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-4 mb-4">
          <p >Ola, meu nome é Yuran Oscar Nhassengo, uma pessoa com um forte senso de responsabilidade, lealdade e justiça. 
            Valorizo o trabalho em equipe e me considero um líder natural, sempre buscando colaborar e 
            apoiar meus colegas. Comprometido com o crescimento contínuo e a busca por novos conhecimentos,
            tenho uma paixão por enfrentar desafios e alcançar o sucesso coletivo.</p>
        </div>
        
       </div>
    </Element>
  )
}


