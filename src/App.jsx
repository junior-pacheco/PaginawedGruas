import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import IconoInstagram from './components/icon/instagram';
import IconoGmail from './components/icon/gmail'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineMenu } from 'react-icons/ai';
import FloatingButton from './components/whats';
import React, { useState,useRef,useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';


const imagesData = [
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQn9OLywbqAMcZm7ctxCdiPotyKZLzzWQ-g&usqp=CAU',
    characteristic: 'Tipo de Camión: Sencillo 10 Ton'
  },
  {
    imageUrl:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Quswk4pVrDedA9uu5Oed3t9qc_ouRDLPqg&usqp=CAU',
    characteristic: 'Tipo de Camión: Sencillo 10 Ton'
  },
];




const App = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const toggleImagess = () => {
    setShowImage(!showImage);
  };

  const openImage = (image) => {
    setSelectedImage(image);
    setShowImage(true);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setShowImage(false);
  };

  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false 
  };

  const sliderRef = useRef(null);

  const handlePreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Retrocede un slide
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Avanza un slide
    }
  };



  const dropdownItemStyle = {
    backgroundColor: 'transparent',
    color: 'white', 
  };

  const initialImages = [
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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',
    'https://jlgasesoriasas.com/wp-content/uploads/2020/11/alquilar-carro-grua-barranquilla.jpg',
    'https://trael.com.co/wp-content/uploads/2022/08/grua-canasta-scaled.jpg'
  ];

  const [images, setImages] = useState(initialImages);
  const [showMore, setShowMore] = useState(false);

  const toggleImages = () => {
    if (showMore) {
      setImages(initialImages);
    } else {
      // Simula cargar más imágenes desde una fuente de datos, como una API
      const moreImages = [
        'https://jlgasesoriasas.com/wp-content/uploads/2020/11/alquilar-carro-grua-barranquilla.jpg',
        'https://trael.com.co/wp-content/uploads/2022/08/grua-canasta-scaled.jpg',
        'https://jlgasesoriasas.com/wp-content/uploads/2020/11/alquilar-carro-grua-barranquilla.jpg',
      ];
      setImages([...initialImages, ...moreImages]);
    }
    setShowMore(!showMore);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900" id="Bg">
      {isLoading ? (
        // Muestra el spinner mientras se carga
        <div className="flex justify-center items-center h-screen">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        // Contenido principal cuando todo esté listo
        <>
           <div className="h-screen w-screen flex flex-col bg-gray-900" id='Bg'>
       <header className='flex items-center bg-slate-950 h-16 sm:h-16' style={{  justifyContent: 'space-between', padding: '10px',borderBottom:'1px solid yellow'}}>
         <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold p-8 text-white">Servi Grua</h2>
         <div className="dropdown">
           <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           <AiOutlineMenu size={27} />
           </button>
           <ul className="dropdown-menu bg-blue-600">
                <li onClick={() => scrollToSection("servicio")}><a className="dropdown-item" style={dropdownItemStyle}>Servicio</a></li>
                <li onClick={() => scrollToSection("equipos")}><a className="dropdown-item" style={dropdownItemStyle}>Equipos</a></li>
                <li onClick={() => scrollToSection("proyecto")}><a className="dropdown-item" style={dropdownItemStyle}>Proyecto</a></li>
                <li onClick={() => scrollToSection("contacto")}><a className="dropdown-item" style={dropdownItemStyle}>Contacto</a></li>
           </ul>
         </div>
       </header>
     <main className='flex flex-col bg-opacity-60 bg-slate-950 flex-grow'>
       <section id="inicio" className="h-72 sm:h-full flex items-center justify-center">
         <div className="flex flex-col justify-around space-y-4 sm:space-y-0 sm:space-x-4 p-2" style={{ width: '90%' }}>
           <h1 className='text-center text-base sm:text-left sm:text-xl lg:text-3xl xl:text-4xl font-bold text-white'>Bienvenido A Nuestro Servicio De Grúas</h1>
           <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
             Estamos aquí para ayudarte en cualquier momento y en cualquier lugar. Nuestro equipo está listo para brindarte el mejor servicio de grúas de manera rápida y confiable. ¡Confía en nosotros para solucionar tus necesidades!
           </p>
           <div className="flex">
             <a href="https://api.whatsapp.com/send?phone=573206499311" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 rounded">
               Contáctenos
             </a>
           </div>
         </div>
       </section>
       <div className='flex flex-col sm:gap-3 sm:flex-row sm:justify-center'>
       <section style={{padding:'10px'}} id="servicios" className="gap-4 h-[30%] sm:w-[30%] sm:h-[90%]  mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-row justify-center" >
         <div style={{ paddingLeft: '20px' }}>
           <h2 className="text-white text-lg text-center sm:text-2xl pl-2 mb-2 sm:mb-4">Servicios</h2>
           <ul className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white' style={{ listStyleType: 'initial' }}>
             <li>Gruas canasta</li>
             <li>Montaje y Desmontaje de Estructuras Pesadas</li>
             <li>Instalación de Elementos en Altura</li>
             <li>Reparaciones en Altura</li>
             <li>Podas y Mantenimiento de Vegetación en Altura</li>
             <li>Trabajos Eléctricos en Altura</li>
             <li>Instalación de Le treros y Señalización en Altura</li>
           </ul>
         </div>
       </section>
       <section className="w-full h-[70%] sm:w-[60%] sm:h-[100%] sm:flex sm:items-center sm:justify-center">
   <div id="equipos" className="shadow-md h-[100%] w-full sm:w-[80%] sm:h-[100%] p-4 sm:p-0">
<div style={{border:'1px solid red'}} className="border-c h-full flex flex-col bg-gray-900 rounded-lg">
       <div className="pb-4 sm:pb-0">
         <h2 className="text-white text-lg sm:text-2xl mb-2 sm:mb-4 pl-7">Equipos</h2>
         <Slider ref={sliderRef} {...sliderSettings}>
           {imagesData.map((data, index) => (
            <div className="h-full" key={index}>
              <div className="h-3/4 flex items-center justify-center">
                <img src={data.imageUrl} alt={`Imagen ${index + 1}`} className="max-h-full max-w-full" />
              </div>
              <div className="flex flex-col items-center text-slate-950 p-2">
                <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>{data.characteristic}</p>
                <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>{data.characteristic}</p>
                <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>{data.characteristic}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-white h-[50px] flex justify-center">
        <button
          className="bg-blue-500 h-8 text-white px-3 py-1 mx-2 rounded-lg"
          onClick={handlePreviousSlide}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 h-8 text-white px-3 py-1 mx-2 rounded-lg"
          onClick={handleNextSlide}
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</section>
      </div>
      <section id="proyecto" className="sm:flex sm:items-center sm:justify-center">
      <div className="mb-4 p-4 sm:w-[80%]">
        <div
          style={{ border: '1px solid red' }}
          className="bg-gray-900 p-4 rounded-lg shadow-md relative"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-white sm:text-2xl mb-2 sm:mb-4">Proyecto</h2>
            <button
              onClick={toggleImages}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg"
            >
              {showImage ? 'Cerrar' : 'Ver más'}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative"
                onClick={() => openImage(image)}
              >
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-auto rounded cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative w-80 h-70 bg-slate-950 rounded-lg p-4">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer z-10"
            >
              &#215;
            </button>
            <div className="flex justify-center">
              <img
                src={selectedImage}
                alt="Imagen en grande"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
      <section className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-col justify-center sm:w-70" style={{ padding: '10px'}}>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta01_infografia_landing_grumacol_200722.png.jpg'></img>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta02_infografia_landing_grumacol_200722.png.jpg'></img>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta03_infografia_landing_grumacol_200722.png.jpg'></img>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta04_infografia_landing_grumacol_200722.png.jpg'></img>
      </section>
      <footer id="contacto" className="bg-slate-950" style={{ height: '20%' }}>
        <div className="h-full flex justify-between items-center px-4">
          <div className="text-white text-xs sm:text-sm lg:text-base xl:text-lg font-normal">
            <p>Teléfono: +123-456-789</p>
            <p>Correo: info@tudominio.com</p>
            <p>Dirección: Soledad, Atlántico</p>
          </div>
          <div className="flex">
            <a href="https://www.instagram.com/lpvingenieria/" className="mr-4"><IconoInstagram/></a>
            <a href="https://www.instagram.com/ejuniorpacheco/"><IconoGmail/></a>
          </div>
        </div>
      </footer>
      <FloatingButton/>
    </main>
  </div>
        </>
      )}
    </div>
  );
  
//   <div className="h-screen w-screen flex flex-col bg-gray-900" id='Bg'>
//       <header className='flex items-center bg-slate-950 h-16 sm:h-16' style={{  justifyContent: 'space-between', padding: '10px',borderBottom:'1px solid yellow'}}>
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold p-8 text-white">Servi Grua</h2>
//         <div className="dropdown">
//           <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//           <AiOutlineMenu size={27} />
//           </button>
//           <ul className="dropdown-menu bg-blue-600">
//             <li><a className="dropdown-item" style={dropdownItemStyle} href="#servicio">Servicio</a></li>
//             <li><a className="dropdown-item" style={dropdownItemStyle} href="#equipos">Equipos</a></li>
//             <li><a className="dropdown-item" style={dropdownItemStyle} href="#galeria">Galeria</a></li>
//             <li><a className="dropdown-item" style={dropdownItemStyle} href="#contacto">contacto</a></li>
//           </ul>
//         </div>
//       </header>
//     <main className='flex flex-col bg-opacity-60 bg-slate-950 flex-grow'>
//       <section id="inicio" className="h-72 sm:h-full flex items-center justify-center">
//         <div className="flex flex-col justify-around space-y-4 sm:space-y-0 sm:space-x-4 p-2" style={{ width: '90%' }}>
//           <h1 className='text-center text-base sm:text-left sm:text-xl lg:text-3xl xl:text-4xl font-bold text-white'>Bienvenido A Nuestro Servicio De Grúas</h1>
//           <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
//             Estamos aquí para ayudarte en cualquier momento y en cualquier lugar. Nuestro equipo está listo para brindarte el mejor servicio de grúas de manera rápida y confiable. ¡Confía en nosotros para solucionar tus necesidades!
//           </p>
//           <div className="flex">
//             <a href="https://api.whatsapp.com/send?phone=573206499311" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 rounded">
//               Contáctenos
//             </a>
//           </div>
//         </div>
//       </section>
//       <div className='flex flex-col sm:gap-3 sm:flex-row sm:justify-center'>
//       <section style={{padding:'10px'}} id="servicios" className="gap-4 h-[30%] sm:w-[30%] sm:h-[90%]  mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-row justify-center" >
//         <div style={{ paddingLeft: '20px' }}>
//           <h2 className="text-white text-lg text-center sm:text-2xl pl-2 mb-2 sm:mb-4">Servicios</h2>
//           <ul className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white' style={{ listStyleType: 'initial' }}>
//             <li>Gruas canasta</li>
//             <li>Montaje y Desmontaje de Estructuras Pesadas</li>
//             <li>Instalación de Elementos en Altura</li>
//             <li>Reparaciones en Altura</li>
//             <li>Podas y Mantenimiento de Vegetación en Altura</li>
//             <li>Trabajos Eléctricos en Altura</li>
//             <li>Instalación de Le treros y Señalización en Altura</li>
//           </ul>
//         </div>
//       </section>
//       <section className="w-full h-[70%] sm:w-[60%] sm:h-[100%] sm:flex sm:items-center sm:justify-center">
//   <div id="equipos" className="shadow-md h-[100%] w-full sm:w-[80%] sm:h-[100%] p-4 sm:p-0">
//     <div style={{border:'1px solid red'}} className="border-c h-full flex flex-col bg-gray-900 rounded-lg">
//       <div className="pb-4 sm:pb-0">
//         <h2 className="text-white text-lg sm:text-2xl mb-2 sm:mb-4 pl-7">Equipos</h2>
//         <Slider ref={sliderRef} {...sliderSettings}>
//           {imagesData.map((data, index) => (
//             <div className="h-full" key={index}>
//               <div className="h-3/4 flex items-center justify-center">
//                 <img src={data.imageUrl} alt={`Imagen ${index + 1}`} className="max-h-full max-w-full" />
//               </div>
//               <div className="flex flex-col items-center text-slate-950 p-2">
//                 <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>{data.characteristic}</p>
//                 <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>{data.characteristic}</p>
//                 <p className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>{data.characteristic}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="text-white h-[50px] flex justify-center">
//         <button
//           className="bg-blue-500 h-8 text-white px-3 py-1 mx-2 rounded-lg"
//           onClick={handlePreviousSlide}
//         >
//           Anterior
//         </button>
//         <button
//           className="bg-blue-500 h-8 text-white px-3 py-1 mx-2 rounded-lg"
//           onClick={handleNextSlide}
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
//       </div>
//       <section id="galeria" className="sm:flex sm:items-center sm:justify-center">
//       <div className="mb-4 p-4 sm:w-[80%]">
//         <div
//           style={{ border: '1px solid red' }}
//           className="bg-gray-900 p-4 rounded-lg shadow-md relative"
//         >
//           <div className="flex items-center justify-between">
//             <h2 className="text-white sm:text-2xl mb-2 sm:mb-4">Galería</h2>
//             <button
//               onClick={toggleImages}
//               className="bg-blue-500 text-white px-3 py-1 rounded-lg"
//             >
//               {showImage ? 'Cerrar' : 'Ver más'}
//             </button>
//           </div>
//           <div className="grid grid-cols-3 gap-2 mt-6">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative"
//                 onClick={() => openImage(image)}
//               >
//                 <img
//                   src={image}
//                   alt={`Imagen ${index + 1}`}
//                   className="w-full h-auto rounded cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {showImage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm">
//           <div className="relative w-80 h-70 bg-slate-950 rounded-lg p-4">
//             <button
//               onClick={closeImage}
//               className="absolute top-4 right-4 text-white text-2xl cursor-pointer z-10"
//             >
//               &#215;
//             </button>
//             <div className="flex justify-center">
//               <img
//                 src={selectedImage}
//                 alt="Imagen en grande"
//                 className="max-w-full max-h-full"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//       <section className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-col justify-center sm:w-70" style={{ padding: '10px'}}>
//         <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta01_infografia_landing_grumacol_200722.png.jpg'></img>
//         <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta02_infografia_landing_grumacol_200722.png.jpg'></img>
//         <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta03_infografia_landing_grumacol_200722.png.jpg'></img>
//         <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta04_infografia_landing_grumacol_200722.png.jpg'></img>
//       </section>
//       <footer id="contacto" className="bg-slate-950" style={{ height: '20%' }}>
//         <div className="h-full flex justify-between items-center px-4">
//           <div className="text-white text-xs sm:text-sm lg:text-base xl:text-lg font-normal">
//             <p>Teléfono: +123-456-789</p>
//             <p>Correo: info@tudominio.com</p>
//             <p>Dirección: Soledad, Atlántico</p>
//           </div>
//           <div className="flex">
//             <a href="https://www.instagram.com/lpvingenieria/" className="mr-4"><IconoInstagram/></a>
//             <a href="https://www.instagram.com/ejuniorpacheco/"><IconoGmail/></a>
//           </div>
//         </div>
//       </footer>
//       <FloatingButton/>
//     </main>
//   </div>
// );

}

 export default App
 