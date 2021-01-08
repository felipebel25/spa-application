import Header from '../template/Header';
import Footer from '../template/Footer.js';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error from '../pages/Error';
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home ,
    '/:id': Character,
    '/contact': 'Contact',


}

const router = async() =>
{
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');
    
    header.innerHTML = await Header();
    
    
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error;
    
    content.innerHTML = await render();
    footer.innerHTML = await Footer();

}   

export default router;