import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async() =>{
    const id =  getHash();
    const character = await getData(id);
    
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="
            ${character.name}">
            <h2> Nombre: ${character.name}</h2>

        
        </article>
        <article class="Characters-card">
            <h3>Episodios:<span> ${character.episode.length}</span></h3>
            <h3>Estado: ${character.status}</h3>
            <h3>Especie: ${character.species}</h3>
            <h3>Genero: ${character.gender}</h3>
            <h3>Nacido en : ${character.origin.name}</h3>
            <h3>Ultima vezz : ${character.location.name}</h3>
        </article>
    
    </div>
    
    `;
    return view;
};

export default Character;