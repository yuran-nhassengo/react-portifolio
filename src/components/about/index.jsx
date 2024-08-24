import React from 'react'



export const About = () => {
  return (

        <section className="mt-24" id='about'>
            <div className=" mx-auto">
                  <div className="flex flex-col xl:flex-row gap-24">
                    <img className="object-cover h-full  w-[566px]
                    md:mx-auto lg:mx-0 rounded-2xl" src="./profile.png" alt="Image" />
                    <div className="flex flex-col items-center
                    text-center lg:items-start lg:text-left">
                      <h2 className="text-3xl lg:text-4xl
                      font-medium lg:font-extrabold mb-3
                      before:content-about relative before:absolute
                      before:opacity-100 before:-top-[2rem]
                      before:hidden before:lg:block">Yuran Nhassengo</h2>
                      <p className="text-black">Desenvolvedor Fullstack Junior</p>

                    </div>
                  </div>
            </div>
        </section>


//     <Element name="home" className="flex  flex-wrap justify-center relative" >
//     <div className="flex  mt-24">
//     <div className="w-36 h-36 mx-auto p-0  bg-white rounded-full shadow-md mt-4 mb-4 flex items-center justify-center">
//          <img 
//              src="https://via.placeholder.com/150" 
//              alt="Imagem Circular" 
//              className="w-full h-full rounded-full object-cover"
//          />
//      </div>
//      <div className=" max-w-md w-full mx-auto p-6 bg-white  shadow-md mt-4 mb-4 rounded-lg border-solid border-2 border-blue-300">
//        <p >Ola, meu nome é Yuran Oscar Nhassengo, uma pessoa com um forte senso de responsabilidade, lealdade e justiça. 
//          Valorizo o trabalho em equipe e me considero um líder natural, sempre buscando colaborar e 
//          apoiar meus colegas. Comprometido com o crescimento contínuo e a busca por novos conhecimentos,
//          tenho uma paixão por enfrentar desafios e alcançar o sucesso coletivo.</p>
//      </div>
     
//     </div>
//  </Element>
  )
}


