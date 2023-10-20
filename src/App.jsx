import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import IconoInstagram from './components/icon/instagram';
import Whats from './components/icon/whats';
import IconoGmail from './components/icon/gmail'



const images = [
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQn9OLywbqAMcZm7ctxCdiPotyKZLzzWQ-g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Quswk4pVrDedA9uu5Oed3t9qc_ouRDLPqg&usqp=CAU'
];


const App = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-screen w-screen flex flex-col" id='Bg'>
      <header className='flex items-center bg-slate-950' style={{ height: '10%' }}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold p-8 text-white">Servi Grua</h1>
      </header>
      <main className='flex flex-col bg-opacity-60 bg-slate-950 flex-grow'>
        <section className="h-72 sm:h-full flex items-center justify-center">
          <div className="flex flex-col justify-around space-y-4 sm:space-y-0 sm:space-x-4" style={{ width: '90%' }}>
            <h1 className='text-center text-base sm:text-left sm:text-xl lg:text-3xl xl:text-4xl font-bold text-white'>Bienvenido A Nuestro Servicio De Grúas</h1>
            <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
              Estamos aquí para ayudarte en cualquier momento y en cualquier lugar. Nuestro equipo está listo para brindarte el mejor servicio de grúas de manera rápida y confiable. ¡Confía en nosotros para solucionar tus necesidades!
            </p>
            <div className="flex">
              <a href="https://api.whatsapp.com/send?phone=573206499311" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Contáctenos
              </a>
            </div>
          </div>
        </section>
        <section className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-row justify-center" style={{ padding: '10px', width: '100%' }}>
          <div style={{ paddingLeft: '20px' }}>
            <h2 style={{ color: 'white', textAlign: 'center' }}>Servicios</h2>
            <ul className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white' style={{ listStyleType: 'initial' }}>
              <li>Gruas canasta</li>
              <li>Montaje y Desmontaje de Estructuras Pesadas</li>
              <li>Instalación de Elementos en Altura</li>
              <li>Reparaciones en Altura</li>
              <li>Podas y Mantenimiento de Vegetación en Altura</li>
              <li>Trabajos Eléctricos en Altura</li>
              <li>Instalación de Letreros y Señalización en Altura</li>
            </ul>
          </div>
          <div className='bg-green-400 h-65 w-80 mb-4'>
            <Slider {...sliderSettings}>
              {images.map((imageUrl, index) => (
                <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
                  <div style={{ justifyContent: 'center', gap: '10px', alignContent: 'center', display: 'flex', color: 'white' }}>
                    <h2>Equipos</h2>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={imageUrl} alt={`Imagen ${index + 1}`} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className='bg-yellow-400 h-48 w-80 mb-4'>
            {/* Contenido de la tercera sección */}
          </div>
        </section>
        <footer style={{ height: '20%' }}>
          <div className="flex justify between items-center h-full px-4">
            <div className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
              <p>Teléfono: +123-456-789</p>
              <p>Correo: info@tudominio.com</p>
              <p>Dirrecion: Soledad-Atlantico</p>
            </div>
            <div className="flex">
              <a href='https://api.whatsapp.com/send?phone=573206499311'> <Whats/></a> 
              <a href='https://www.instagram.com/lpvingenieria/'><IconoInstagram/></a>
              <a href='https://www.instagram.com/ejuniorpacheco/'><IconoGmail/></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );

  //   <div className="h-screen w-screen flex flex-col" id='Bg'>
  //     <header className='flex items-center bg-slate-950' style={{ height: '10%' }}>
  //       <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold p-8 text-white">Servi Grua</h1>
  //     </header>
  //     <main className='flex flex-col bg-opacity-60 bg-slate-950 flex-grow'>
  //       <section className="h-72 sm:h-full flex items-center justify-center">
  //         <div className="flex flex-col justify-around space-y-4 sm:space-y-0 sm:space-x-4" style={{ width: '90%' }}>
  //           <h1 className='text-center text-base sm:text-left sm:text-xl lg:text-3xl xl:text-4xl font-bold text-white'>Bienvenido A Nuestro Servicio De Grúas</h1>
  //           <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
  //             Estamos aquí para ayudarte en cualquier momento y en cualquier lugar. Nuestro equipo está listo para brindarte el mejor servicio de grúas de manera rápida y confiable. ¡Confía en nosotros para solucionar tus necesidades!
  //           </p>
  //           <div className="flex">
  //             <a href="https://api.whatsapp.com/send?phone=573206499311" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  //               Contáctenos
  //             </a>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-row justify-center" style={{ padding: '10px', width: '100%' }}>
  //         <div style={{ paddingLeft: '20px' }}>
  //           <h2 style={{ color: 'white', textAlign: 'center' }}>Servicios</h2>
  //           <ul className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white' style={{ listStyleType: 'initial' }}>
  //             <li>Gruas canasta</li>
  //             <li>Montaje y Desmontaje de Estructuras Pesadas</li>
  //             <li>Instalación de Elementos en Altura</li>
  //             <li>Reparaciones en Altura</li>
  //             <li>Podas y Mantenimiento de Vegetación en Altura</li>
  //             <li>Trabajos Eléctricos en Altura</li>
  //             <li>Instalación de Letreros y Señalización en Altura</li>
  //           </ul>
  //         </div>
  //         <div className='bg-green-400 h-65 w-80 mb-4'>
  //           <Slider {...sliderSettings}>
  //             {images.map((imageUrl, index) => (
  //               <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
  //                 <div style={{ justifyContent: 'center', gap: '10px', alignContent: 'center', display: 'flex', color: 'white' }}>
  //                   <h2>Equipos</h2>
  //                 </div>
  //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
  //                   <img src={imageUrl} alt={`Imagen ${index + 1}`} />
  //                 </div>
  //               </div>
  //             ))}
  //           </Slider>
  //         </div>
  //         <div className='bg-yellow-400 h-48 w-80 mb-4'>
  //           {/* Contenido de la tercera sección */}
  //         </div>
  //       </section>
  //       <footer style={{ height: '20%' }}>
  //         <div className="flex justify-between items-center h-full px-4">
  //           <div className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
  //             <p>Teléfono: +123-456-789</p>
  //             <p>Correo: info@tudominio.com</p>
  //             <p>Dirrecion: Soledad-Atlantico</p>
  //           </div>
  //           <div className="flex">
  //             <a href='https://api.whatsapp.com/send?phone=573206499311'> <Whats/></a> 
  //             <a href='https://www.instagram.com/lpvingenieria/'><IconoInstagram/></a>
  //             <a href='https://www.instagram.com/ejuniorpacheco/'><IconoGmail/></a>
  //           </div>
  //         </div>
  //       </footer>
  //     </main>
  //   </div>
  // );
  

  //   <div className="h-screen w-screen flex flex-col"  id='Bg'>
  //     <header className='flex items-center bg-slate-950' style={{ height: '10%' }}>
  //       <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold p-8 text-white">Servi Grua</h1>
  //     </header>
  //     <main  className='flex flex-col bg-opacity-60 bg-slate-950' style={{ height: '100%' }}>
  //       <section className=" h-72 flex w-full sm:h-full items-center justify-center" style={{ height: '40%' }}>
  //         <div className="flex flex-col justify-around space-y-4 sm:space-y-0 sm:space-x-4" style={{ height: '90%', width: '90%' }}>
  //           <h1 className='text-center text-base sm:text-left sm:text-xl lg:text-3xl xl:text-4xl font-bold text-white'>Bienvenido A Nuestro Servicio De Grúas</h1>
  //           <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
  //             Estamos aquí para ayudarte en cualquier momento y en cualquier lugar. Nuestro equipo está listo para brindarte el mejor servicio de grúas de manera rápida y confiable. ¡Confía en nosotros para solucionar tus necesidades!
  //           </p>
  //           <div className="flex">
  //             <a href="https://api.whatsapp.com/send?phone=573206499311" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  //              Contáctenos
  //             </a>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-row justify-center" style={{ padding:'10px',width: '100%' }}>
  //         <div  style={{ paddingLeft: '20px' }}>
  //           <h2 style={{ color: 'white', textAlign: 'center' }}>Servicios</h2>
  //           <ul  className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white' style={{ listStyleType: 'initial' }}>
  //             <li>Gruas canasta</li>
  //             <li>Montaje y Desmontaje de Estructuras Pesadas</li>
  //             <li>Instalación de Elementos en Altura</li>
  //             <li>Reparaciones en Altura</li>
  //             <li>Podas y Mantenimiento de Vegetación en Altura</li>
  //             <li>Trabajos Eléctricos en Altura</li>
  //             <li>Instalación de Letreros y Señalización en Altura</li>
  //           </ul>
  //         </div>
  //         <div className='bg-green-400 h-65 w-80 mb-4'>
  //           <Slider {...sliderSettings}>
  //             {images.map((imageUrl, index) => (
  //               <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
  //                 <div style={{justifyContent:'center',gap:'10px',alignContent:'center',display:'flex',color:'white' }}>
  //                   <h2>Equipos</h2>
  //                 </div>
  //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
  //                   <img src={imageUrl} alt={`Imagen ${index + 1}`} />
  //                 </div>
  //               </div>
  //             ))}
  //           </Slider>
  //         </div>
  //         <div className='bg-yellow-400 h-48 w-80 mb-4'>
  //           {/* Contenido de la tercera sección */}
  //         </div>
  //       </section>
  //       <footer  style={{ height: '20%' }}>
  //         <div className="flex justify-between items-center h-full px-4">
  //           <div className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
  //             <p>Teléfono: +123-456-789</p>
  //             <p>Correo: info@tudominio.com</p>
  //             <p>Dirrecion: Soledad-Atlantico</p>
  //           </div>
  //             <div className="flex">
  //             <a href='https://api.whatsapp.com/send?phone=573206499311'> <Whats/></a> 
  //             <a  href='https://www.instagram.com/lpvingenieria/'><IconoInstagram/></a>
  //             <a  href='https://www.instagram.com/ejuniorpacheco/'><IconoGmail/></a>
  //           </div>
  //         </div>
  //       </footer>      
  //     </main>
  //   </div>
  // );
  
}

export default App


