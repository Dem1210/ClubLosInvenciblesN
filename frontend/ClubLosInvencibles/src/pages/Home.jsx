// src/pages/Home.jsx
import TeamSection from '../components/TeamSection';

const femalePlayers = [
    { image: '/Team1G.jpg' },
    { image: '/Team2G.jpg' },
    { image: '/Team3G.jpg' },
    { image: '/Team4G.jpg' }
    ];

const malePlayers = [
    { image: '/Team6.jpg' },
    { image: '/Team10.jpg' },
    { image: '/Team3.jpg' },
    { image: '/Team5.jpg' }
    ];

const Home = () => {
    return (
        <main className="bg-[#161059] h-[100vh] w-full p-0 m-0 md:flex md:flex-wrap">
    <section className="bg-[url('../public/team7.png')] bg-cover bg-center opacity-90 bg-no-repeat flex flex-col justify-end align-end w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <div className="h-[20vh] inset-0 bg-[#161059] bg-opacity-60 backdrop-blur-[16px] px-4 sm:px-8 md:px-20">
            <div className="relative z-10 mx-4 sm:mx-8 md:mx-[150px] mt-8 text-white">
                <h1 className="text-3xl sm:text-4xl font-bold">Club Los Invencibles Naiguata</h1>
                <p className="mt-4 text-lg sm:text-xl">Fuerza, Victoria y Pasion en cada saque</p>
            </div>
        </div>
    </section>

    <div className="min-h-screen w-full bg-[url('../public/logo.jpg')] bg-cover text-white opacity-90 flex flex-col gap-10 items-center bg-no-repeat   ">
        <div className="inset-0 bg-[#161059] bg-opacity-80 backdrop-blur-[30px] w-full flex flex-col items-center justify-around gap-10 h-auto px-[10%] md:px-[150px] sm:px-[10%]  py-20">
            <h1 className="text-3xl sm:text-4xl font-bold">Nuestro equipo</h1>
            <TeamSection
                title="Volley Femenino"
                players={femalePlayers}
                preinscripcionesLink="/preinscripciones-femenino"
                isMaleTeam={false} 
            />
            <TeamSection
                title="Volley Masculino"
                players={malePlayers}
                preinscripcionesLink="/preinscripciones-masculino"
                isMaleTeam={true} 
            />
        </div>
    </div>
</main>

    );
};

export default Home;
