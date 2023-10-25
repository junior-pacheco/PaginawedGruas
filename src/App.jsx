import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import IconoInstagram from './components/icon/instagram';
import Whats from './components/icon/whats';
import IconoGmail from './components/icon/gmail'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dropdownItemStyle = {
    backgroundColor: 'transparent',
    color: 'white', 
  };
                                        

  return (
  <div className="h-screen w-screen flex flex-col" id='Bg'>
      <header className='flex items-center bg-slate-950' style={{ height: '10%', justifyContent: 'space-between', padding: '10px' }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold p-8 text-white">Servi Grua</h2>
        <div className="dropdown">
          <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <AiOutlineMenuUnfold size={27} />
          </button>
          <ul className="dropdown-menu bg-blue-600">
            <li><a className="dropdown-item" style={dropdownItemStyle} href="#servicio">Servicio</a></li>
            <li><a className="dropdown-item" style={dropdownItemStyle} href="#equipos">Equipos</a></li>
            <li><a className="dropdown-item" style={dropdownItemStyle} href="#contacto">contacto</a></li>
          </ul>
        </div>
      </header>
    <main className='flex flex-col bg-opacity-60 bg-slate-950 flex-grow'>
      <section id="inicio" className="h-72 sm:h-full flex items-center justify-center">
        <div className="flex flex-col justify-around space-y-4 sm:space-y-0 sm:space-x-4" style={{ width: '90%' }}>
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
      <section id="servicios" className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-row justify-center" style={{ padding: '10px', width: '100%' }}>
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
        <div id="equipos" className=' h-65 w-80 sm:w-[40%] mb-4'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ justifyContent: 'center', gap: '10px', alignContent: 'center', display: 'flex', color: 'white' }}>
            <h2>Equipos</h2>
          </div>
          <Slider {...sliderSettings}>
            {imagesData.map((data, index) => (
              <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={data.imageUrl}
                    alt={`Imagen ${index + 1}`}
                  />
                </div>
                <div style={{ textAlign: 'center',color:'white' }}>
                  <p>{data.characteristic}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
      </section>
      <section>
      <div className='bg-yellow-400 h-48 w-100 mb-4'>
          {/* Contenido de la tercera sección */}
        </div>
      </section>
      <section className="gap-4 mb-4 mt-4 sm:mt-0 flex flex-col items-center sm:flex-col justify-center sm:w-70" style={{ padding: '10px'}}>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta01_infografia_landing_grumacol_200722.png.jpg'></img>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta02_infografia_landing_grumacol_200722.png.jpg'></img>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta03_infografia_landing_grumacol_200722.png.jpg'></img>
        <img className='sm:w-3/6 w-11/12' src='https://grumacol.com/wp-content/uploads/2020/10/PPta04_infografia_landing_grumacol_200722.png.jpg'></img>
      </section>
      <footer id="contacto" className='bg-slate-950'  style={{ height: '20%' }}>
        <div className="flex justify between items-center h-full px-4">
          <div className='text-xs font-normal sm:text-sm lg:text-base xl:text-lg text-white'>
            <p>Teléfono: +123-456-789</p>
            <p>Correo: info@tudominio.com</p>
            <p>Dirrecion: Soledad-Atlantico</p>
          </div>
          <div  className="flex">
            <a href='https://api.whatsapp.com/send?phone=573206499311'> <Whats/></a> 
            <a href='https://www.instagram.com/lpvingenieria/'><IconoInstagram/></a>
            <a href='https://www.instagram.com/ejuniorpacheco/'><IconoGmail/></a>
          </div>
        </div>
      </footer>
    </main>
  </div>
);

}

 export default App
 