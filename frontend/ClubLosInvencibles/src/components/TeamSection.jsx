// src/components/TeamSection.jsx
import ImageCarousel from './ImageCarousel';

const TeamSection = ({ title, players, preinscripcionesLink, isMaleTeam }) => {
    return (
        <section className={`w-full mx-0 flex flex-col sm:flex-row md:flex-row ${isMaleTeam ? 'sm:flex-row-reverse' : 'sm:flex-row'} justify-between items-center gap-10 sm:gap-20 text-center`}>
        <ImageCarousel images={players} isMaleTeam={isMaleTeam} />
        <div className="w-full sm:w-[40%] md:w-[20%] px-4 sm:px-8">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="mb-4 text-lg sm:text-2xl">
                ¿Desea unirse? No se pierda las{' '}
                <a
                    href={preinscripcionesLink}
                    className={`underline ${
                        isMaleTeam
                            ? 'drop-shadow-[2px_2px_0px_#3B53BF]'
                            : 'drop-shadow-[2px_2px_0px_#D91C3C]'
                    } text-[#FFFFFF] font-semibold`}
                >
                    Preinscripciones
                </a>
            </p>
        </div>
    </section>
    
    );
};

export default TeamSection;
